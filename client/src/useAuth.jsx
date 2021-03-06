import { useEffect, useState } from 'react'
import axios from 'axios'

const useAuth = (code) => {
   const [accessToken, setAccessToken] = useState()
   const [refreshToken, setRefreshToken] = useState()
   const [expiresIn, setExpiresIn] = useState()

   useEffect(() => {
      axios
         .post('http://localhost:5000/login', {
            code
         })
         .then((res) => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
         })
         .catch((e) => {
            console.log(e)
            window.location = '/'
         })
   }, [code])

   useEffect(() => {
      if (!refreshToken) return

      const interval = setInterval(() => {
         axios
            .post('http://localhost:5000/refresh', {
               refreshToken
            })
            .then((res) => {
               setAccessToken(res.data.accessToken)
               setExpiresIn(res.data.expiresIn)
            })
            .catch((e) => {
               console.log(e)
               window.location = '/'
            })
      }, (expiresIn - 60) * 1000)

      return () => clearInterval(interval)
   }, [refreshToken, expiresIn])

   return accessToken
}

export default useAuth
