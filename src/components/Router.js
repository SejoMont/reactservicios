import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TablaMultiplicar from "./TablaMultiplicar/TablaMultiplicar";
import Home from "./rutasParametros/Home";
import NotFound from "./rutasParametros/NotFound";
import Collatz from "./Collatz";
import MenuRutas from "./MenuRutas";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      // Esta funcion permite capturar los parametros de la ruta d forma dinamia
      // Vamos a recibir un parametro llamado mi numero

      var { minumero } = useParams();

      // devolvemos la etiqueta <TablaMultiplicar/> con su props de numero
      return <TablaMultiplicar numero={minumero} />;
    }

    function CollatzElement() {
      var { numero } = useParams();

      return <Collatz numero={numero}/>
    }

    return (
      <BrowserRouter>
      {/* Aqui incluiremos los dibujos estaticos para el menu de rutas */}
        <MenuRutas/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collatz/:numero" element={<CollatzElement/>} />
          <Route
            path="/tabla/:minumero"
            element={<TablaMultiplicarElement />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
