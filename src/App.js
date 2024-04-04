import React,{ Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'  
// import Home from './Home'
// import Login from './Login'
// import Signup from './Signup'
// import About from './About'
import Navbar from './Navbar'
// import Home2 from './Home2'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


const Home = lazy( () => import("./Home"))
const Login = lazy( () => import("./Login"))
const Signup = lazy( () => import("./Signup"))
const About = lazy( () => import("./About"))


function App() {
  return (

    <Suspense fallback= {<img src='./../logo192.png'/>}>
    <BrowserRouter>
    <Navbar/>

    <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/login" element={<Login />} />

    <Route path="/signup" element={<Signup />} />

    <Route path="/about" element={<About />} />

    {/* <Route path="/" element={<Home2 />} /> */}

    </Routes>
    
    
    
    </BrowserRouter>
    </Suspense>
  )
}

export default App