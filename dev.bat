@echo off
:: Add Node.js to PATH for this session
SET "PATH=C:\Program Files\nodejs;%PATH%"

:: Run npm using the CMD executable directly to bypass PowerShell restrictions
call "C:\Program Files\nodejs\npm.cmd" run dev
pause
