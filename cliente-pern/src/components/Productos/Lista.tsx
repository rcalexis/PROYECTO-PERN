import React from "react";

function Lista() {
  return (
    <div className="relative overflow-x-auto max-w-4xl mx-auto mt-10">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Nombre</th>
            <th scope="col" className="px-6 py-3">Precio</th>
            <th scope="col" className="px-6 py-3">Availavility</th>
          </tr>
        </thead>
        <tbody>
       
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Camiseta Azul
            </th>
            <td className="px-6 py-4">$19.99</td>
            <td className="px-6 py-4">false</td>
          </tr>

      
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Gorro de lana
            </th>
            <td className="px-6 py-4">$9.50</td>
            <td className="px-6 py-4">true</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default Lista;
