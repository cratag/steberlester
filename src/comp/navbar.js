import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Navbar, Nav} from 'react-bootstrap'

import logo from "../assets/logo.png"

import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

export default function navbar() {
  return (
  <div>
    <Navbar bg="dark" variant="dark" className="d-flex flex-row">
    <Navbar.Brand href="#home"><Link to="/" className="logo-border" style={{ color: '#FFF', textDecoration: "none" }}><img src={logo} alt=""></img> <span style={{fontWeight: 'bold'}}> Steber Lester S.R.L</span></Link></Navbar.Brand>
    <Nav>
      <Nav.Link href="#home" className="navbar-text"><Link to="products" className="navbar-link">Productos</Link></Nav.Link>
      <Nav.Link href="#features" className="navbar-text"><Link to="about" className="navbar-link">¿Quienes somos?</Link></Nav.Link>
      <Nav.Link href="#pricing" className="navbar-text"><Link to="contact" className="navbar-link">Contacto</Link></Nav.Link>
    </Nav>
    
{/*     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  </div>
  );
}