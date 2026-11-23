import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || "meraya-six.vercel.app";
  const proto = req.headers.get("x-forwarded-proto") || "https";
  const cleanOrigin = `${proto}://${host}`.replace(/\/+$/, "");
  const target = req.nextUrl.searchParams.get("target") || "app";
  const urlPath = target === "admin" ? "/admin" : "/";
  const appTitle = target === "admin" ? "لوحة إدارة مراية" : "تطبيق مراية للصالونات";
  const appDesc = target === "admin" ? "لوحة إدارة مراية للصالونات" : "مراية - صالونات الحلاقة والكوافير";
  const targetUrl = `${cleanOrigin}${urlPath}`;

  const batContent = [
    "@echo off",
    "chcp 65001 >nul",
    `title تثبيت ${appTitle}`,
    "color 0B",
    "cls",
    "echo =======================================================",
    `echo   مراية ^| Meraya - ${appTitle}`,
    "echo   جاري تثبيت الأيقونة على سطح المكتب...",
    "echo =======================================================",
    "echo.",
    `set "URL=${targetUrl}"`,
    `set "ICO=%LOCALAPPDATA%\\Meraya\\meraya_${target}.ico"`,
    `mkdir "%LOCALAPPDATA%\\Meraya" 2>nul`,
    `curl -s -L -o "%ICO%" "${cleanOrigin}/favicon.ico"`,
    "",
    'set "BROWSER="',
    'if exist "%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe" set "BROWSER=%ProgramFiles%\\Google\\Chrome\\Application\\chrome.exe"',
    'if not defined BROWSER if exist "%ProgramFiles(x86)%\\Google\\Chrome\\Application\\chrome.exe" set "BROWSER=%ProgramFiles(x86)%\\Google\\Chrome\\Application\\chrome.exe"',
    'if not defined BROWSER if exist "%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe" set "BROWSER=%ProgramFiles(x86)%\\Microsoft\\Edge\\Application\\msedge.exe"',
    'if not defined BROWSER if exist "%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe" set "BROWSER=%ProgramFiles%\\Microsoft\\Edge\\Application\\msedge.exe"',
    "",
    `powershell -NoProfile -Command "$ws = New-Object -ComObject WScript.Shell; $d = [Environment]::GetFolderPath('Desktop'); $temp = Join-Path $d 'Meraya_${target}_temp.lnk'; $s = $ws.CreateShortcut($temp); if ('%BROWSER%' -ne '') { $s.TargetPath = '%BROWSER%'; $s.Arguments = '--app=%URL% --window-size=1366,768'; } else { $s.TargetPath = '%URL%'; } if (Test-Path '%ICO%') { $s.IconLocation = '%ICO%,0'; } $s.Description = '${appDesc}'; $s.Save(); Rename-Item -Path $temp -NewName '${appTitle}.lnk' -Force; $p = [Environment]::GetFolderPath('Programs'); $tempP = Join-Path $p 'Meraya_${target}_temp.lnk'; $sp = $ws.CreateShortcut($tempP); if ('%BROWSER%' -ne '') { $sp.TargetPath = '%BROWSER%'; $sp.Arguments = '--app=%URL% --window-size=1366,768'; } else { $sp.TargetPath = '%URL%'; } if (Test-Path '%ICO%') { $sp.IconLocation = '%ICO%,0'; } $sp.Save(); Rename-Item -Path $tempP -NewName '${appTitle}.lnk' -Force"`,
    "",
    `echo   [OK] تم بنجاح تثبيت ${appTitle} على سطح المكتب وقائمة البرامج!`,
    "echo.",
    'if defined BROWSER (',
    '    start "" "%BROWSER%" --app="%URL%"',
    ") else (",
    '    start "" "%URL%"',
    ")",
    "timeout /t 3 >nul",
    "exit /b 0",
  ].join("\r\n");

  return new NextResponse(batContent, {
    headers: {
      "Content-Type": "application/octet-stream; charset=utf-8",
      "Content-Disposition": `attachment; filename="Install-Meraya-${target}.bat"`,
      "Cache-Control": "no-store, must-revalidate",
    },
  });
}
