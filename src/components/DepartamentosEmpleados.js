import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class DepartamentosEmpleados extends Component {
  selectDepartamento = React.createRef();

  state = {
    empleados: [],
    departamentos: [],
    statusDept: false,
    statusEmpl: false,
  };

  buscarEmpleados = (e) => {
    e.preventDefault();

    var idDepartamento = this.selectDepartamento.current.value;
    var request = "api/empleados/empleadosdepartamento/" + idDepartamento;

    var url = Global.urlApiEmpleados+request

    axios.get(url).then(response => {
      this.setState({
        empleados: response.data,
        statusEmpl: true,
      })
    })
  };

  loadDepartamentos = () => {
    var request = "api/departamentos";
    var url = Global.urlApiDepartamentos + request;

    axios.get(url).then((response) => {
      this.setState({
        departamentos: response.data,
        statusDept: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadDepartamentos();
  };

  render() {
    return (
      <div>
        <h1>DepartamentosEmpleados</h1>
        <form>
          <label>Seleccione un departamento: </label>
          <select ref={this.selectDepartamento}>
            {this.state.statusDept == true &&
              this.state.departamentos.map((departamento, index) => {
                return (
                  <option value={departamento.Numero} key={index}>
                    {departamento.Nombre}
                  </option>
                );
              })}
          </select>
          <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
        </form>
        <ul>
          {this.state.statusEmpl == true && (
            this.state.empleados.map((empleado, index) => {
              return(
                <li key={index}>{empleado.apellido}</li>
              )
            })
          )}
        </ul>
      </div>
    );
  }
}
