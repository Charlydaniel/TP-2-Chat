import React, {useContext } from "react";
import  './ChatStyle.css'
import { IoSend } from "react-icons/io5";
import { BiVideo } from "react-icons/bi";
import { PiPhoneCallThin } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import MessageComponent from "../Message-components/MessageComponent";
import { MessageContext } from "../../Contexts/MessageContext";
import { IoMdCloseCircle } from "react-icons/io";
import { useLocation } from "react-router";

import Swal from "sweetalert2";


function ChatComponent({contactId,navigate}){


    const {chatList,avisoMensajeVacio,contactoChat,rutaimagen,enviarChat}=useContext(MessageContext)
    const location = useLocation();


    const conversacion=chatList.map(
    function(message,clave){

            return(
                <div key={clave}>
                    <MessageComponent 
                        emisor={message.contacto}
                        id={message.id}
                        hora={message.hora}
                        texto={message.Texto}
                    />
                </div>

            )
    }
)

function HandleSubmitNewMessage(event){
    
    event.preventDefault()
    enviarChat(event.target.inputenvio.value)
    event.target.reset()
}

const HandleAlertMessage=()=>{
    Swal.fire({
    title: 'Bien hecho!',
    text: 'Mensaje enviado',
    icon: 'success',
    confirmButtonText: 'OK'
})
}

const handleIrATarjetaContacto = () => {
navigate(`/contacts/${contactId}/data`, {state: { ruta_anterior: location.pathname }})
}

const handleIrAContactos = () => {
    navigate(`/`)
}

    return(
        <div className="conversation-contenedor">
        <header className="header-contacto">
            <aside className="contenedor-imagen-contacto">
                <img className="imagen-contacto" src={rutaimagen} />
            </aside>
            <aside className="contenedor-header-derecha">
                <div >
                    <h3 className="nombre-contacto">
                        {contactoChat}
                    </h3>
                    <button className="boton-detalles-contacto" onClick={handleIrATarjetaContacto}>+ detalles del contacto</button>
                </div>
                <div className="head-iconos nombre-contacto">
                        <div className="contenedor-icono-video">< BiVideo /></div>
                        <div className="contenedor-icono-llamado"><PiPhoneCallThin /></div>
                        <div className="contenedor-icono-opciones"><SlOptionsVertical /></div>
                        <div className="contenedor-icono-opciones" onClick={handleIrAContactos}><IoMdCloseCircle /></div>
                </div>
            </aside>
        </header>
            <div className="chats-container">
                {conversacion}
                <div className="conversacion-aviso-al-usuario">
                    <span className="conversacion-aviso-al-usuario">{avisoMensajeVacio}</span>
                </div>
                <form onSubmit={HandleSubmitNewMessage} className="form-enviar-mensaje" action="submit" name="formenvio" id="formenvio">
                    <div className="enviar-mensaje-espacio">
                        <textarea required className="input-enviar-mensaje"  placeholder="Mensaje" name="inputenvio" id="inputenvio">
                        </textarea>
                        <button  onClick={HandleAlertMessage} type="submit" className="boton-chat-enviar"><IoSend /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChatComponent