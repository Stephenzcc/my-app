// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }

// 可写成变量函数式声明
// function App() {
//   return <h2>App</h2>
// }
const D2App = () => {
  return <h2>App</h2>
}

export default D2App

/**
 * 1.函数式组件没有生命周期
 * 2.函数式组件没有this
 * 3.函数式组件没有state状态
 * 
 * Hooks（钩子 - 生命周期函数）
 *      - React官方提供的hook
 *      - 用户自定义hook
 */