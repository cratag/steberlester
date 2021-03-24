import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import navbar from './comp/navbar'


import biglogo from "./assets/asd.webp"

function App() {
  return (
    <div>
    {navbar()}
    <section className="bg-light text-center">
        <div className="container p-5">
          <div className="card p-5">
          <img src={biglogo} alt="" class="logo"></img>
          <h4>Dedicados a productos de limpieza de alto desempeño y a insumos de seguridad e higiene de alta calidad</h4>
          <Button className="btn btn-primary btn-lg" style={{width: "20%", alignSelf: "center", marginTop: "3%"}}>Contactanos</Button>
          </div>
        </div>
    </section>

  </div>
  );
}

export default App;
// https://mauritomeluso.wixsite.com/steberlester
