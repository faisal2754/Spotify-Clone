import React, { useEffect, useState } from 'react'
import useAuth from './useAuth'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
   clientId: 'db0981169c6048b9b995897f6b3e0b18'
})

const Dashboard = ({ code }) => {
   const accessToken = useAuth(code)
   const [search, setSearch] = useState('')
   const [searchResults, setSearchResults] = useState([])

   useEffect(() => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
   }, [accessToken])

   useEffect(() => {
      if (!search) return setSearchResults([])
      if (!accessToken) return

      spotifyApi.searchTracks(search).then((res) => {})
   }, [search, accessToken])

   return (
      <Container
         className="d-flex flex-column py-2"
         style={{ height: '100vh' }}
      >
         <Form.Control
            type="search"
            placeholder="Search music"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
         />
         <div className="flex-grow-1 my-2" style={{ overflowY: 'auto' }}>
            Songs
         </div>
         <div>Bottom</div>
      </Container>
   )
}

export default Dashboard
