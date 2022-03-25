import React from "react";

const msg = 'hellooooo'

// 类组件
class D1App extends React.Component {
  render() {
    return (<h2>{msg}</h2>)
  }
}

export default D1App

/**
 * 1.文件后缀可以为js也可以为jsx
 * 2.组件名称必须大写
 * 3.js中出现()代表其中想写html代码
 * 4.html中出现花括号{}代表其中想写js代码
 * 5.export default可以写在class前面
 * 6.JSX语法可在vscode中配置
 */