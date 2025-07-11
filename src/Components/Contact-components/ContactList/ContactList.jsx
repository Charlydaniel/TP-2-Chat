import React, { useContext, useState } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { ContactContext } from "../../../Contexts/ContactContext";
import Spinner from "../../Spinner/Spinner";
import './ContactList.css';
import { RiContactsFill } from "react-icons/ri";

export default function ContactList() {
    const { ruta_actual, contacts, rutaimagen, isLoadingContacts } = useContext(ContactContext);
    const [busqueda, setBusqueda] = useState("");

    if (isLoadingContacts) {
        return (
            <div>
                <Spinner />
            </div>
        );
    }

    const contactosFiltrados = contacts.filter(contact =>
        contact.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="lista-contactos">
            <header className="header-lista-contactos">
                <div className="lista-contactos-titulo">
                    <div className="icono-contacto"><RiContactsFill /></div>
                    <span>TUS CONTACTOS</span>
                </div>
                <div className="input-busqueda-contacto-contenedor">
                <input
                    type="text"
                    placeholder="Buscar contacto..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="input-busqueda-contacto"
                />
                </div>

            </header>

            {/* Mostrar resultados */}
            {contactosFiltrados.length === 0 ? (
                <p style={{ padding: "10px", color: "#999" }}>No se encontraron contactos.</p>
            ) : (
                contactosFiltrados.map((contact, clave) => (
                    <div key={clave}>
                        <ContactItem
                            id={contact.id}
                            nombre={contact.nombre}
                            ultima_conexion={contact.ultima_conexion}
                            rutaimagen={rutaimagen + contact.nombre + '.jpg'}
                            numero_telefono={contact.telefono}
                            ruta_actual={ruta_actual}
                        />
                    </div>
                ))
            )}
        </div>
    );
}