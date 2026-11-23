import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// SERVICES CRUD
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const salonId = searchParams.get("salonId");
  const where: any = {};
  if (salonId) where.salonId = salonId;
  const services = await (prisma as any).service.findMany({ where, orderBy: { sortOrder: "asc" } });
  return NextResponse.json({ services });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const service = await (prisma as any).service.create({ data: body });
  return NextResponse.json({ success: true, service });
}

export async function PATCH(req: NextRequest) {
  const { id, ...data } = await req.json();
  const service = await (prisma as any).service.update({ where: { id }, data });
  return NextResponse.json({ success: true, service });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await (prisma as any).service.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
