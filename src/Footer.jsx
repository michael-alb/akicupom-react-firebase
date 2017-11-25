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
                  <li><a className="white-text" href="#!">Blog</a></li>
                  <li><a className="white-text" href="#!">Termos de uso</a></li>
                  <li><a className="white-text" href="#!">Como usar o cupom</a></li>
                  <li><Link className="white-text" to={'perguntas-frenquentes'} >Perguntas frequentes (FAQ)</Link></li>
                  <li><a className="white-text" href="#!">Seja nosso parceiro</a></li>
                  <li><a className="white-text" href="#!">Fale conosco</a></li>
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