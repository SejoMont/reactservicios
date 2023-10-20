import React, { Component } from "react";
import Global from "../Global";
import axios from "axios";

// Realizar una práctica en la que cargaremos los Oficios de los empleados dentro
// De un desplegable.
// Al seleccionar un elemento y con un botón, mostraremos los empleados del
// Oficio seleccionado en un tabla.

export default class EmpleadosOficios extends Component {
  selectOficio = React.createRef();

  state = {
    empleados: [],
    oficios: [],
    statusOf: false,
    statusEmpl: false,
  };

  buscarEmpleados = (e) => {
    e.preventDefault();

    var oficio = this.selectOficio.current.value;
    var request = "api/empleados/empleadosoficio/" + oficio;

    var url = Global.urlApiEmpleados + request;

    axios.get(url).then((response) => {
      this.setState({
        empleados: response.data,
        statusEmpl: true,
      });
    });
  };

  loadOficios = () => {
    
    var request = "api/empleados/oficios";
    var url = Global.urlApiEmpleados + request;

    axios.get(url).then((response) => {
      this.setState({
        oficios: response.data,
        statusOf: true,
      });
    });
  };

  componentDidMount = () => {
    this.loadOficios();
  };

  render() {
    return (
      <div>
        <h1>Empleados Oficios</h1>
        <form>
          <label>Seleccione un Oficio: </label>
          <select ref={this.selectOficio}>
            {this.state.statusOf == true &&
              this.state.oficios.map((oficio, index) => {
                return (
                  <option value={oficio} key={index}>
                    {oficio}
                  </option>
                );
              })}
          </select>
          <button onClick={this.buscarEmpleados}>Mostrar empleados</button>
          <ul>
          {this.state.statusEmpl == true && (
            this.state.empleados.map((empleado, index) => {
              return(
                <li key={index}>{empleado.apellido}</li>
              )
            })
          )}
        </ul>
        </form>
      </div>
    );
  }
}
