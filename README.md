# Cookie Vault (Windows)

Local Electron app for **authorized** cookie inventory, site profiles, session validation, HTTP **and SOCKS5** proxies, vault folders, restore/revive, and DevTools HAR import.

Cookie **values are never shown in the UI**.

## Quick start

```powershell
npm install
npm run dev
```

Production Windows build:

```powershell
npm run dist
```

## Features

- Site-first workflow — save a site once, reuse it
- Cookie inventory + expiry
- Import / convert (Netscape, JSON, header)
- Session validation + status guide
- Account insights (color-coded)
- Restore / revive packages
- Multi-proxy paste, speed test (via Google), auto-use fastest
- **HTTP + SOCKS5** proxies
- DevTools HAR / cURL import for accurate login and validation paths
- Per-profile vault folders

## Proxy paste examples

```
1.2.3.4:8080
user:pass@1.2.3.4:8080
socks5://1.2.3.4:1080
socks5://user:pass@1.2.3.4:1080
```

## Safety

Only use against sites and browser sessions you own or are authorized to administer.
