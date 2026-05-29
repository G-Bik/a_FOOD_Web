import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/layout/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './components/layout/MainLayout'

function App() {


  return (
    <BrowserRouter>
    <MainLayout>
      <Routes>
        {/* <Route path='/' element = {<Home/>} /> */}
        {/* <Route path='/about' element = {<About/>} /> */}
      </Routes>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
