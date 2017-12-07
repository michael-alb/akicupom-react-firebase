import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import css from './css/Login.css'
import googlelogin from './img/google-login.svg'

import HeaderInterno from './HeaderInterno'

class Login extends Component {

    
    constructor () {
        super()
        this.handleAuth = this.handleAuth.bind(this)
        this.handleLogout = this.handleLogout.bind(this)
    }
    
    state = {
        user: null
    }
    
    componentWillMount () {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }
    
      handleAuth () {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('https://www.googleapis.com/auth/plus.login')
    
        firebase.auth().signInWithPopup(provider)
          .then(result => console.log(`${result.user.email} ha iniciado sesión`))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`))
      }
    
      handleLogout () {
        firebase.auth().signOut()
          .then(result => console.log('Te has desconectado correctamente'))
          .catch(error => console.log(`Error ${error.code}: ${error.message}`))
      } 

      render(){
        return (
            <div>
                <HeaderInterno 
                appName='Chat Real'
                user={this.state.user}
                onAuth={this.handleAuth}
                onLogout={this.handleLogout}
                />
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
                    <button className='btn btn-warning btn-block' type='button'>Entrar</button>
                    <hr/>
                    <p>ou faça o login com:</p>
                    <button className="loginBtn loginBtn--google btn-block btn-lg" onClick={this.handleAuth} type='button'><img src={googlelogin}/>Entre com Google Login</button>
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