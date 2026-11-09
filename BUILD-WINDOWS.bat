@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install Node.js 22 LTS atau yang lebih baru.
 pause
 exit /b 1
)
if not exist node_modules (
 call npm.cmd ci
 if errorlevel 1 (
  pause
  exit /b 1
 )
)
call npm.cmd run build
if errorlevel 1 (
 pause
 exit /b 1
)
echo Build selesai. File statis tersedia di folder out.
pause
