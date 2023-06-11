console.log(process.env)
// isJest
export const isJest = () => Boolean(process.env.JEST_WORKER_ID)
// isVitest
export const isVitest = () => Boolean(process.env.VITEST)
// isTest
export const isTest = () => {
  return Boolean(process.env.TEST) || process.env.NODE_ENV === 'test' || isJest() || isVitest()
}
