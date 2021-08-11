import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import SpotifyWebApi from 'spotify-web-api-node'

const app = express()
app.use(cors())
app.use(express.json())

app.post('/refresh', (req, res) => {
   const refreshToken = req.body.refreshToken
   console.log('hi')
   const spotifyApi = new SpotifyWebApi({
      clientId: 'db0981169c6048b9b995897f6b3e0b18',
      clientSecret: '589fac9ade1645478543bfe422cd521e',
      redirectUri: 'http://localhost:3000',
      refreshToken
   })

   spotifyApi
      .refreshAccessToken()
      .then((data) => {
         res.json({
            accessToken: data.body.access_token,
            expiresIn: data.body.expires_in
         })
      })
      .catch((e) => {
         console.log(e)
         res.sendStatus(400)
      })
})

app.post('/login', (req, res) => {
   const code = req.body.code
   const spotifyApi = new SpotifyWebApi({
      clientId: 'db0981169c6048b9b995897f6b3e0b18',
      clientSecret: '589fac9ade1645478543bfe422cd521e',
      redirectUri: 'http://localhost:3000'
   })

   spotifyApi
      .authorizationCodeGrant(code)
      .then((data) => {
         res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
         })
      })
      .catch((e) => {
         console.log(e)
         res.sendStatus(400)
      })
})

app.listen(5000, () => {
   console.log('🚀 Server is running on port 5000')
})
