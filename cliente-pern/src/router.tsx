import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Registros from "./views/Registros";
import NuevoRegistro,{action as generarRegistro} from "./views/NuevoRegistro";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element:<Registros />

            },
            {
                path: 'registro/nuevo',
                element:<NuevoRegistro />,
                action:generarRegistro
                
            }
    ]
    }

])