import './App.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import MyOrg from './componentes/myOrg/index.js';
import Equipo from './componentes/equipo/index.js';
import Footer from './componentes/footer/index.jsx';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
//console.log(header);

function App() {

  const [mostrarFormulario, actualizarMostar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor"
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam"
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor"
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack"
  }
])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9",
      fav: true
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF",
      fav: true
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2",
      fav: true
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8",
      fav: false
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5",
      fav: false
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9",
      fav: false
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "FFEEDF",
      fav: true
    }
  ])

  const cambiarMostrar = () => {
    actualizarMostar(!mostrarFormulario)
  }

  //REGISTRO DE COLABORADORES
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spreand Operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //ELIMINAR COLABORADOR 
  const eliminarColaborador = (id) =>{
    console.log("eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores)
  }

  //ACTUALIZAR COLOR DE EQUIPO
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ",color, id);
      const equiposActualizados = equipos.map((equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      })
      actualizarEquipos(equiposActualizados)
  }

  //CREAR EQUIPO
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  // LIKE O FAVORITO
  const like = (id) => {
    console.log("like", id)
    const likeColaborador = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = ! colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(likeColaborador)
  }

  return (
    <div>
      <Header />
      {/* { mostrarFormulario ? <Formulario /> : <></> } */}
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      <MyOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipos) => <Equipo
          datos = {equipos}
          key = {equipos.titulo}
          colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipos.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor = {actualizarColor}
          like = { like }
        />
        )
      }
      
      <Footer />

    </div>
  );
}

export default App;
