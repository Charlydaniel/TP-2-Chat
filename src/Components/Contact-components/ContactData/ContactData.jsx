import React,{useContext}from "react";
import './ContactDataStyle.css'
import { ContactDataContext } from "../../../Contexts/ContactDataContext";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineVideocam,MdOutlineEnhancedEncryption,MdOutlineSecurity } from "react-icons/md";
import { IoMdSearch,IoMdNotificationsOutline,IoMdReturnLeft } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { IoTimerOutline } from "react-icons/io5";
import { LuMessageSquareLock } from "react-icons/lu";
import { useNavigate } from 'react-router'
import { useParams } from "react-router";


export default function ContactData(){

  const navigate = useNavigate()
  const {contact_id}=useParams()
  
  const VolverAChat = () => {
    navigate(`/contacts/${contact_id}/messages`)
  }

  const {contact} = useContext(ContactDataContext)
  const opciones_menu = [
      {
        logo: <GrNotes />,
        texto: 'Añadir Notas'
      },
      {
        logo: <IoMdNotificationsOutline />,
        texto: 'Notificaciones',
        extra_text:''
      },
      {
        logo: <MdOutlineEnhancedEncryption />,
        texto: 'Cifrado',
        extra_text:'Los mensjaes y llamadas estan cifrados de extremo a extremo. Toca para verificarlo'
      },
      {
        logo: <IoTimerOutline />,
        texto: 'Mensajes temporales'
        ,
        extra_text:'Desactivados'
      
      },
      {
        logo: <LuMessageSquareLock />,
        texto: 'Restringir chat',
        extra_text:'Restringe y oculta este chat en este dispositivo'
      },
      {
        logo: <LuMessageSquareLock />,
        texto: 'Privacidad avanzada del chat',
        extra_text:'Desactivado'
      }
    ]

  

  const menu = opciones_menu.map(

    function (item_menu, clave) {
      return (
        <div key={clave}>
          <button className="contenedor-item-menu">
            <div className="item-menu-superior">
              <div className="logo-item-menu" id="logo-item-menu" name="logo-item-menu">{item_menu.logo}</div>
              <label className="logo-item-menu-tag" htmlFor="logo-item-menu">{item_menu.texto}</label>
            </div>
            <div className="item-menu-inferior">
              <div className="logo-item-menu"></div>
              <p className="descripcion-item-menu">{item_menu.extra_text}</p>
            </div>
          </button>
        </div>

      )
    }

  )

  return (

    <div className="tarjeta-contacto-contenedor">
      <header  className="header-contacto-contenedor">
        <div className="contonedor-boton-volver">
          <button className="tarjeta-contacto-boton-volver" onClick={VolverAChat}><IoMdReturnLeft /></button>
        </div>
        <div className="img-contacto-contenedor">
          <img className="tarjeta-contacto-img" src={'/imgs/' + contact.nombre + '.jpg'} alt="Foto contacto" />
        </div>
        <div className="terjeta-contactos-datos-contacto"> 
          <p className="tarjeta-contacto-nombre-contacto">{contact.nombre}</p>
          <p className="tarjeta-contacto-telefono-contacto">{contact.telefono}</p>
        </div>
      </header>
      <div className="opciones-contacto-contenedor">
        <button className="opcion-contacto" id="opcion-contacto-llamar" name="opcion-contacto-llamar">
            <MdOutlineCall />
            <label className="opcion-contacto-llamar" htmlFor="opcion-contacto-llamar">Llamar</label>
        </button>
        <button className="opcion-contacto" id="opcion-contacto-video" name="opcion-contacto-video">
           <MdOutlineVideocam/>
            <label className="opcion-contacto-video" htmlFor="opcion-contacto-video">Video</label>
        </button>
        <button className="opcion-contacto" id="opcion-contacto-buscar" name="opcion-contacto-buscar">
            <IoMdSearch />
             <label className="opcion-contacto-buscar" htmlFor="opcion-contacto-buscar">Buscar</label>
        </button>
      </div>
      <div className="contenedor-menu">
        {menu}
      </div>
    </div>
  ) 


}
