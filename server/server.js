import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import SpotifyWebApi from 'spotify-web-api-node'

if (process.env.NODE_ENV !== 'production') {
   dotenv.config()
}

const app = express()
app.use(cors())
app.use(express.json())

app.post('/refresh', (req, res) => {
   const refreshToken = req.body.refreshToken
   console.log('hi')
   const spotifyApi = new SpotifyWebApi({
      clientId: 'db0981169c6048b9b995897f6b3e0b18',
      clientSecret: process.env.SECRET,
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
   const spotifyApi = new SpotifyWebApi({
      clientId: 'db0981169c6048b9b995897f6b3e0b18',
      clientSecret: process.env.SECRET,
      redirectUri: 'http://localhost:3000'
   })
})
