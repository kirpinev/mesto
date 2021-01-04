const express = require('express')
const path = require('path')

const app = express()
const PORT = 3000

app.use('/', express.static(path.join(__dirname, 'build')))

app.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'))
})

app.listen(process.env.PORT || PORT)
