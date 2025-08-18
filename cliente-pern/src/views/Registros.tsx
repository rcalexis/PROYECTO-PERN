// import React from 'react'
import { Link } from "react-router-dom"
export default function Registros() {
  return (
    <div className="flex justify-between">
      <h2>Todos los registros</h2>
      <Link to="registro/nuevo" className="rounder-md bg-indigo-600 p-3 font-bold text-white shadow-sm hover:bg-indigo-500">Agregar registro</Link>
    </div>
  )
}
