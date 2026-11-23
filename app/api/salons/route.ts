import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const gender = searchParams.get("gender"); // MENS, WOMENS, or null for all
    const limit = parseInt(searchParams.get("limit") || "20");
    const featured = searchParams.get("featured");

    const where: any = { isActive: true };
    if (gender) where.gender = { in: [gender, "BOTH"] };
    if (featured === "1") where.isFeatured = true;

    const salons = await (prisma as any).salon.findMany({
      where,
      orderBy: [{ isFeatured: "desc" }, { sortOrder: "asc" }, { rating: "desc" }],
      take: limit,
      include: {
        services: { where: { isActive: true }, take: 5, orderBy: { sortOrder: "asc" } },
      },
    });
    return NextResponse.json({ salons });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const salon = await (prisma as any).salon.create({ data: body });
    return NextResponse.json({ success: true, salon });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, ...data } = body;
    const salon = await (prisma as any).salon.update({ where: { id }, data });
    return NextResponse.json({ success: true, salon });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    await (prisma as any).salon.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
