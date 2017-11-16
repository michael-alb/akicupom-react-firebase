import React, { Component } from 'react'
import axios from 'axios'

import AnuncioHome from './AnuncioHome'

// https://mercadodev-cdd2a.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22empregos-e-negocios%22

class Categoria extends Component {
    constructor(props){
        super(props)

        this.state = {
            anuncios: {},
            isLoading: false
        }
        
        this.loadAnuncios = this.loadAnuncios.bind(this)
        this.loadAnuncios(this.props.match.params.urlCategoria)
    }

    loadAnuncios(urlCategoria){
        this.setState({ 
            isLoading: true,
            anuncios: {}
         })
        //carregdr dados
        const url = `https://mercadodev-cdd2a.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`
        axios.get(url)
        .then(data => {
            this.setState({ anuncios: data.data, isLoading: false })
            this.categoria = urlCategoria
        })
    }

    componentWillReceiveProps(newProps){
        if(newProps.match.params.urlCategoria){
            if(this.categoria !== newProps.match.params.urlCategoria){
                this.loadAnuncios(newProps.match.params.urlCategoria)
            }
        }
    }

    render(){
        return(
            <div>
                <h1>
                Categoria: &nbsp; 
                {this.props.match.params.urlCategoria}
                </h1>
                {
                    this.state.isLoading && <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
                }
                {
                    !this.state.isLoading  && Object.keys(this.state.anuncios).length === 0 && <p>Poxa ;(, não temos produtos nessa categoria!</p>
                }
                <div className="row" >
                    {Object.keys(this.state.anuncios).map( key => {
                        const anuncio = this.state.anuncios[key]
                        return <AnuncioHome key={key} id={key} anuncio ={anuncio} />
                    })}
                </div>
                
            </div>
        )
    }
}
export default Categoria