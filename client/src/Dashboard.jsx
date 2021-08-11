import React from 'react'
import useAuth from './useAuth'

const Dashboard = ({ code }) => {
   const accessToken = useAuth(code)
   return (
      <div>
         <h1>bruh</h1>
      </div>
   )
}

export default Dashboard
