// isTencentSFC
export const isTencentSCF = () => Boolean(process.env.SCF_FUNCTIONVERSION)
// isVercel
export const isVercel = () => Boolean(process.env.VERCEL)
// isNetlify
export const isNetlify = () => Boolean(process.env.NETLIFY)
// isHeroku
export const isHeroku = () => Boolean(process.env.HEROKU)
