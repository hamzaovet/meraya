import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const salon = await (prisma as any).salon.findUnique({
      where: { slug },
      include: {
        services: { where: { isActive: true }, orderBy: [{ sortOrder: "asc" }, { price: "asc" }] },
        staff: { where: { isActive: true }, orderBy: { sortOrder: "asc" } },
        gallery: { orderBy: { sortOrder: "asc" } },
        reviews: { where: { isApproved: true }, orderBy: { createdAt: "desc" }, take: 20 },
      },
    });
    if (!salon) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ salon });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
