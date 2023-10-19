import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class ServicioCustomer extends Component {
  // Necesitamos una url de acceso al servicio API
  urlApiCustomers = Global.urlApiCustomers;

  // Necesitamos almacenar dentro de 'state'. un conjunto de objetos customers
  state = {
    customers: [],
  };

  // Metodo para cargar todos los clientes del servicio api
  loadCustomers = () => {
    console.log("Loading customers...");
    var request = "customers.json";
    axios.get(this.urlApiCustomers + request).then((response) => {
      // console.log(response.data);
      this.setState({
        customers: response.data.results,
      });
    });
  };

  // Metodo de ciclo de vida para cargar los clientes solamente al iniciar el component
  componentDidMount = () => {
    console.log("Creando Component");
    this.loadCustomers();
  };

  render() {
    return (
      <div>
        <h1>Servicio Customer</h1>
        {this.state.customers.map((cliente, index) => {
          return (
            <h2 style={{ color: "blue" }} key={index}>
              {cliente.contactName}
            </h2>
          );
        })}
      </div>
    );
  }
}
