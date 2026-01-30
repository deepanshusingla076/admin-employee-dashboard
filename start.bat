@echo off
echo Starting Admin-Employee Dashboard...
echo.

REM Start Backend Server
echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm run dev"

REM Wait 3 seconds for backend to initialize
timeout /t 3 /nobreak > nul

REM Start Frontend Server
echo Starting Frontend Server...
start "Frontend Server" cmd /k "npm start"

echo.
echo Both servers are starting...
echo Backend will run on http://localhost:5000
echo Frontend will run on http://localhost:3000
echo.
pause
