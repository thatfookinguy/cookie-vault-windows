const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("cookieVault", {
  chooseFolder: () => ipcRenderer.invoke("vault:choose-folder"),
  scanFolder: (folder) => ipcRenderer.invoke("vault:scan-folder", folder),
  openFile: (filePath) => ipcRenderer.invoke("vault:open-file", filePath),
  showFile: (filePath) => ipcRenderer.invoke("vault:show-file", filePath),
  getConfig: () => ipcRenderer.invoke("vault:get-config"),
  saveConfig: (config) => ipcRenderer.invoke("vault:save-config", config),
  testReachability: (url) => ipcRenderer.invoke("vault:test-reachability", url),
  validateSession: (payload) => ipcRenderer.invoke("vault:validate-session", payload),
  testProxy: (proxy) => ipcRenderer.invoke("vault:test-proxy", proxy),
  testAllProxies: (list) => ipcRenderer.invoke("vault:test-all-proxies", list),
  parseProxyPaste: (text) => ipcRenderer.invoke("vault:parse-proxy-paste", text),
  chooseVaultRoot: () => ipcRenderer.invoke("vault:choose-vault-root"),
  listVault: (root) => ipcRenderer.invoke("vault:list-vault", root),
  organizeToVault: (payload) => ipcRenderer.invoke("vault:organize", payload),
  openVaultFolder: (folderPath) => ipcRenderer.invoke("vault:open-vault-folder", folderPath),
  restoreCookies: (payload) => ipcRenderer.invoke("vault:restore-cookies", payload),
  chooseImportFiles: () => ipcRenderer.invoke("vault:choose-import-files"),
  importCookies: (payload) => ipcRenderer.invoke("vault:import-cookies", payload),
  openExternal: (url) => ipcRenderer.invoke("vault:open-external", url),
  attemptRefresh: (payload) => ipcRenderer.invoke("vault:attempt-refresh", payload),
  accountInsights: (payload) => ipcRenderer.invoke("vault:account-insights", payload),
  chooseHar: () => ipcRenderer.invoke("vault:choose-har"),
  analyzeDevtools: (payload) => ipcRenderer.invoke("vault:analyze-devtools", payload)
});
