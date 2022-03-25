import React, { Component } from 'react'
import "./d1App4.css"

export default class D1App4 extends Component {
  render() {
    return (
      <div className='box'>
        <button onClick={this.btnClick.bind(this, 1)}>按钮1</button>
        <button onClick={this.btnClick.bind(this, 2)}>按钮2</button>
      </div>
    )
  }
  btnClick(num) {
    console.log(num);
  }
}
