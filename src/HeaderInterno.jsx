import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/HeaderInterno.css'

import logo2 from './logo2.png'

const HeaderInterno = (props) => {
    return(
        <nav className="navbar fixed-top bg-yellow">
        <div className="container">
          <Link className="navbar-brand" to="/"><img alt="MercadoDev" src={logo2} height={80} /></Link>
          <ul className="nav navbar-nav navbar-right">
          <li><Link to="">Login</Link></li>
          </ul>
          </div>
      </nav>
    )
}
export default HeaderInterno