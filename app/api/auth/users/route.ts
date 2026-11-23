import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const users = await (prisma as any).user.findMany({
      orderBy: { createdAt: "asc" },
      select: { id: true, username: true, name: true, role: true, isActive: true, createdAt: true },
    });
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password, pinCode, name, role, callerRole } = body;

    if (callerRole !== "OWNER") {
      return NextResponse.json({ error: "فقط المالك يمكنه إضافة حسابات" }, { status: 403 });
    }

    const user = await (prisma as any).user.create({
      data: { username, password, pinCode, name, role: role || "ADMIN" },
    });
    return NextResponse.json({ success: true, user });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, isActive, password, pinCode, name, callerRole } = body;

    if (callerRole !== "OWNER") {
      return NextResponse.json({ error: "فقط المالك يمكنه تعديل الحسابات" }, { status: 403 });
    }

    const data: any = {};
    if (isActive !== undefined) data.isActive = isActive;
    if (password) data.password = password;
    if (pinCode) data.pinCode = pinCode;
    if (name) data.name = name;

    const user = await (prisma as any).user.update({ where: { id }, data });
    return NextResponse.json({ success: true, user });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
