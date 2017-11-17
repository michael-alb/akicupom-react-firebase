import React, {Component} from 'react'
import axios from 'axios'

class Promocao extends Component{
    constructor(props){
        super(props)

        this.state = {
            promocao: {},
            isLoading: true
        }

        const id = this.props.match.params.idPromocao
        const url = `https://akicupom-e5439.firebaseio.com//promocoes/${id}.json`
        axios
            .get(url)
            .then(data =>{
                this.setState({ promocao: data.data, isLoading: false })
            })
    }
    render(){
        const promocao = this.state.promocao

        if(this.state.isLoading){
            return <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        }

        return(
            <div>
                <h1>{promocao.nome}</h1>
                <img src={promocao.foto}/>
                <p>{promocao.descricao}</p>
                <p className="small">{promocao.fonecedor}</p>
            </div>
        )
}
}
export default Promocao