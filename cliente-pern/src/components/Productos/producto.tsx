// import React from "react";


function VerProducto() {
  return (
    <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        Detalles del Producto
      </h2>
      <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
        <li className="flex justify-between">
          <span className="font-semibold">ID:</span>
          <span>001</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Nombre:</span>
          <span>Camiseta Azul</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Precio:</span>
          <span>$19.99</span>
        </li>
        <li className="flex justify-between">
          <span className="font-semibold">Disponibilidad:</span>
          <span>true</span>
        </li>

      </ul>
    </div>
  );
}

export default VerProducto;
