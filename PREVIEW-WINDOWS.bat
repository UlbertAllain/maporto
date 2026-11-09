@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
 echo Install Node.js 22 LTS atau yang lebih baru.
 pause
 exit /b 1
)
echo Buka http://localhost:3000. Tekan Ctrl+C untuk berhenti.
node scripts\serve.mjs
pause
