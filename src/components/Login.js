import React, { Component } from 'react';
import { Button, Form, Input, InputGroup } from 'reactstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import auth from "./auth";
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import ReactNotifications from 'react-notifications-component';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            Nome: '',
            Senha: ''
        }

        this.Senha = this.Senha.bind(this);
        this.Nome = this.Nome.bind(this);
        this.login = this.login.bind(this);
    }

    Nome(event) {
        this.setState({ Nome: event.target.value })
    }
    Senha(event) {
        this.setState({ Senha: event.target.value })
    }

    login(event) {
        if (this.state.Nome === '' || this.state.Senha === '') {
            store.addNotification({
                title: 'Preencha os campos',
                message: 'Email/Senha obrigatórios',
                type: 'warning',                         // 'default', 'success', 'info', 'warning'
                container: 'top-right',                // where to position the notifications
                dismiss: {
                    duration: 2000
                }
            })
        } else {
            fetch('https://localhost:5001/Api/Usuarios/Login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Name: this.state.Nome,
                    Senha: this.state.Senha
                })
            }).then((result) => {
                if (result.status === 200) {
                    auth.login(() => {
                        this.props.history.push("/PaginaInicial", this.state);
                    });
                }
                else {
                    store.addNotification({
                        title: 'Preencha os campos',
                        message: 'Usuário inválido',
                        type: 'warning',                         // 'default', 'success', 'info', 'warning'
                        container: 'top-right',                // where to position the notifications
                        dismiss: {
                            duration: 2000
                        }
                    })
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <ReactNotifications />
                <Form>
                    <InputGroup className="mb-3">
                        <Input type="text" onChange={this.Nome} placeholder="Nome" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                        <Input type="password" onKeyPress={event => {
                            if (event.key === "Enter") { this.login() }
                        }} onChange={this.Senha} placeholder="Senha" />
                    </InputGroup>
                    <Button onClick={this.login} color="success" block>Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;  