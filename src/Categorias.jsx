import React from 'react'
import { Link, Route } from 'react-router-dom'
import css from './css/Categorias.css'

import HeaderInterno from './HeaderInterno'
import Categoria from './Categoria'
import Promocao from './Promocao'

const Categorias = (props) => {
    return(
        <div>
        <HeaderInterno />
        <div className='container' style={{ paddingTop: '150px'}}>
            <div className='row'>
                <div className='col-lg-3' >
                    <ul>
                    {
                        props.categorias.map(
                            cat => {
                                return (
                                    <li key={cat.url}>
                                        <Link className="btn btn-warning h-100 m-2 col-sm" to={`/categorias/${cat.url}`}>{cat.categoria}&nbsp;&nbsp;<i className={`fa ${cat.icon}`}></i></Link>
                                    </li>
                                )
                            }
                        )
                    }
                    </ul>
                </div>
                <div className='col-lg-9' >
                    <Route path='/categorias/:urlCategoria' exact component={ Categoria } />
                    <Route path='/categorias/:urlCategoria/:idPromocao' render={(props) => <Promocao  {...props} />} />
                </div>
            </div>
        </div>
        </div>
    )
}
export default Categorias