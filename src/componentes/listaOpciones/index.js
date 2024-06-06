import "./listaOpciones.css"

const listaOpciones = (props) => {

    const manejarCambio = (e) => {
        //console.log(e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opcion">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccione Equipo</option>
            {props.equipos.map((equipos, index) => { return <option key={index}>{equipos}</option> })}
        </select>
    </div>
}

export default listaOpciones