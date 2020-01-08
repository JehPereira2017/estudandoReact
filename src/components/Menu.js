import React, { useState } from 'react';
import auth from "./auth";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Menu = ({ props }) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  auth.login(() => {
    //props.history.push("/PaginaInicial");
  });
  const AVATAR = 'https://www.gravatar.com/avatar/429e504af19fc3e1cfa5c4326ef3394c?s=240&d=mm&r=pg';
  return (
    <Navbar color="faded" light>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <NavbarBrand className="mr-auto">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/PaginaInicial">Página Inicial</Link>
      </NavbarBrand>
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink ><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/tableClientes">Clientes</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <img src={AVATAR} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
              <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/Perfil">Perfil</Link></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Menu;