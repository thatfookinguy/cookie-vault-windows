# Build Cookie Vault for Windows (production)

## Requirements
- Windows 10/11 x64
- Node.js 20+ LTS
- npm

## Setup
```powershell
npm install
```

## Development
```powershell
npm run dev
```

## Production installer + portable EXE
```powershell
npm run dist
```

Outputs in `release\`:
- `CookieVault-*-Setup.exe` — NSIS installer
- `CookieVault-*-portable.exe` — portable

## Notes
- First install downloads Electron and may take several minutes.
- Unsigned builds may trigger SmartScreen warnings.
