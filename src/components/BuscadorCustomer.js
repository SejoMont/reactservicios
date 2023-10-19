import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class BuscadorCustomer extends Component {
  urlApiCustomers = Global.urlApiCustomers;
  cajaId = React.createRef();

  state = {
    customer: {},
    status: false,
  };

  buscarCustomer = (e) => {
    e.preventDefault();
    var idCustomer = this.cajaId.current.value;
    var request = "customers/" + idCustomer + "/.json";

    axios.get(this.urlApiCustomers + request).then((response) => {
      this.setState({
        customer: response.data.customer,
        status: true,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>BuscadorCustomer</h1>
        <form onSubmit={this.buscarCustomer}>
          <label>ID Customer: </label>
          <input type="text" ref={this.cajaId}></input>
          <button>Buscar Cliente</button>
        </form>

        {this.state.status == true && (
          <div>
            <h1 style={{ color: "blue" }}>Cliente: {this.state.customer.id}</h1>
            <h2 style={{ color: "red" }}>
              Empresa: {this.state.customer.companyName}{" "}
            </h2>
          </div>
        )}
      </div>
    );
  }
}
