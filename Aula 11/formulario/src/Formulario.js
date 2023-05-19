import React from 'react'

class Formulario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: "",
            email: "",
            mensagemEnviada: false
        }
        this.handleNomeChange = this.handleNomeChange.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleNomeChange = (event) => {
        this.setState({nome: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({mensagemEnviada: true})
    }
 
    render() {
        const { nome, email, mensagemEnviada } = this.state

        if (mensagemEnviada) {
            return(
                <div data-testid="mensagem-enviada">
                    <p>Mensagem enviada com sucesso!</p>
                    <p>Nome: {nome}</p>
                    <p>Email: {email}</p>
                </div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}></form>
        )
    }
     
}