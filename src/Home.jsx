import React, {Component} from 'react'
import base from './base'

import HeaderHome from './HeaderHome'
import PromocaoHome from './PromocaoHome'
import AdsHome from './AdsHome'
import LinkCategoria from './LinkCategoria'


class Home extends Component{
    constructor(props){
        super(props)
    
        this.state = {
          promocoes: []
        }
        base.bindToState('promocoes',{
          context: this,
          state: 'promocoes',
          queries:{
            limitToLast: 6
          }
        })
      }

    render() {
    let index = 0
    return (
        <div>
            <HeaderHome />
                <div className="container">
                <h3>Categorias</h3>
                <div className="row">
                { this.props.categorias.map( (cat, indice) => {
                    return [
                            <LinkCategoria categoria={cat} key={indice} />,
                            ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
                        ]
                })}
                </div>
                    <br/>
                    <br/>
                    <AdsHome />
                    <br/>
                    <br/>
                <h3>Ultimos Anúncios</h3>
                <div className="row">
                    { Object.keys(this.state.promocoes).map( key => {
                      const promocao = this.state.promocoes[key]
                    return <PromocaoHome key={key} id={key} promocao={promocao} />
                    })}
                </div>
                
                </div>
        </div>
    )
    }
}
export default Home