import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'

const PrivateRoute = ({ children }) => {
    const { user ,loading} = useContext(AuthContext)
    console.log(loading)
    if (user && user.uid) {
        return children
    
    }
    
    if (loading) {
      return  <p>Loading....</p>
    }

  return (
    <Navigate to='/login'>PrivateRoute</Navigate>
  )
}

export default PrivateRoute