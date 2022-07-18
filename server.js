/* eslint-disable @typescript-eslint/no-require-imports */
const express = require('express')

const pkgJSON = require('./package.json')

const app = express()

const port = 3100

app.use(express.static('zips'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/app-version', (req, res) => {
  const appVersionCode = +(req.query.appVersionCode || -1)

  console.log('appVersionCode => ', appVersionCode)

  res.json({
    errCode: 200,
    data:
      appVersionCode < pkgJSON.versionCode
        ? 'http://192.168.10.140:3100/starbridge-strategy-v0.1.2.zip'
        : '',
  })
})

app.listen(port, () => {
  console.log(`服务器跑起来了 -> http://127.0.0.1:${port}`)
})
