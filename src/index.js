import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ServicioCustomer from "./components/ServicioCustomer";
import BuscadorCustomer from "./components/BuscadorCustomer";
import CochesMarca from "./components/CochesMarca";
import DepartamentosEmpleados from "./components/DepartamentosEmpleados";
import EmpleadosOficios from "./components/EmpleadosOficios";
import Departamentos from "./components/MaestroDetalle/Departamentos";
import TablaMultiplicar from "./components/TablaMultiplicar/TablaMultiplicar";
import Home from "./components/rutasParametros/Home";
import NotFound from "./components/rutasParametros/NotFound";
import Router from "./components/Router";
import MenuRutas from "./components/MenuRutas";

import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ServicioCustomer/> */}
    {/* <BuscadorCustomer/> */}
    {/* <CochesMarca/> */}
    {/* <DepartamentosEmpleados/> */}
    {/* <EmpleadosOficios/> */}
    {/* <Departamentos/> */}
    {/* <TablaMultiplicar numero="9"/> */}
    {/* <Home/>
    <NotFound/> */}
    {/* <MenuRutas/> */}
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
