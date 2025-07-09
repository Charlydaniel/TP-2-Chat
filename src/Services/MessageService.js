import mook_data from "../data/ContactMook";

const getMessagesBiContactId=(contact_id)=>{
    for(const contacto of mook_data.contacts){
        if(Number(contacto.id) ===Number(contact_id)){
            return contacto.messages
        }   
    }
    return null
}
export default getMessagesBiContactId