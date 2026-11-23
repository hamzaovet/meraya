import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { username, password, pinCode } = body;

    if (!username || !password || !pinCode) {
      return NextResponse.json({ error: "بيانات ناقصة" }, { status: 400 });
    }

    const user = await (prisma as any).user.findUnique({ where: { username } });
    if (!user) return NextResponse.json({ error: "بيانات الدخول غلط" }, { status: 401 });
    if (!user.isActive) return NextResponse.json({ error: "الحساب موقوف، تواصل مع المالك" }, { status: 403 });
    if (user.password !== password) return NextResponse.json({ error: "كلمة المرور غلط" }, { status: 401 });
    if (user.pinCode !== pinCode) return NextResponse.json({ error: "كود الأمان غلط" }, { status: 401 });

    return NextResponse.json({
      success: true,
      user: { id: user.id, username: user.username, name: user.name, role: user.role },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
