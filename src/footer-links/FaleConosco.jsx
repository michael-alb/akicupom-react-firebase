import React from 'react'
import HeaderInterno from '../HeaderInterno'

const FaleConosco = (props) => {
    return (
        <div>
            <HeaderInterno />
            <div className="container">

                <div class="panel panel-default">
                    <div class="panel-heading"><p1>Dúvidas sobre o AkiCupom? Fale Conosco!</p1></div>
                    <div class="panel-body">
                        <form id="contact_form" action="#" method="POST">
                            <div class="row">
                                <label class="required" for="name">Seu nome:</label><br />
                                <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
                                <span id="name_validation" class="error_message"></span>
                            </div>
                            <div class="row">
                                <label class="required" for="email">Seu email:</label><br />
                                <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
                                <span id="email_validation" class="error_message"></span>
                            </div>
                            <div class="row">
                                <label class="required" for="message">Sua mensagem:</label><br />
                                <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
                                <span id="message_validation" class="error_message"></span>
                            </div>

                            <input id="submit_button" type="submit" value="Enviar email" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaleConosco