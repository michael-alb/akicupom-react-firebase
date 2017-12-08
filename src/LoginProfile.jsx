import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import css from './css/LoginProfile.css'
import googlelogin from './img/google-login.svg'

import HeaderInterno from './HeaderInterno'
import HeaderHome from './HeaderHome'

function LoginProfile ({ appName, user, onAuth, onLogout }) {

  function renderUserData () {
    return (
      <div className='render-user-data'>            
          <img
            className='avatar circle'
            src={user.photoURL}
          />
        
        <p>{user.displayName}</p>
        <a class="link-sair" onClick={onLogout}>Sair
      </a>
      </div>
    )
  }

  return (
      <ul className='navbar right-top'> 
        <li>
        <p className='show-login'></p>
              {user ? renderUserData() : false }
        </li>
          
      </ul>
  )
}

export default LoginProfile