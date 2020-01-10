import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './tableClientes.css';
import ModalClientes from './modalClientes';
import Menu from './Menu';

class tableClientes extends Component {
    constructor() {
        super();

        this.state = {
            isOpen: false
        };

        this.openModal = this.openModal.bind(this);
    }
    openModal = () => {
        this.setState({
            isOpen: true
        });
        console.log(this.state, 'table')
    }

    render() {
        return (
            <div>
                <Menu props={this.props}/>
                <ModalClientes isOpen={this.state.isOpen} />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Sobrenome</th>
                            <th scope="col">Edição</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>
                                <button type="button" onClick={e=>{this.openModal()}} className="btn btn-primary">Visualizar</button>
                                <button type="button" className="btn btn-success">Editar</button>
                                <button type="button" className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>
                                <button type="button" onClick={e=>{this.openModal()}} className="btn btn-primary">Visualizar</button>
                                <button type="button" className="btn btn-success">Editar</button>
                                <button type="button" className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>
                                <button type="button" onClick={e=>{this.openModal()}} className="btn btn-primary">Visualizar</button>
                                <button type="button" className="btn btn-success">Editar</button>
                                <button type="button" className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default tableClientes;  