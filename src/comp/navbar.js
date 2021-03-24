import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

import logo from "../assets/logo.png"
export default function navbar() {
  return (
  <div>
    <Navbar bg="dark" variant="dark" className="d-flex flex-row">
    <Navbar.Brand href="#home"><img src={logo} alt=""></img> <span style={{fontWeight: 'bold'}}> Steber Lester S.R.L</span></Navbar.Brand>
    <Nav>
      <Nav.Link href="#home">Productos</Nav.Link>
      <Nav.Link href="#features">¿Quienes somos?</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
    </Nav>
    
{/*     <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form> */}
  </Navbar>
  </div>
  );
}