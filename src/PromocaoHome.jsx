import React from 'react'
import { Link } from 'react-router-dom'
import css from './css/AnuncioHome.css'


const PromocaoHome = ({id, promocao}) => {
    return(
        <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src={promocao.foto} alt="Foto" />
          <div className="card-body">
            <h4 className="card-title">
              <a to={`/anuncios/ver/`}>{promocao.nome}</a>
            </h4>
            <h5>{promocao.preco}</h5>
            <p className="card-text">{promocao.descricao}</p>
            <Link to={`/categorias/${promocao.categoria}/${id}`} className="btn btn-warning btn-lg btn-block">Pegar cupom</Link>
          </div>
        </div>
        </div>
    )
}
export default PromocaoHome