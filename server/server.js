const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
   const spotifyApi = new SpotifyWebApi({
      clientId: 'db0981169c6048b9b995897f6b3e0b18',
      clientSecret: 'secret',
      redirectUri: 'http://localhost:3000'
   })
})
