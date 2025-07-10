import React from 'react'
import './ContactItem.css'
import { useNavigate } from 'react-router'
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { MdVideoCall } from "react-icons/md";




export default function ContactItem({numero_telefono,id,rutaimagen,nombre,ultima_conexion}){

const mensaje_ultima_actualizacion='Ultima conexion:'
const navigate=useNavigate()

const handleIrAChat = () => {
    navigate(`/contacts/${id}/messages`)
}

    return (

            <div className='tarjeta-contacto'>
                <aside className='tarjeta-contacto-izquierda'>
                    <div className='tarjeta-contacto-contenedor-imagen'>
                        <img className='tarjeta-contacto-imagen' src={rutaimagen} alt={`profile img ${rutaimagen}`}/>
                    </div>
                    <span className='tarjeta-contacto-nombre'>{nombre}</span>
                </aside>
                <aside className='tarjeta-contacto-derecha'>
                    <div className='tarjeta-contacto-contenedor-detalles'>
                        <div className='tarjeta-contacto-datos-contenedor'>
                            <span className='tarjeta-contacto-telefono'>{numero_telefono}</span>
                            <span>{mensaje_ultima_actualizacion + ' ' +ultima_conexion}</span>
                        </div>
                        <div className='botonIrAMensajes-contenedor'>
                            <div className='tarjeta-contactos-botonera'>
                                <button className='botonIrAMensajes' onClick={handleIrAChat}><PiWhatsappLogoDuotone /></button>
                                <button className='boton_llamar' onClick={handleIrAChat}><FiPhoneCall /></button>
                                <button className='boton_video_llamar' onClick={handleIrAChat}><MdVideoCall /></button>
                            </div>
                        </div>        
                    </div>
                </aside>
            </div>


    )
}   