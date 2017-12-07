import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/HeaderInterno.css'

import logo2 from './logo2.png'

function HeaderInterno ({user, appName, onLogout, onAuth}) {

    function renderUserData () {
        return (
          <ul className='navbar right'>
            <li>
              <img
                width='32'
                className='avatar circle responsive-img'
                src={user.photoURL}
              />
            </li>
            <li>{user.displayName}</li>
            <li>
              <button
                className='waves-effect waves-light btn blue darken-1'
                onClick={onLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        )
      }
    
      function renderLoginButton () {
        return (
          <ul className='right'>
            <li>
              <button
                className='waves-effect waves-light btn blue darken-1'
                onClick={onAuth}
              >
                Login
              </button>
            </li>
          </ul>
        )
    }
  
    return(
        <nav className="navbar fixed-top bg-yellow">
        <div className="container">
          <Link className="navbar-brand" to="/"><img alt="MercadoDev" src={logo2} height={80} /></Link>
          <ul className="nav navbar-nav navbar-right">
          <li><Link to="">{user ? renderUserData() : false}</Link></li>           
          </ul>
          </div>
      </nav>
    )
}

export default HeaderInterno