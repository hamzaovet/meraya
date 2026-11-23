@echo off
chcp 65001 >nul
title تثبيت تطبيق مراية - Meraya Salon App
color 0B
cls
echo =======================================================
echo   مراية ^| Meraya - تطبيق صالونات الحلاقة والكوافير
echo   جاري تثبيت الأيقونة على سطح المكتب...
echo =======================================================
echo.

set "URL=https://meraya-six.vercel.app/"
set "ICO=%LOCALAPPDATA%\Meraya\meraya.ico"
mkdir "%LOCALAPPDATA%\Meraya" 2>nul
curl -s -L -o "%ICO%" "https://meraya-six.vercel.app/favicon.ico"

set "BROWSER="
if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" set "BROWSER=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
if not defined BROWSER if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
if not defined BROWSER if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" set "BROWSER=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"

powershell -NoProfile -Command "$ws = New-Object -ComObject WScript.Shell; $d = [Environment]::GetFolderPath('Desktop'); $temp = Join-Path $d 'Meraya_temp.lnk'; $s = $ws.CreateShortcut($temp); if ('%BROWSER%' -ne '') { $s.TargetPath = '%BROWSER%'; $s.Arguments = '--app=%URL% --window-size=1366,768'; } else { $s.TargetPath = '%URL%'; } if (Test-Path '%ICO%') { $s.IconLocation = '%ICO%,0'; } $s.Description = 'مراية - صالونات الحلاقة والكوافير'; $s.Save(); Rename-Item -Path $temp -NewName 'تطبيق مراية للصالونات.lnk' -Force; $p = [Environment]::GetFolderPath('Programs'); $tempP = Join-Path $p 'Meraya_temp.lnk'; $sp = $ws.CreateShortcut($tempP); if ('%BROWSER%' -ne '') { $sp.TargetPath = '%BROWSER%'; $sp.Arguments = '--app=%URL% --window-size=1366,768'; } else { $sp.TargetPath = '%URL%'; } if (Test-Path '%ICO%') { $sp.IconLocation = '%ICO%,0'; } $sp.Save(); Rename-Item -Path $tempP -NewName 'تطبيق مراية للصالونات.lnk' -Force"

echo   [OK] تم بنجاح تثبيت تطبيق مراية على سطح المكتب وقائمة البرامج!
echo.
if defined BROWSER (
    start "" "%BROWSER%" --app="%URL%"
) else (
    start "" "%URL%"
)
timeout /t 3 >nul
exit /b 0
