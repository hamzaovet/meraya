import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const salonId = searchParams.get("salonId");
  const where: any = {};
  if (salonId) where.salonId = salonId;
  const images = await (prisma as any).galleryImage.findMany({ where, orderBy: { sortOrder: "asc" } });
  return NextResponse.json({ images });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const img = await (prisma as any).galleryImage.create({ data: body });
  return NextResponse.json({ success: true, image: img });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  await (prisma as any).galleryImage.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
