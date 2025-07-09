import mook_data from "../data/ContactMook";
import React from "react";

const getContactList=()=>{

    return mook_data.contacts
}  

const getContactNameBiId=(id)=>{

    for(const contact of mook_data.contacts){
        if(Number(contact.id) === Number(id)){
            return contact.nombre
        }
    }
    return null
}

const getContactBiId=(id)=>{

    for(const contact of mook_data.contacts){
                  
        if(Number(contact.id) === Number(id)){
            console.log('El contacto es: '+ contact.nombre)
            return contact
        }
    }
    return null
}

export {getContactNameBiId,getContactBiId}
export default getContactList