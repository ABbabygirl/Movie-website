import React, { useState, useEffect } from 'react'
import "./Style2.css"


function Home2() {

function Reply () {
  alert ("hello world")
}



  return (


    <div className='container bg-black border border-1 '>

      <div className='nav-links'>

          <nav className='top-nav '>

            <ul className='navbar-nav'>
              <li className='nav-item text-white'>
                <a className='nav-link' href='#'>Logo</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Home</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>About</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Login</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Signup</a>
              </li>
            </ul>

            <form action="" className='search-box'>
              <input className='form-control' type='text' placeholder='Search' />
              <button onClick={Reply() } className='btn btn-outline-primary' type='submit'>
                Search
              </button>
            </form>

          </nav>

      </div>

    </div>


    
  )
}

export default Home2