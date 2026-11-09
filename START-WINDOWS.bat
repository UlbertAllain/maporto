@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install Node.js 22 LTS atau yang lebih baru, lalu buka ulang file ini.
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
echo Buka http://localhost:3000 setelah server siap.
call npm.cmd run dev
pause
