import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import Home from '../components/Home'

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}

export default MyRoutes