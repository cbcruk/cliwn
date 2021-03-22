const express = require('express')
const proxy = require('express-http-proxy')
const localtunnel = require('localtunnel')
const { name } = require('../package.json')

const PORT = 5005

const app = express()

app.get('*', proxy('https://www.clien.net/'))

app.listen(PORT, async () => {
  const tunnel = await localtunnel({
    port: PORT,
    subdomain: name,
  })

  tunnel.on('request', (info) => {
    console.log(info)
  })

  tunnel.on('error', (error) => {
    console.log(error)
  })

  tunnel.on('close', () => {})
})
