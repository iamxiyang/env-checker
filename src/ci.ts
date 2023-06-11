// isTravisCI
export const isTravisCI = () => Boolean(process.env.TRAVIS)
// isCircleCI
export const isCircleCI = () => Boolean(process.env.CIRCLECI)
// isDroneIO
export const isDroneIO = () => Boolean(process.env.DRONE)
// isCodeship
export const isCodeship = () => Boolean(process.env.CI_NAME && process.env.CI_NAME === 'codeship')
// isJenkins
export const isJenkins = () => Boolean(process.env.JENKINS_URL)
// isStackblitz
export const isStackblitz = () => {
  return process.env.GIT_PROXY?.includes('stackblitz') ?? process.env.SHELL?.includes('jsh') ?? 'STACKBLITZ' in process.env
}
// isCI
export const isCI = () => {
  return process.env.CI || isTravisCI() || isCircleCI() || isDroneIO() || isCodeship() || isJenkins() || isStackblitz()
}
