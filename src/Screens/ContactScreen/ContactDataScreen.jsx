import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { ContactDataContext } from '../../Contexts/ContactDataContext'
import Spinner from '../../Components/Spinner/Spinner'
import ContactData from '../../Components/Contact-components/ContactData/ContactData'

const ContactDataScreen = ()=> {

    const {contact_id} = useParams()
    const {isLoadingContactData,loadContact} = useContext(ContactDataContext)


    useEffect(
        () => {
            loadContact(contact_id)
            console.log('Secarga:'+ contact_id)
        },
        [contact_id]
    )

    if(isLoadingContactData){
        return (
            <Spinner/>
        )
    }
    return (
        <ContactData/>
    )
}

export default ContactDataScreen