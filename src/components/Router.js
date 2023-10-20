import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import TablaMultiplicar from "./TablaMultiplicar/TablaMultiplicar";
import Home from "./rutasParametros/Home";
import NotFound from "./rutasParametros/NotFound";

export default class Router extends Component {
  render() {
    function TablaMultiplicarElement() {
      // Esta funcion permite capturar los parametros de la ruta d forma dinamia
      // Vamos a recibir un parametro llamado mi numero

      var { minumero } = useParams();

      // devolvemos la etiqueta <TablaMultiplicar/> con su props de numero
      return <TablaMultiplicar numero={minumero} />;
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
