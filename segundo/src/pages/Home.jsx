import React from 'react'

import { Navigate } from 'react-router-dom';


const Home = () => {
  const isAuth = false;

  return (
    <div>
      {isAuth ? <Navigate to="/" /> : <Navigate to="/login" />}
        "home"
    </div>
  )
}

export default Home
