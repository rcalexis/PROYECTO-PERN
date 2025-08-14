// import React from 'react'
import { Link } from "react-router-dom"

export default function NuevoRegistro() {
  return (
    <div className="flex justify-between">
      <h2>Nuevo Registro</h2>
      <Link to="/" className="rounder-md bg-indigo-600 p-3 font-bold text-white shadow-sm hover:bg-indigo-500">Todos los registro</Link>

    </div>
  )
}
