import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const where: any = {};
  if (from || to) {
    where.createdAt = {};
    if (from) where.createdAt.gte = new Date(from);
    if (to) where.createdAt.lte = new Date(to + "T23:59:59");
  }
  const txs = await (prisma as any).treasuryTransaction.findMany({ where, orderBy: { createdAt: "desc" }, take: 200 });
  const totalIn = txs.filter((t: any) => t.type === "IN").reduce((s: number, t: any) => s + t.amount, 0);
  const totalOut = txs.filter((t: any) => t.type === "OUT").reduce((s: number, t: any) => s + t.amount, 0);
  return NextResponse.json({ transactions: txs, totalIn, totalOut, balance: totalIn - totalOut });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const tx = await (prisma as any).treasuryTransaction.create({ data: body });
  return NextResponse.json({ success: true, transaction: tx });
}
