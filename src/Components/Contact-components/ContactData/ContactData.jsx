import React,{useContext}from "react";
import './ContactDataStyle.css'
import { ContactDataContext } from "../../../Contexts/ContactDataContext";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineVideocam } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";


export default function ContactData(){
  const {contact} = useContext(ContactDataContext)


  return (

    <div className="tarjeta-contacto-contenedor">
      <header  className="header-contacto-contenedor">
        <div className="img-contacto-contenedor">
          <img className="tarjeta-contacto-img" src={'/imgs/' + contact.nombre + '.jpg'} alt="Foto contacto" />
        </div>
        <div className="datos-contacto">
          <h3>{contact.nombre}</h3>
          <p>Última conexión: {contact.ultima_conexion}</p>
        </div>
      </header>
      <div className="opciones-contacto-contenedor">
        <button className="opcion-contacto">
            <MdOutlineCall />
        </button>
        <button className="opcion-contacto">
           <MdOutlineVideocam/>
        </button>
        <button className="opcion-contacto">
            <IoMdSearch />
        </button>
      </div>
    </div>
  ) 


}
