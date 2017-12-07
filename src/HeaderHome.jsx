import React, { Component } from 'react'
import { Link   } from 'react-router-dom'
import firebase from 'firebase'
import LoginProfile from './LoginProfile'

import logo from './logo.png'
import css from './css/HeaderHome.css'

//functional stateless component
//<p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Grátis &raquo;</Link></p>
class HeaderHome extends Component {

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
        return(
            <div className="jumbotron">
                <LoginProfile
                appName='Chat Real'
                user={this.state.user}
                onAuth={this.handleAuth}
                onLogout={this.handleLogout}
            />
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
}

export default HeaderHome