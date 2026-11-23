import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const origin = req.nextUrl.origin || process.env.NEXT_PUBLIC_APP_URL || "https://meraya-app.vercel.app";
  const cleanOrigin = origin.replace(/\/+$/, "");
  const target = req.nextUrl.searchParams.get("target") || "app";
  const urlPath = target === "admin" ? "/admin" : "/";
  const title = target === "admin" ? "Meraya Admin - لوحة إدارة مراية" : "مراية | Meraya - صالونات الحلاقة";

  const psScript = `
$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'
$ws = New-Object -ComObject WScript.Shell
$d = [Environment]::GetFolderPath('Desktop')

$browser = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
if (-not (Test-Path $browser)) { $browser = 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe' }
if (-not (Test-Path $browser)) { $browser = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' }
if (-not (Test-Path $browser)) { $browser = 'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe' }

$dirApp = Join-Path $env:LOCALAPPDATA 'MerayaStandalone'
New-Item -ItemType Directory -Force -Path $dirApp | Out-Null
$icoApp = Join-Path $dirApp 'meraya.ico'
try { Invoke-WebRequest -Uri '${cleanOrigin}/favicon.ico' -OutFile $icoApp -UseBasicParsing } catch {}

$url = '${cleanOrigin}${urlPath}'
$lnk = $ws.CreateShortcut((Join-Path $d ('${title}.lnk')))
if ($browser -and (Test-Path $browser)) {
  $lnk.TargetPath = $browser
  $lnk.Arguments = '--app=' + $url + ' --start-maximized'
} else { $lnk.TargetPath = $url }
if (Test-Path $icoApp) { $lnk.IconLocation = $icoApp + ',0' }
$lnk.Description = 'تطبيق مراية - صالونات الحلاقة والكوافير'
$lnk.Save()

Write-Host '  [OK] تم تثبيت أيقونة مراية على سطح المكتب!' -ForegroundColor Cyan
if ($browser -and (Test-Path $browser)) {
  Start-Process $browser -ArgumentList ('--app=' + $url + ' --start-maximized')
}
`;

  const encoded = Buffer.from(psScript, "utf16le").toString("base64");
  const batContent = [
    "@echo off",
    "chcp 65001 >nul",
    "title تثبيت تطبيق مراية - Meraya Salon App",
    "color 0B",
    "cls",
    "echo =======================================================",
    "echo   مراية | Meraya - تطبيق صالونات الحلاقة والكوافير",
    "echo   جاري تثبيت الأيقونة على سطح المكتب...",
    "echo =======================================================",
    "echo.",
    `powershell -NoProfile -ExecutionPolicy Bypass -EncodedCommand ${encoded}`,
    "echo.",
    "timeout /t 3 >nul",
  ].join("\r\n");

  return new NextResponse(batContent, {
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="Install-Meraya-${target}.bat"`,
      "Cache-Control": "no-store",
    },
  });
}
