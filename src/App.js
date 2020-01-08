import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login';
import { ProtectedRoute } from './components/PrivateRoute';
import PaginaInicial from './components/PaginaInicial';
import tableClientes from './components/tableClientes';
import Perfil from './components/Perfil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/Login' component={Login} />
        <ProtectedRoute exact path='/PaginaInicial' component={PaginaInicial} />
        <ProtectedRoute exact path='/tableClientes' component={tableClientes} />
        <ProtectedRoute exact path='/Perfil' component={Perfil} />
        <Route path="*" component={() => "Página não encontrada"} />
      </Switch>
    </Router>
  );
}

export default App;  
