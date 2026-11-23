import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const salonId = searchParams.get("salonId");
    const where: any = {};
    if (salonId) where.salonId = salonId;

    const appointments = await (prisma as any).appointment.findMany({
      where,
      orderBy: [{ date: "desc" }, { timeSlot: "desc" }],
      take: 100,
      include: { items: { include: { service: true, staff: true } } },
    });
    return NextResponse.json({ appointments });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      salonId, serviceId, staffId,
      customerName, customerPhone, customerEmail, customerGender,
      date, timeSlot, notes, source,
      otpEmail, otpCode,
    } = body;

    // Verify OTP
    const otpRecord = await (prisma as any).otpToken.findFirst({
      where: {
        email: otpEmail,
        otp: otpCode,
        purpose: "BOOKING_CONFIRM",
        used: false,
        expiresAt: { gte: new Date() },
      },
      orderBy: { createdAt: "desc" },
    });
    if (!otpRecord) {
      return NextResponse.json({ error: "كود التحقق غلط أو منتهي الصلاحية" }, { status: 401 });
    }

    // Mark OTP as used
    await (prisma as any).otpToken.update({ where: { id: otpRecord.id }, data: { used: true } });

    // Get service info
    const service = serviceId
      ? await (prisma as any).service.findUnique({ where: { id: serviceId } })
      : null;

    const totalPrice = service ? (service.discountPrice || service.price) : 0;
    const appointmentNo = `APT-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Find or create customer
    let customer = await (prisma as any).customer.findUnique({ where: { phone: customerPhone } });
    if (!customer) {
      customer = await (prisma as any).customer.create({
        data: { name: customerName, phone: customerPhone, email: customerEmail, gender: customerGender || null },
      });
    }

    const appointment = await (prisma as any).appointment.create({
      data: {
        appointmentNo,
        salonId,
        customerId: customer.id,
        customerName,
        customerPhone,
        customerGender: customerGender || null,
        date,
        timeSlot,
        status: "PENDING",
        totalPrice,
        finalPrice: totalPrice,
        notes: notes || null,
        source: source || "WEBSITE",
        items: service ? {
          create: [{
            serviceId,
            staffId: staffId || null,
            serviceName: service.nameAr || service.name,
            staffName: null,
            price: service.discountPrice || service.price,
            duration: service.duration,
          }]
        } : undefined,
      },
    });

    return NextResponse.json({ success: true, appointment });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...data } = body;

    const updated = await (prisma as any).appointment.update({ where: { id }, data });

    // Auto-create treasury record when done & paid
    if (data.status === "DONE" && data.paymentStatus === "PAID") {
      await (prisma as any).treasuryTransaction.create({
        data: {
          type: "IN",
          category: "APPOINTMENT",
          amount: updated.finalPrice || updated.totalPrice,
          description: `حجز ${updated.appointmentNo}`,
          reference: updated.id,
          paymentMethod: updated.paymentMethod || "CASH",
          createdBy: "system",
        },
      });
      await (prisma as any).customer.updateMany({
        where: { phone: updated.customerPhone },
        data: {
          totalVisits: { increment: 1 },
          totalSpent: { increment: updated.finalPrice || updated.totalPrice },
        },
      });
    }

    return NextResponse.json({ success: true, appointment: updated });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
