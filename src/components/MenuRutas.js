import React, { Component } from 'react'

export default class MenuRutas extends Component {
  render() {
    return (
      <div>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/tabla/4'>Tabla de Multiplicar 4</a>
            </li>
            <li>
                <a href='/tabla/7'>Tabla de Multiplicar 7</a>
            </li>
            <li>
                <a href='/noexito'>Sin ruta mapeada</a>
            </li>
        </ul>
        </div>
    )
  }
}
