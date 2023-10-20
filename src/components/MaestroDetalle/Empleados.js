import React, { Component } from "react";
import Global from "../../Global";
import axios from "axios";

export default class Empleados extends Component {
  state = {
    empleados: [],
    status: false,
  };

  loadEmpleados = () => {
    var idDept = this.props.iddepartamento;
    var request = "api/empleados/empleadosdepartamento/" + idDept;

    var url = Global.urlApiEmpleados + request;

    axios.get(url).then((response) => {
      this.setState({
        status: true,
        empleados: response.data,
      });
    });
  };

  componentDidMount = () => {
    this.loadEmpleados();
  };

  componentDidUpdate = (oldProps) => {
    // dentro de oldProps tenemos el anterior props antes del render
    console.log("Old Props: " + oldProps.iddepartamento);
    console.log("Actual Props: " + this.props.iddepartamento);
    
    if(this.props.iddepartamento != oldProps.iddepartamento){
        this.loadEmpleados();
    }
  };

  render() {
    return (
      <div>
        <h2 style={{ color: "purple" }}>
          Empleado: {this.props.iddepartamento}
        </h2>
        <table border={1} cellPadding={5}>
          <thead>
            <tr>
              <th>Apellido</th>
              <th>Oficio</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {this.state.status == true &&
              this.state.empleados.map((empleado, index) => {
                return (
                  <tr key={index}>
                    <td>{empleado.apellido}</td>
                    <td>{empleado.oficio}</td>
                    <td>{empleado.salario}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}
