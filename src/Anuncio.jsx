import React, {Component} from 'react'
import axios from 'axios'

class Anuncio extends Component{
    constructor(props){
        super(props)

        this.state = {
            anuncio: {},
            isLoading: true
        }

        const id = this.props.match.params.idAnuncio
        const url = `https://mercadodev-cdd2a.firebaseio.com/anuncios/${id}.json`
        axios
            .get(url)
            .then(data =>{
                this.setState({ anuncio: data.data, isLoading: false })
            })
    }
    render(){
        const anuncio = this.state.anuncio

        if(this.state.isLoading){
            return <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        }

        return(
            <div>
                <h1>{anuncio.nome}</h1>
                <img src={anuncio.foto}/>
                <p>{anuncio.descricao}</p>
                <p className="small">{anuncio.vendedor}</p>
            </div>
        )
}
}
export default Anuncio