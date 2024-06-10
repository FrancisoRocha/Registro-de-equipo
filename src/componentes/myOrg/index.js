//import { useState } from "react";
import "./myOrg.css"

const MyOrg = (props) => {

    console.log();
    /*  const [mostrar, actualizarMostar] = useState(true)
    
        const maneiarClick = () =>{
            console.log("Mostrar/Oculatar elemento", !mostrar)
            actualizarMostar(!mostrar)
        } */

    return <section className="orSection">
        <h3 className="title">Mi Organizacion</h3>
        <img src="/img/add.png" alt="icon-add" onClick={props.cambiarMostrar} />
    </section>
}

export default MyOrg 