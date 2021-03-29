import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import navbar from './comp/navbar'
import footer from './comp/footer'

import biglogo from "./assets/asd.webp"

import limpieza from "./assets/servicios/limpieza-no-lines.svg"
import varios from "./assets/servicios/cleaning-products.svg"
import sponge from "./assets/servicios/sponge.svg"
import brush from "./assets/servicios/brush.svg"

function App() {
  return (
    <div>
    {navbar()}
    <section className="text-center bg-light" >
        <div className="container p-5 ">
          <div className="card p-5" >
          <img src={biglogo} alt="" className="logo"></img>
          <h4>Dedicados a productos de limpieza de alto desempeño y a insumos de seguridad e higiene de alta calidad</h4>
          <Button className="btn btn-steber btn-lg" style={{width: "20%", alignSelf: "center", marginTop: "3%"}}>Contactanos</Button>
          </div>
        </div>
    </section>

    <section className="bg-light d-flex text-center justify-content-center">
      <div class="d-flex row p-3 m-5">
        <Card className="service-card m-2 animate__animated animate__bounce">
          <Card.Img variant="top" src={limpieza} className="service-card-image"  />
          <Card.Body>
            <Card.Title style={{color: "white"}}>Productos de Limpieza</Card.Title>
          </Card.Body>
        </Card>

        <Card className="service-card m-2">
          <Card.Img variant="top" src={sponge} className="service-card-image"  />
          <Card.Body>
            <Card.Title style={{color: "white"}}>Productos de Seguridad e Higiene</Card.Title>
          </Card.Body>
        </Card>

        <Card className="service-card m-2">
          <Card.Img variant="top" src={brush} className="service-card-image"  />
          <Card.Body>
            <Card.Title style={{color: "white"}}>Productos de Alto Rendimiento</Card.Title>
          </Card.Body>
        </Card>

        <Card className="service-card m-2">
          <Card.Img variant="top" src={varios} className="service-card-image"  />
          <Card.Body>
            <Card.Title style={{color: "white"}}>Insumos Varios</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </section>

    {footer()}
</div>
  );
}

export default App;
// https://mauritomeluso.wixsite.com/steberlester
