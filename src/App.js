import React, { Component } from 'react'
import base from './base'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import css from './index.css'

import Home from './Home'
import NovaPromocao from './NovaPromocao'
import Categorias from './Categorias'
import Login from './Login'
import Footer from './Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: []
    }
    base.bindToState('categorias',{
      context: this,
      state: 'categorias'
    })
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/login' exact render={() => <Login />} />
          <Route path='/nova-promocao' exact render={() => <NovaPromocao categorias={this.state.categorias} /> } />
          <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias }/> } />
          <Redirect from="/nova-promocao" to="/login"/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
