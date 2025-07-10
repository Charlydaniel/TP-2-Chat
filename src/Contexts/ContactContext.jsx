import { createContext } from "react"
import { useState } from "react"
import getContactList from "../Services/ContactService"

export const ContactContext=createContext({ruta_actual:'',contacts:[], rutaimagen:'',isLoadingContacts:true})


const rutaimagen='/imgs/'
const ruta_actual='/'

const ContactContextProvider = ({ children }) => {

    const [contacts, setContacts] = useState([])
    const [isLoadingContacts, SetLoadingContact] = useState(true)
        
    setTimeout(() => {
        SetLoadingContact(true)
        const contactList = getContactList()
        setContacts(contactList)
        SetLoadingContact(false)
    }, 800);

    return (
        <ContactContext.Provider
            value={
                {
                    contacts: contacts,
                    rutaimagen: rutaimagen,
                    isLoadingContacts: isLoadingContacts,
                    ruta_actual:ruta_actual
                }
            }
        >
            {children}
        </ContactContext.Provider>
    )
} 

export default ContactContextProvider