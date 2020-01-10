import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import './Perfil.css';

class Perfil extends Component {
    render() {
        return (
            <div>
                <Menu props={this.props} />
                <div className="container-fluid">
                    <div className="panel panel-default">
                        <div className="panel-heading"><h5>Dados Pessoais</h5></div>
                        <div className="panel-body">
                            <div className="form-group">
                                <label htmlFor="usr">Nome:</label>
                                <input type="text" className="form-control" id="usr" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-nome" >Conte um pouco sobre você:</label>
                                <textarea id="input-descricao-suplemento" className="form-control no-resize" maxLength="2500" required=""></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sexo">Conselho</label>
                                <div>
                                    <label className="margn-r-sm">
                                        <input type="radio" value="0" name="tipo-registro" id="radio-tipo-registro-0"></input> CRN
                                            </label>
                                    <label>
                                        <input type="radio" value="1" name="tipo-registro" id="radio-tipo-registro-1" ></input> CRM
                                            </label>
                                    <label>
                                        <input type="radio" value="1" name="tipo-registro" id="radio-tipo-registro-1" ></input> CREF
                                            </label>
                                </div>
                                <input placeholder="CRN/CRM/CREF" type="text" className="form-control" name="registro" id="input-registro" maxLength="20"></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="sexo">Sexo</label>
                                <div>
                                    <label>
                                        <input type="radio" value="2" name="sexo" /> Masculino
                                            </label>
                                    <label>
                                        <input type="radio" value="1" name="sexo" /> Feminino
                                            </label>
                                </div>
                            </div>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="estados">Estado</label>
                                <div>
                                    <select className="form-control" name="estado" id="estados" data-placeholder="Selecione...">
                                        <option value="0" defaultValue=''>Selecione</option>
                                        <option value="1">Acre</option>
                                        <option value="2">Alagoas</option>
                                        <option value="3">Amazonas</option>
                                        <option value="4">Amapá</option>
                                        <option value="5">Bahia</option>
                                        <option value="6">Ceará</option>
                                        <option value="7">Distrito Federal</option>
                                        <option value="8">Espírito Santo</option>
                                        <option value="9">Goiás</option>
                                        <option value="10">Maranhão</option>
                                        <option value="11">Minas Gerais</option>
                                        <option value="12">Mato Grosso do Sul</option>
                                        <option value="13">Mato Grosso</option>
                                        <option value="14">Pará</option>
                                        <option value="15">Paraíba</option>
                                        <option value="16">Pernambuco</option>
                                        <option value="17">Piauí</option>
                                        <option value="18">Paraná</option>
                                        <option value="19">Rio de Janeiro</option>
                                        <option value="20">Rio Grande do Norte</option>
                                        <option value="21">Rondônia</option>
                                        <option value="22">Roraima</option>
                                        <option value="23">Rio Grande do Sul</option>
                                        <option value="24">Santa Catarina</option>
                                        <option value="25">Sergipe</option>
                                        <option value="26">São Paulo</option>
                                        <option value="27">Tocantins</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cidades">Cidade</label>
                                <div>
                                    <select className="form-control" name="cidade" id="cidades" data-placeholder="Selecione...">
                                        <option value="0">Selecione</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="input-email">Email</label>
                                <div>
                                    <input type="email" className="form-control" name="email" id="input-email" value="je.mary0804@gmail.com" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-success">Salvar</button>
                    <button type="button" className="btn btn-danger">Cancelar</button>
                </div>
            </div>
        );
    }
}

export default Perfil;  