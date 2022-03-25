import React, { Component } from 'react'

export default class D1App2 extends Component {
  state = {
    num: 1
  }
  render() {
    return (
      <div>
        <h2>数字为:{this.state.num}</h2>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>累加</button>
      </div>
    )
  }
}


/**
 * 1.state -> setState
 * 
 */