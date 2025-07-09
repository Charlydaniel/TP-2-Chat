import React from 'react'
import './ContactItem.css'
import { useNavigate } from 'react-router'
import { PiWhatsappLogoDuotone } from "react-icons/pi";




export default function ContactItem({id,rutaimagen,nombre,ultima_conexion}){

const mensaje_ultima_actualizacion='Ultimo contacto:'
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
                    <div className='tarjeta-contacto-conexion-contenedor'>
                        <span>{mensaje_ultima_actualizacion + ' ' +ultima_conexion}</span>
                        </div>
                        <div className='botonIrAMensajes-contenedor'>
                            <button className='botonIrAMensajes' onClick={handleIrAChat}><PiWhatsappLogoDuotone /></button>
                        </div>        
                    </div>
                </aside>
            </div>


    )
}   