import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Hello')
})

app.get('/setcookie', (req, res) => {
  res.cookie('cookie name', 'value cookie', {
    maxAge: 10000,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    expires: new Date('2022-12-31'),
  })
  res.send('set cookie')
})

app.get('/getcookie', (req, res) => {
  console.log(req.cookies)
  res.send('get cookie')
})

app.get('/deletecookie', (req, res) => {
  res.clearCookie('cookie name')
  res.send('get cookie')
})

app.listen(3000)
console.log('Server on port 3000')
