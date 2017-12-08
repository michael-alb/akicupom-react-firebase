import React, { Component } from 'react'
import base from './base'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import css from './index.css'

import Home from './Home'
import NovaPromocao from './NovaPromocao'
import Categorias from './Categorias'
import Login from './Login'
import Footer from './Footer'
import Blog from './footer-links/Blog'
import ComoUsarOCupom from './footer-links/ComoUsarOCupom'
import FaleConosco from './footer-links/FaleConosco'
import PerguntasFrequentes from './footer-links/PerguntasFrequentes'
import SejaNossoParceiro from './footer-links/SejaNossoParceiro'
import TermosDeUso from './footer-links/TermosDeUso'

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

  //<Redirect from="/nova-promocao" to="/login"/>

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/login' exact render={() => <Login />} />
          <Route path='/blog' render={() => <Blog />} />
          <Route path='/como-usar-o-cupom' render={() => <ComoUsarOCupom />} />
          <Route path='/fale-conosco' render={() => <FaleConosco />} />
          <Route path='/perguntas-frequentes' render={() => <PerguntasFrequentes />} />
          <Route path='/seja-nosso-parceiro' render={() => <SejaNossoParceiro />} />
          <Route path='/termos-de-uso' render={() => <TermosDeUso />} />
          <Route path='/nova-promocao' exact render={() => <NovaPromocao categorias={this.state.categorias} /> } />
          <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias }/> } />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
