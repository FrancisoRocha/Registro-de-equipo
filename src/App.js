import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MyOrg from './componentes/myOrg/index.js';
import { useState } from 'react';
import Equipo from './componentes/equipo/index.js';
//console.log(header);

function App() {

  const [mostrarFormulario, actualizarMostar] = useState(false)

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  //LISTA DE EQUIPOS 
  const equipos = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo:"Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    
]
  
  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)}/> }
      <MyOrg cambiarMostrar = {cambiarMostrar} />
      {
        equipos.map((equipos) => <Equipo datos={equipos} key={equipos.titulo}/> )
      }
    </div>
  );
}

export default App;
