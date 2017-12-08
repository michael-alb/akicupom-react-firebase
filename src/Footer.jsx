import React from 'react'
import css from './css/bootstrap.min.css'
import { Link, Route } from 'react-router-dom'
import logoverde from './img/logoverde-mini3.png'


const Footer = (props) => {
    return (
        <footer className="page-footer blue center-on-small-only">

            <div class="container-fluid">
                <div class="row">

                    <div className="col-md-6">
                    <img src={logoverde}/>
                    </div>

                    <div class="col-md-6">
                        <h5 class="title">Institucional</h5>
                        <ul>
                            <li><Link className="white-text" to={'blog'}>Blog</Link></li>
                            <li><Link className="white-text" to={'termos-de-uso'}>Termos de uso</Link></li>
                            <li><Link className="white-text" to={'como-usar-o-cupom'}>Como usar o cupom</Link></li>
                            <li><Link className="white-text" to={'perguntas-frenquentes'} >Perguntas frequentes (FAQ)</Link></li>
                            <li><Link className="white-text" to={'seja-nosso-parceiro'}>Seja nosso parceiro</Link></li>
                            <li><Link className="white-text" to={'false-conosco'}>Fale conosco</Link></li>
                            <div className="fb-page" data-href="https://www.facebook.com/facebook" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false"><div className="fb-xfbml-parse-ignore"><blockquote cite="https://www.facebook.com/facebook"><a href="https://www.facebook.com/facebook">Facebook</a></blockquote></div></div>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2017 Copyright: <a href="https://www.facebook.com/facebook"> AkiCupom </a>

                </div>
            </div>

        </footer>

    )
}
export default Footer