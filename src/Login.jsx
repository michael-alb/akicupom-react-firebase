import React, { Component } from 'react'
import PropTypes from 'prop-types'

import HeaderInterno from './HeaderInterno'

class Login extends Component {
    render() {
        return (
            <div>
                <HeaderInterno />
                <div className='container' style={{ paddingTop: '150px'}}>
                <div className='row'>
                <div className='col-lg-4'></div>
                <div className='col-lg-4'>
                <h1>Login</h1>
                <br/>
                <form>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='Email'/>
                    </div>
                    <div className='form-group'>
                    <input className='form-control' type='password' placeholder='Senha'/>
                    </div>
                    <button className='btn btn-warning' type='button'>Entrar</button>
                    <hr/>
                    <p>ou faça o login com:</p>
                </form>
                </div>
                <div className='col-lg-4'></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login