@echo off
echo [1/3] Starting Docker Container...
docker compose up -d

echo [2/3] Waiting for Database (15s)...
timeout /t 15 /nobreak > nul

echo [3/3] Checking Database 'javaminigames'...
:: check database exist or not and create
docker exec postgres-javaminigames psql -U javaminigames -tc "SELECT 1 FROM pg_database WHERE datname = 'javaminigames'" | findstr /R "1" > nul
if %errorlevel% neq 0 (
    echo Creating database 'javaminigames'...
    docker exec postgres-javaminigames psql -U javaminigames -c "CREATE DATABASE javaminigames;"
) else (
    echo Database 'javaminigames' already exists.
)

echo --------------------------------------------------
echo SUCCESS: Docker and Database are ready.
echo Entering PostgreSQL Shell for 'javaminigames'...
echo --------------------------------------------------

:: run the docker directly to the javaminigames
docker exec -it postgres-javaminigames psql -U javaminigames -d javaminigames

pause