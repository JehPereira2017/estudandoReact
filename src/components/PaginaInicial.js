import React, { Component } from 'react';
import Menu from './Menu';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

class PaginaInicial extends Component {
    componentDidMount() {
        console.log(typeof(this.props.location.state))
        if (typeof(this.props.location.state) !== 'undefined') {
            store.addNotification({
                title: 'Bem vindo(a)',
                message: 'Olá ' + this.props.location.state.Nome,
                type: 'success',                         // 'default', 'success', 'info', 'warning'
                container: 'top-right',                // where to position the notifications
                dismiss: {
                    duration: 3000
                }
            })
        }
    };

    render() {
        return (<Menu props={this.props} />
        );
    }
}

export default PaginaInicial;  