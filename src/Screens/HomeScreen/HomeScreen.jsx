import React, { useContext, useEffect } from 'react'
import ChatComponent from '../../Components/Chat-component/ChatComponent'
import { Link, useParams } from 'react-router'
import { MessageContext } from '../../Contexts/MessageContext'
import Spinner from '../../Components/Spinner/Spinner'
import { useNavigate } from 'react-router'

export default function HomeScreen() {

  const {contact_id}=useParams()
  const {loadMessages,isLoadingContacts}=useContext(MessageContext)
  const navigate = useNavigate()

  useEffect(
    ()=>{
      loadMessages(contact_id)

    },[contact_id]
  )
  
  if(isLoadingContacts){
    return (<Spinner/>) 
  }


  return (
    <div>
        <ChatComponent
            contactId={contact_id}
            navigate={navigate}
        />
    </div>
  )
}
