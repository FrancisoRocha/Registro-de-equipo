import "./equipo.css"
import Colaborador from "../colaborador"
import hexToRgba from 'hex-to-rgba';


const Equipo = (props) => {

    //? DESTRUCTURACION 
    const { colorPrimario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obje = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }


    const estiloTitulo = { borderColor: colorPrimario }

    return <>
        { 
        colaboradores.length > 0 &&
            <section className="equipo" style={obje}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(eveto) => {
                        actualizarColor(eveto.target.value, id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador
                            datos={colaborador}
                            key={index}
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={ like }
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo