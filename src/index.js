//1) Importar las librebrias React y ReactDOM

//la libreria react definir que es un componente y como funcionan juntos los mismos
import React from "react";

//la libreria que sabe hacer que un componente aparezca en pantalla
import ReactDOM from "react-dom/client";

import App from "./App";

//2) obtener una referencia al div con id root
const el = document.getElementById("root")

//3) Le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(el);

//4) Creamos un componente
/*function App(){

    return <App />
} 
*/
//5) Mostrar el componente en pantalla
root.render(<App/>)
