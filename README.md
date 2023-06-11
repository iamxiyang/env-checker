# env-checker

检查当前程序的运行环境。

## 安装

```bash
# pnpm
pnpm add @iamxiyang/env-checker
```

```bash
# yarn
yarn add @iamxiyang/env-checker
```

```bash
# npm
npm install @iamxiyang/env-checker
```

## 使用

```js
import { isNpm, isPnpm, isYarn, isBun, isPnpmCli, isYarnCli, isNpmCli, isCli, getPackageManager, isWin, isMac, isLinux, isStackblitz, isJenkins, isCodeship, isCI, isDroneIO, isCircleCI, isTravisCI, isTencentSCF, isVercel, isNetlify, isHeroku, isJest, isVitest, isTest } from '@iamxiyang/env-checker'

isNpm() // true if npm
isPnpm() // true if pnpm
isYarn() // true if yarn

getPackageManager() // 'npm' | 'pnpm' | 'yarn' | 'bun'

isTest() // true if test
```

## 说明

部分代码借助 AI 生成，未经详细测试，如有问题请提交反馈。
