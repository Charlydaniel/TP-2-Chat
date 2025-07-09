import { createContext } from "react"
import { useState } from "react"
import {getContactBiId} from "../Services/ContactService"

export const ContactDataContext=createContext({contact:null,isLoadingContactData:true,loadContact:()=>{}})



const ContactDataContextProvider = ({ children }) => {
    
    const rutaimagen='/img'
    const [contact, setContactData] = useState(null)
    
    const [isLoadingContactData, SetLoadingContactData] = useState(true)

    const loadContact =(contact_id)=>{
            SetLoadingContactData(true) 
            setTimeout(() => {
            const contact = getContactBiId(contact_id)
                setContactData(contact)
                SetLoadingContactData(false)
    }, 800);
    }

    return (
        <ContactDataContext.Provider
            value={
                        {
                            contact: contact,
                            rutaimagen: rutaimagen,
                            isLoadingContactData:isLoadingContactData,
                            loadContact:loadContact
                        }
                    }
        >
            {children}
        </ContactDataContext.Provider>
    )
} 

export default ContactDataContextProvider