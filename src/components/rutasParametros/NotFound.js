import React, { Component } from 'react'
import image404 from './../../assets/images/404.avif'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <img src={image404}></img>
      </div>
    )
  }
}
