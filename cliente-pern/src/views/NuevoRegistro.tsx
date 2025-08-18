// import React from 'react'
import { Link, useActionData } from "react-router-dom"
import { Form , ActionFunctionArgs} from "react-router-dom"
import ErrorMassage from "../components/ErrorMassage"



export async function action({request}:ActionFunctionArgs) {

  const data = Object.fromEntries(await request.formData())
  // console.log(data);
  // console.log("llegue bien");

  let error = ''
  if (Object.values(data).includes('')) {
    error = 'Todos los campos son obligatorios menso'
    
  }
  if (error.length) {
    console.log(error);
    return error
  }
  
  
  return {}
  
  
}
export default function NuevoRegistro() {

  const error = useActionData() as String
  return (
    <div className="flex justify-between">
      <h2>Nuevo Registro</h2>
      {error && <ErrorMassage>{error}</ErrorMassage>}

      <h2 className="text-4xl font-black text-slate-500">Registrar</h2>

      <Link to="/" className="rounder-md bg-indigo-600 p-3 font-bold text-white shadow-sm hover:bg-indigo-500">Agregar registro</Link>
      <Form className="mt-10 space-y-4" method="POST" >
        <div>
          <label htmlFor="name" className="text-gray-800">Nombre registro</label>
          <input id="name" className="mt-2 block w-full p-3 bg-gray-50" placeholder="Nombre del registro" name="name" type="text" />
        </div>

          <div>
          <label htmlFor="number" className="text-gray-800">Numero registro</label>
          <input id="number" className="mt-2 block w-full p-3 bg-gray-50" placeholder="EJ. 200, 300" name="number" type="number" />
        </div>

        <input type="submit" className="mt-5 w-full bg-indigo-500 text-white font-bold text-lg cursor-pointer rounded"  value="Generar registro"/>


      </Form>
    
    </div>

  )
}
