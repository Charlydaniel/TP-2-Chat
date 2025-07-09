import { React, useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext} from "../../../Contexts/ContactContext"
import Spinner from "../../Spinner/Spinner"
import './ContactList.css'
import { RiContactsFill } from "react-icons/ri";



export default function ContactList() {

    const { contacts, rutaimagen, isLoadingContacts } = useContext(ContactContext)

    if (isLoadingContacts) {
        return (
                <div>
                    <Spinner/>
                </div>
                
        )
    }

    return (
        
        <div className="lista-contactos">
            <header className="header-lista-contactos">
                <div className="lista-contactos-titulo">
                    <div className="icono-contacto"><RiContactsFill /></div>
                    <span>TUS CONTACTOS</span>
                </div>
            </header>
            {
                contacts.map(

                    (contact, clave) => {
                        return (
                            <div key={clave}>
                                <ContactItem
                                    id={contact.id}
                                    nombre={contact.nombre}
                                    ultima_conexion={contact.ultima_conexion}
                                    rutaimagen={rutaimagen + contact.nombre + '.jpg'}
                                />
                            </div>

                        )
                    }
                )
            }
        </div>
    )

} 