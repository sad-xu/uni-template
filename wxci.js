// npm run build build:mp-weixin
// npm run wxci appid=wx3a518e2ca6579a2b path=. version=1.0.3 desc=aaa
const ci = require('miniprogram-ci')

function getEnvParams(options) {
  const envParams = {}
  for (let i = 2, len = options.length; i < len; i++) {
    const arg = options[i].split('=')
    envParams[arg[0]] = arg[1]
  }
  return envParams
}

const {
  appid = '',
  path = '',
  version = '',
  desc = ''
} = getEnvParams(process.argv)

const project = new ci.Project({
  appid,
  type: 'miniProgram',
  projectPath: './dist/build/mp-weixin',
  privateKeyPath: `${path}/private.${appid}.key`
})

ci.upload({
  project,
  version,
  desc,
  setting: {
    es6: true,
    es7: true,
    minifyJS: true,
    minifyWXML: true,
    minifyWXSS: true,
    codeProtect: true,
    autoPrefixWXSS: true
  }
})
  .then(() => {
    console.log('finish!')
  })
  .catch((err) => {
    console.log('err: ', err)
  })
