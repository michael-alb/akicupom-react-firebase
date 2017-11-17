import React, { Component } from 'react'
import axios from 'axios'

import PromocaoHome from './PromocaoHome'
import css from './css/Categoria.css'

// https://mercadodev-cdd2a.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22empregos-e-negocios%22

class Categoria extends Component {
    constructor(props){
        super(props)

        this.state = {
            promocoes: {},
            isLoading: false
        }
        
        this.loadPromocoes = this.loadPromocoes.bind(this)
        this.loadPromocoes(this.props.match.params.urlCategoria)
    }

    loadPromocoes(urlCategoria){
        this.setState({ 
            isLoading: true,
            promocoes: {}
         })
        //carregdr dados
        const url = `https://akicupom-e5439.firebaseio.com/promocoes.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
        axios.get(url)
        .then(data => {
            this.setState({ promocoes: data.data, isLoading: false })
            this.categoria = urlCategoria
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlCategoria){
            if(this.categoria !== newProps.match.params.urlCategoria){
                this.loadPromocoes(newProps.match.params.urlCategoria)
            }
        }
    }

    render(){
        return(
            <div>
                <div className='breadcrumb'>
                    <h1>
                    Categoria: &nbsp; 
                    {this.props.match.params.urlCategoria}
                    </h1>
                </div>
                {
                    this.state.isLoading && <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                }
                {
                    !this.state.isLoading  && Object.keys(this.state.promocoes).length === 0 && <p>Poxa ;( não temos produtos nessa categoria!</p>
                }
                <div className="row" >
                    {Object.keys(this.state.promocoes).map( key => {
                        const promocao = this.state.promocoes[key]
                        return <PromocaoHome key={key} id={key} promocao ={promocao} />
                    })}
                </div>
                
            </div>
        )
    }
}
export default Categoria