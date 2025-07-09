import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MessageContextProvider from './Contexts/MessageContext.jsx'
import ContactContextProvider from './Contexts/ContactContext.jsx'
import ContactDataContextProvider from './Contexts/ContactDataContext.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(


<BrowserRouter basename="/TP-2-Chat">
        <ContactContextProvider>
                <MessageContextProvider>
                        <ContactDataContextProvider>
                                <App />
                        </ContactDataContextProvider>
                </MessageContextProvider>
        </ContactContextProvider>
</BrowserRouter>



)
