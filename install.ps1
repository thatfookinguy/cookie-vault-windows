# Cookie Vault — Windows setup (Node 20 or 22 LTS)
$ErrorActionPreference = "Stop"
Write-Host "Node:" (node -v)
Write-Host "npm:" (npm -v)
if (-not (Test-Path ".\package.json")) {
  Write-Host "ERROR: package.json not found. cd into the folder that contains package.json" -ForegroundColor Red
  exit 1
}
if (-not (Test-Path ".\src\main.jsx")) {
  Write-Host "ERROR: src\main.jsx missing — incomplete download. Use cookie-vault-windows-1.6.0.zip from the chat." -ForegroundColor Red
  exit 1
}
if (-not (Test-Path ".\electron\main.cjs")) {
  Write-Host "ERROR: electron\main.cjs missing — incomplete download. Use the full 1.6.0 zip." -ForegroundColor Red
  exit 1
}
Remove-Item -Recurse -Force node_modules, package-lock.json -ErrorAction SilentlyContinue
npm install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host "OK. Run: npm run dev" -ForegroundColor Green
