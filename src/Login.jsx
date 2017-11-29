import React, { Component } from 'react'
import PropTypes from 'prop-types'
import firebase from 'firebase'
import css from './css/Login.css'

import HeaderInterno from './HeaderInterno'

class Login extends Component {

    
    render() {

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().languageCode = 'pt';
        provider.setCustomParameters({
        'login_hint': 'user@example.com'
        });        

        function signIn(){
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // ...
                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
                });
        }

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
                    <button className="loginBtn loginBtn--google" onClick={signIn} type='button'>Google Login</button>
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