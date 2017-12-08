import React from 'react'
import css from './css/Footer.css'
import {Link, Route} from 'react-router-dom'


const Footer = (props) => {
    return(
        <footer className="py-5 bg-blue mt-4">
        <div className="container">
        <div className="row">
        <div className="col-4">
          <h5>Institucional</h5>
            <ul>
                  <li><Link className="white-text" to={'blog'}>Blog</Link></li>
                  <li><Link className="white-text" to={'termos-de-uso'}>Termos de uso</Link></li>
                  <li><Link className="white-text" to={'como-usar-o-cupom'}>Como usar o cupom</Link></li>
                  <li><Link className="white-text" to={'perguntas-frenquentes'} >Perguntas frequentes (FAQ)</Link></li>
                  <li><Link className="white-text" to={'seja-nosso-parceiro'}>Seja nosso parceiro</Link></li>
                  <li><Link className="white-text" to={'false-conosco'}>Fale conosco</Link></li>
            </ul>
        </div>
        <div className="col-4"></div>
        <div className="col-4">
            <div className="fb-page" data-href="https://www.facebook.com/facebook" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>
        </div>
    </div>
        </div>
        </footer>
    )
}
export default Footer