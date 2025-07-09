import React, { useContext } from "react";
import { MessageContext } from "../../Contexts/MessageContext";
import './MessageStyle.css'

function MessageComponent({emisor,id,hora,texto}){
    
    const {eliminarChat} = useContext(MessageContext)

        let DinamicClassNameContainer='chat-container'
        let DinamicClassNameGlobe="chat-burbuja"

        if(emisor === 'yo'){
            DinamicClassNameContainer=DinamicClassNameContainer+' --propio' 
            DinamicClassNameGlobe=DinamicClassNameGlobe+' --propio'
        }
        /* Seccion para poder usar enter en el envio de mensajes con el textarea */

    return(
            <div className= {DinamicClassNameContainer}>
                <div className={DinamicClassNameGlobe}>
                    <div className="contenedor-eleiminar-chat">
                        <button onClick={()=>{eliminarChat(id)}} className="boton-eliminar-chat">X</button>
                    </div>
                    <div className="span-chat">
                        <span>{texto}</span>
                    </div>
                        <h5 className="hora-chat">{hora}</h5>
                </div>
            </div>
    )
}

export default MessageComponent