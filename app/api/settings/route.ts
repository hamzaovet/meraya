import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const settings = await (prisma as any).setting.findMany();
  return NextResponse.json({ settings });
}

export async function POST(req: NextRequest) {
  const { key, value } = await req.json();
  const s = await (prisma as any).setting.upsert({ where: { key }, update: { value }, create: { key, value } });
  return NextResponse.json({ success: true, setting: s });
}
