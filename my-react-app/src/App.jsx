import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyPage from './pages/MyPage'
import AboutMe from './pages/Components'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Docs from './pages/docs'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
     
      <NavBar />
      <Routes>
        {/* <Route exact path='/' redirect={'/home'} element={<MyPage />} /> */}
        <Route path='/about' element={<AboutMe />} />

        <Route path='/docs' element={< Docs />}/>

        <Route path="/docs" element={<Docs />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<MyPage heading1="Rapidly build modern websites " heading2="without ever leaving your HTML" para='A utility-first CSS framework packed with classes like, pt-4, text-center, rotate-90 that can be composed to build any design, directly in your markup.' btntxt='Get started'  showInput={true}      
        />}/> 
        



      </Routes> 
  

    </>
  )
 }

export default App