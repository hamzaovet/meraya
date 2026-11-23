import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { imageBase64 }: { imageBase64: string } = await req.json();
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY || "1705736b8f2b46dcbaeec8a6025aca83";
    const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, "");

    const formData = new URLSearchParams();
    formData.append("image", base64Data);
    formData.append("key", apiKey);

    const res = await fetch("https://api.imgbb.com/1/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();

    if (!data.success) return NextResponse.json({ error: "فشل رفع الصورة" }, { status: 500 });
    return NextResponse.json({ url: data.data.display_url, thumb: data.data.thumb?.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
