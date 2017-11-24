import React from 'react'
import { Link   } from 'react-router-dom'

import logo from './logo.png'
import css from './css/HeaderHome.css'

//functional stateless component
//<p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis &raquo;</Link></p>
const HeaderHome = (props) => {
    return(
        <div className="jumbotron">
        <div className="container">
        <p className="text-right"><Link to='/login'>Login</Link></p>
          <h1 className="display-3 text-center"><img src={logo} className="App-logo" alt="logo" width="200"  /></h1>
          <div className='row'>
          <div className='col-lg-3'></div>
            <div className='col-lg-6'>
                <div className="busca">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Buscar promoção" />
                    </div>
                </div>
            </div>
          <div className='col-lg-3'></div>
          </div>
        </div>
        </div>
    )
}

export default HeaderHome