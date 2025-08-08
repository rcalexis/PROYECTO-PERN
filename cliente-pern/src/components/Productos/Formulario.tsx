import React from "react";

function Formulario() {
  return (
    <form className="max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg space-y-6">
     
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800">Agregar Producto</h2>
        <p className="text-gray-500 mt-1">Ingrese los campos requeridos</p>
      </div>
 
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre del producto
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full h-12 px-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
          placeholder="Nombre del producto"
          required
        />
      </div>

      <div className="space-y-1">
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Precio
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full h-12 pl-8 pr-4 py-2 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </div>
      </div>


      <button
        type="submit"
        className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Guardar producto
      </button>
    </form>
  );
}

export default Formulario;