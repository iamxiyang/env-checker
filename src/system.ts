// isMac
export const isMac = () => typeof process !== 'undefined' && process.platform === 'darwin'
// isWin
export const isWin = () => typeof process !== 'undefined' && process.platform === 'win32'
// isLinux
export const isLinux = () => typeof process !== 'undefined' && process.platform === 'linux'
