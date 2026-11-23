import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

function generateOtp(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { email, purpose = "BOOKING_CONFIRM" } = await req.json();

    if (!email) return NextResponse.json({ error: "البريد الإلكتروني مطلوب" }, { status: 400 });

    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save OTP
    await (prisma as any).otpToken.create({
      data: { email, otp, purpose, expiresAt },
    });

    // Send email via Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER || "hamzaovet@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"مراية | Meraya" <${process.env.GMAIL_USER || "hamzaovet@gmail.com"}>`,
      to: email,
      subject: "كود تأكيد حجز موعدك - مراية | Meraya",
      html: `
        <!DOCTYPE html>
        <html dir="rtl" lang="ar">
        <head><meta charset="UTF-8"></head>
        <body style="font-family: Arial, sans-serif; background: #f0fdf4; margin: 0; padding: 20px;">
          <div style="max-width: 480px; margin: 0 auto; background: white; border-radius: 20px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #0f766e, #14b8a6); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 28px;">✂️ مراية</h1>
              <p style="color: #ccfbf1; margin: 5px 0 0; font-size: 14px;">MERAYA</p>
            </div>
            <div style="padding: 30px; text-align: center;">
              <h2 style="color: #1f2937; margin-bottom: 8px;">كود تأكيد حجز موعدك</h2>
              <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">
                استخدم الكود التالي لتأكيد حجز موعدك. الكود صالح لمدة 10 دقائق.
              </p>
              <div style="background: #f0fdf4; border: 2px dashed #0f766e; border-radius: 16px; padding: 20px; margin: 20px 0;">
                <div style="font-size: 48px; font-weight: 900; letter-spacing: 8px; color: #0f766e;">${otp}</div>
              </div>
              <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
                لم تطلب هذا الكود؟ تجاهل هذه الرسالة.
              </p>
            </div>
            <div style="background: #f9fafb; padding: 16px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 11px; margin: 0;">
                تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, message: "تم إرسال كود التحقق على بريدك الإلكتروني" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "فشل إرسال البريد الإلكتروني" }, { status: 500 });
  }
}
