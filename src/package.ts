const pkgManager = process.env.PKG_MANAGER
const userAgent = process.env.npm_config_user_agent
const npmExecpath = process.env.npm_execpath?.toLowerCase()

const fileExcePath = process.argv[1].toLowerCase()

// isNpm
export const isNpm = () => {
  return isNpmCli() || pkgManager === 'npm' || (userAgent?.includes('npm') && !isPnpm())
}
// isYarn
export const isYarn = () => {
  return isYarnCli() || pkgManager === 'yarn' || userAgent?.includes('yarn')
}
// isPnpm
export const isPnpm = () => {
  return isPnpmCli() || pkgManager === 'pnpm' || userAgent?.includes('pnpm')
}
// isBun
export const isBun = () => {
  return pkgManager === 'bun' || userAgent?.includes('bun')
}
// isNpmCli npm -g
export const isNpmCli = () => {
  if (isPnpmCli()) {
    return false
  }
  return fileExcePath?.includes('npm') || npmExecpath?.includes('npm')
}
// isYarnCli yarn -g
export const isYarnCli = () => {
  return fileExcePath?.includes('yarn')
}
// isPnpmCli pnpm -g
// pnpm list -g | grep 'npm_package_name'
export const isPnpmCli = () => {
  return fileExcePath?.includes('pnpm') || npmExecpath?.includes('pnpm')
}
// isCli
export const isCli = () => {
  return isNpmCli() || isYarnCli() || isPnpmCli()
}
// getPackageManager
export const getPackageManager = () => {
  if (isPnpmCli() || isPnpm()) return 'pnpm'
  if (isYarnCli() || isYarn()) return 'yarn'
  if (isNpmCli() || isNpm()) return 'npm'
  if (isBun()) return 'bun'
  return 'npm'
}
