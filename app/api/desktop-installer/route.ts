import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const host =
    req.headers.get("x-forwarded-host") ||
    req.headers.get("host") ||
    "meraya-six.vercel.app";
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const cleanOrigin = `${proto}://${host}`.replace(/\/+$/, "");

  const psScript = `
$ErrorActionPreference = 'SilentlyContinue'
$ProgressPreference = 'SilentlyContinue'

$ws = New-Object -ComObject WScript.Shell
$desktop = [Environment]::GetFolderPath('Desktop')
$programs = [Environment]::GetFolderPath('Programs')

# Find Browser
$browser = ''
$paths = @(
    "$env:ProgramFiles\\Google\\Chrome\\Application\\chrome.exe",
    "\${env:ProgramFiles(x86)}\\Google\\Chrome\\Application\\chrome.exe",
    "\${env:ProgramFiles(x86)}\\Microsoft\\Edge\\Application\\msedge.exe",
    "$env:ProgramFiles\\Microsoft\\Edge\\Application\\msedge.exe"
)
foreach ($pth in $paths) {
    if (Test-Path $pth) { $browser = $pth; break }
}

$dirApp = Join-Path $env:LOCALAPPDATA "MerayaStandalone"
if (-not (Test-Path $dirApp)) { New-Item -ItemType Directory -Force -Path $dirApp | Out-Null }
$icoApp = Join-Path $dirApp "meraya.ico"
try {
    Invoke-WebRequest -Uri "${cleanOrigin}/meraya.ico" -OutFile $icoApp -UseBasicParsing -TimeoutSec 5
} catch {
    try { Invoke-WebRequest -Uri "${cleanOrigin}/favicon.ico" -OutFile $icoApp -UseBasicParsing -TimeoutSec 5 } catch {}
}

$apps = @(
    @{ name = "Meraya Salon.lnk"; url = "${cleanOrigin}/"; desc = "Meraya Salon Booking Platform" },
    @{ name = "Meraya Admin.lnk"; url = "${cleanOrigin}/admin"; desc = "Meraya Admin" }
)

foreach ($app in $apps) {
    foreach ($folder in @($desktop, $programs)) {
        $p = Join-Path $folder $app.name
        $sc = $ws.CreateShortcut($p)
        if ($browser) {
            $sc.TargetPath = $browser
            $sc.Arguments = "--app=" + $app.url + " --start-maximized"
        } else {
            $sc.TargetPath = $app.url
        }
        if (Test-Path $icoApp) { $sc.IconLocation = "$icoApp,0" }
        $sc.Description = $app.desc
        $sc.Save()
    }
}

Write-Host ""
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host "  [OK] تم بنجاح تثبيت تطبيق مراية للصالونات على الكمبيوتر!" -ForegroundColor Green
Write-Host "==========================================================" -ForegroundColor Yellow
Write-Host ""

if ($browser) {
    Start-Process $browser -ArgumentList ("--app=${cleanOrigin}/ --start-maximized")
}
`;

  const encoded = Buffer.from(psScript, "utf16le").toString("base64");

  const batContent = [
    "@echo off",
    "chcp 65001 >nul",
    "title Meraya Salon App - Desktop Installer",
    "color 0B",
    "cls",
    "echo ==============================================================================",
    "echo               مراية ^| Meraya - صالونات الحلاقة والكوافير",
    "echo             تثبيت تطبيق سطح المكتب المستقل (Windows Standalone App)",
    "echo ==============================================================================",
    "echo.",
    "echo  جاري تجهيز الأيقونة عالية الدقة وتثبيت التطبيق على سطح المكتب...",
    "echo.",
    `powershell.exe -NoProfile -ExecutionPolicy Bypass -EncodedCommand ${encoded}`,
    "echo.",
    "echo ==============================================================================",
    "echo        مبروك! تم تثبيت تطبيق مراية المستقل بنجاح على سطح المكتب.",
    "echo ==============================================================================",
    "echo.",
    "timeout /t 3 >nul",
    "exit /b 0",
  ].join("\r\n");

  return new NextResponse(batContent, {
    headers: {
      "Content-Type": "application/octet-stream; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Install-Meraya.bat"',
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
