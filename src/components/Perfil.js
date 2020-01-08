import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import './Perfil.css';

class Perfil extends Component {
    render() {
        return (
            <div>
                <Menu props={this.props} />
                <div class="warper container-fluid hidden-print">
                    <div class="col-md-8">
                        <div className="panel panel-default">
                            <div className="panel-heading"><h5>Dados Pessoais</h5></div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label htmlFor="input-nome" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Nome *</label>
                                    <div className="col-sm-7">
                                        <input type="text" className="form-control" name="nome" id="input-nome" ></input>
                                    </div>
                                    <label htmlFor="input-nome" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Conte um pouco sobre você </label>
                                    <div className="col-sm-7">
                                        <textarea id="input-descricao-suplemento" className="form-control no-resize" maxLength="2500" required=""></textarea>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sexo" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Conselho</label>
                                    <div className="col-sm-3 radio">
                                        <label className="margn-r-sm">
                                            <input type="radio" value="0" name="tipo-registro" id="radio-tipo-registro-0"></input> CRN
                                            </label>
                                        <label>
                                            <input type="radio" value="1" name="tipo-registro" id="radio-tipo-registro-1" ></input> CRM
                                            </label>
                                    </div>
                                    <div className="col-sm-6">
                                        <input placeholder="CRN/CRM" type="text" className="form-control" name="registro" id="input-registro" maxLength="20"></input>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="sexo" className="col-sm-3 control-label">Sexo *</label>
                                    <div className="col-sm-9 radio">
                                        <label className="margn-r-sm">
                                            <input type="radio" value="2" name="sexo" /> Masculino
                                            </label>
                                        <label>
                                            <input type="radio" value="1" name="sexo" /> Feminino
                                            </label>
                                    </div>
                                </div>
                                <hr />
                                <div className="form-group">
                                    <label htmlFor="estados" className="col-sm-3 control-label">Estado</label>
                                    <div className="col-sm-9">
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
                                    <label htmlFor="cidades" className="col-sm-3 control-label">Cidade</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" name="cidade" id="cidades" data-placeholder="Selecione...">
                                            <option value="0">Selecione</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="input-endereco" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Endereço</label>
                                    <div className="col-sm-5">
                                        <input type="text" className="form-control" name="rua" id="input-endereco" />
                                    </div>
                                    <label for="input-numero" className="col-sm-1 control-label" style={{ decoration: 'underline' }}>Número</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control inputmask" name="numero" id="input-numero" data-inputmask="'alias': 'numeric', 'digits': 0, 'rightAlign': false, 'allowMinus': false" maxLength="5" />
                                    </div>
                                </div>

                                <hr />
                                <div id="enderecos-nutri"></div>
                                <div className="form-group">
                                    <label for="input-telefone" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Telefone</label>
                                    <div className="col-sm-3">
                                        <input type="text" className="form-control inputmask fone" name="telefone" id="input-telefone" data-inputmask="'mask': '(99) 9999[9]-9999'" data-inputmask-greedy="false" value="(19) 99999-9788" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="input-email" className="col-sm-3 control-label" style={{ decoration: 'underline' }}>Email *</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" name="email" id="input-email" value="je.mary0804@gmail.com" />
                                    </div>
                                </div>
                                <small>
                                    Os campos marcados com * são obrigatórios
                                        <br />
                                    Os campos <span style={{ decoration: 'underline' }}>sublinhados</span> aparecerão nos relatórios
                                    </small>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        );
    }
}

export default Perfil;  