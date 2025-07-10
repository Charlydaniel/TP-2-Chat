
import React,{ createContext,useEffect} from "react";
import { useState } from "react";
import  '../data/ContactMook'
import getMessagesBiContactId from '../Services/MessageService'
import { getContactNameBiId } from "../Services/ContactService";



export const MessageContext=createContext({
        chatList:[],
        avisoMensajeVacio:'',
        contactoChat:'',
        eliminarChat:(id)=>{},
        enviarChat:(texto)=>{},
        rutaimagen:'',
        isLoadingContacts:true
})

const MessageContextProvider=({children})=>{
const [nombreContacto,SetContactName]=useState('')
const [rutaimagen,SetRutaImagen]=useState('')


   /*  const contacto='Juan' */
    let avisoMensajeVacio=''
    const [isLoadingContacts,SetLoadingContact]=useState(true)
    
const [chatList,SetChats]=useState([])


const eliminarChat =(id)=>{

    const listaNuevaChats=[]
    
    for(const chat_item of chatList){
        if(chat_item.id !== id){
            listaNuevaChats.push(chat_item)
        }
    }
        SetChats(listaNuevaChats)
        
}

    if(chatList.length===0){
            avisoMensajeVacio=avisoMensajeVacio+'Sin mensajes...'
        }

const AgregarChat=(texto)=>{

    let ahora=new Date().toLocaleTimeString()

    const copiaChats=[...chatList]
    copiaChats.push( {
        id:copiaChats.length+1,
        contacto:'yo',
        Texto:texto,
        hora:ahora

        }
    )

    SetChats(copiaChats)

} 

const loadMessages = (contact_id) => {
    SetLoadingContact(true)
        
        setTimeout(() => {
            const listaChats=getMessagesBiContactId(contact_id)
            SetChats(listaChats)
            const nombre=getContactNameBiId(contact_id)
            SetContactName(nombre)
            SetRutaImagen('/imgs/'+nombre+'.jpg')
            SetLoadingContact(false)
        }, 800) 

}

const datosMessageContext={
    chatList:chatList,
    avisoMensajeVacio:avisoMensajeVacio,
    contactoChat:nombreContacto,
    eliminarChat:eliminarChat,
    enviarChat:AgregarChat,
    loadMessages:loadMessages,
    rutaimagen:rutaimagen,
    isLoadingContacts:isLoadingContacts
}

return(
        <MessageContext.Provider
                        value={
                datosMessageContext
            }
        >
            {children}
        </MessageContext.Provider>
)
}

export default MessageContextProvider