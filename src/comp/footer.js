import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

import logo from "../assets/logo.png"
import map2 from "../assets/footer/location.png"
import mail from "../assets/footer/mail.png"
import clock from "../assets/footer/clock.png"

export default function footer() {
  return (
<div>
    <section>
        <div className="d-flex bg-dark p-5" style={{color: "#fff"}}>
        <div className="d-flex w-50">
            <span className="mx-3">
            <img src={logo} alt="" class="mt-2"></img>
            </span>
            
            <span>
            <p className="h2">
                NUESTRA COMPAÑIA
            </p>
            <p className="h6">
            Somos una empresa dedicada a brindar soluciones de limpieza y seguridad. Nos gusta estar cerca del cliente y poder asesorarlo para que cuando realice una compra realmente se sienta satisfecho con habernos elegido.
            </p>
            </span>
        </div>

            <div className="ml-5 mr-3">
            <div className="d-flex flex-column">
            <img src={map2} alt="" class="align-middle" style={{width: "48px"}}></img>
            <img src={mail} alt="" class="align-middle mt-4" style={{width: "48px"}}></img>
            </div>
            </div>
            <div className="w-25">
            <p className="h3">
                Oficina Central
            </p>
            <p className="h6">
            Plaza Nueva, 11 - 03001 Alicante 
            </p>
            <p className="h3">
                Contacto
            </p>
            <p className="h6">
            Tel y Fax. 966 180 268  |  695 951 205 
            </p>
            </div>
            <div className="ml-3 mr-3">
            <div className="d-flex flex-column">
            <img src={clock} alt="" class="align-middle" style={{width: "48px"}}></img>
            </div>
            </div>
            <div className="w-25">
            <p className="h3">
                Horarios
            </p>
            <p className="h6">
            Lun - Vie<span class="ml-3"></span>08:00hrs - 20:00hrs
            </p>
            <p className="h6">
            Sab<span class="ml-5"> 09:00hrs - 13:00hrs</span>
            </p>
            </div>
        </div>
    </section>
</div>
  );
}