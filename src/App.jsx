import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
