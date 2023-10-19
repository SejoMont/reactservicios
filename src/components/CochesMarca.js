import React, { Component } from "react";
import axios from "axios";
import Global from "../Global";

export default class CochesMarca extends Component {
  urlApiCoches = Global.urlApiCoches;
  cajaMarca = React.createRef();

  state = {
    coches: [],
    marca: null,
  };

  loadCoches = (e) => {
    if (e != null){
        e.preventDefault();
    }
    
    var request = "webresources/coches/";

    console.log(this.urlApiCoches + request);

    axios.get(this.urlApiCoches + request).then((response) => {
      this.setState({
        coches: response.data,
      });
    });
  };

  buscarCoche = (e) => {
    e.preventDefault();
    var marca = this.cajaMarca.current.value;
    var request = "webresources/coches/";

    axios.get(this.urlApiCoches + request).then((response) => {

      var cochesMarca = response.data.filter((coche) => coche.marca === marca);
      console.log("Coches filtrados:", cochesMarca);

      this.setState({
        coches: cochesMarca,
      });
    });
  };

  componentDidMount = () => {
    console.log("Creando Component");
    this.loadCoches();
  };

  render() {
    return (
      <div>
        <h1>Coches</h1>
        <form >
          <label>Marca coches: </label>
          <input type="text" ref={this.cajaMarca}></input>
          <button onClick={this.buscarCoche}>Buscar Coche</button>
          <button onClick={this.loadCoches}>Todos Coche</button>
        </form>

        {this.state.coches.map((coche, index) => {
          return (
            <div key={index}>
                <h2 style={{ color: "blue" }} >
              {coche.marca} - {coche.modelo}
            </h2>
            <img src={coche.imagen} style={{width:"250px"}}></img>
            </div>
            
          );
        })}
      </div>
    );
  }
}
