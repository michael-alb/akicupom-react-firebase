import React from 'react'
import HeaderInterno from '../HeaderInterno'

const PerguntasFrequentes = (props) => {
    return (
        <div>
            <HeaderInterno />
            <div className="container">
                <head>
                    <title>
                        Duvidas sobre o AkiCupom? Fale Conosco!
        </title>
                </head>
                <div id="after_submit"></div>
                <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
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

                    <input id="submit_button" type="submit" value="Send email" />
                </form>

            </div>
        </div>
    )
}