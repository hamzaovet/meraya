import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const salonId = searchParams.get("salonId");
  const where: any = {};
  if (salonId) where.salonId = salonId;
  const staff = await (prisma as any).staffMember.findMany({ where, orderBy: { sortOrder: "asc" } });
  return NextResponse.json({ staff });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const member = await (prisma as any).staffMember.create({ data: body });
  return NextResponse.json({ success: true, member });
}

export async function PATCH(req: NextRequest) {
  const { id, ...data } = await req.json();
  const member = await (prisma as any).staffMember.update({ where: { id }, data });
  return NextResponse.json({ success: true, member });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await (prisma as any).staffMember.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
