import "./equipo.css"
import Colaborador from "../colaborador"

const Equipo = (props) => {

    //? DESTRUCTURACION 
    const  { colorPrimario, colorSecundario, titulo } = props.datos

    const obje = {
        backgroundColor: colorSecundario
    }

    return <section className="equipo" style={obje} >
        <h3 style={ {borderColor: colorPrimario} }>{titulo}</h3>
        <div className="colaboradores">
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
            <Colaborador />
        </div>
    </section>
}

export default Equipo