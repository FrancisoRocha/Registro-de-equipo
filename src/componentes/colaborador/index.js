import "./colaborador.css"
import { IoCloseOutline, IoHeartOutline, IoHeartSharp } from "react-icons/io5";


const Colaborador = (props) => {
    const {nombre,puesto,foto,id, fav} = props.datos
    const { colorPrimario,eliminarColaborador, like } = props
    return <div className="colaborador">
        <IoCloseOutline className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <IoHeartSharp color="#FF0000" onClick={ () => like(id) } /> : <IoHeartOutline onClick={ () => like(id) } />}
        </div>
    </div>
}

export default Colaborador