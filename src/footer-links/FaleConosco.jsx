import React from 'react'
import HeaderInterno from '../HeaderInterno'

const FaleConosco = (props) => {
    return (
        <div>
            <HeaderInterno />
            <div className="container" style={{ paddingTop: '150px' }}>

                <div className="panel panel-default">
                    <div className="panel-heading"><p1>Dúvidas sobre o AkiCupom? Fale Conosco!</p1></div>
                    &nbsp;
                    <div className="panel-body">
                        <form>
                            <div className="form-group">
                                <label className="required" for="name">Seu nome:</label><br />
                                <input className="form-control" id="name" class="input" name="name" type="text" value="" size="30" /><br />
                                <span id="name_validation" class="error_message"></span>
                            </div>
                            <div className="form-group">
                                <label class="required" for="email">Seu email:</label><br />
                                <input className="form-control" id="email" class="input" name="email" type="text" value="" size="30" /><br />
                                <span id="email_validation" class="error_message"></span>
                            </div>
                            <div className="form-group">
                                <label class="required" for="message">Sua mensagem:</label><br />
                                <textarea className="form-control" id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
                                <span id="message_validation" class="error_message"></span>
                            </div>

                            <input className="btn btn-basic btn-primary" id="submit_button" type="submit" value="Enviar email" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaleConosco