import React from 'react'
import './SpinnerStyle.css'

export default function Spinner() {


  return (
    
    <div className="spinner-overlay">
        <div className="spinner"/>
        <span>⌛Cargando ...</span>
    </div>
  )
}