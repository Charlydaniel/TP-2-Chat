import React, { useContext,useEffect,useParams} from 'react'
import ContactList from '../../Components/Contact-components/ContactList/ContactList'
import { ContactContext } from '../../Contexts/ContactContext'



export default function ContactScreen() {


  return (

    <div>
        <ContactList/>
    </div>
        

  )
}