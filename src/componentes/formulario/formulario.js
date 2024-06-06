import { useState } from "react"
import "./formulario.css"
import CampoTexto from "../campoTexto"
import ListaOpciones from "../listaOpciones"
import Boton from "../boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const mensajeEnvio = (e) =>{
        e.preventDefault()
        console.log("Formulario enviado")
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar)
    }

    return <section className="formulario">
        <form onSubmit={mensajeEnvio}>
            <h2>Rellana el formulario para crear el colaborador</h2>

            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />

            <CampoTexto 
                titulo="Puesto"
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            
            <CampoTexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton />
        </form>
    </section>
}

export default Formulario