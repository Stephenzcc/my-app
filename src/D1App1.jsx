import React from "react";
const msg = 'hello'
const myStyle = { backgroundColor: 'skyblue' }
let flag = true
let arr = ['刘备', '关羽', '张飞']

export default class D1App1 extends React.Component {
  render() {
    return (
      <>
        <h2>{msg}</h2>
        <hr />
        <label htmlFor="username">用户名:</label>
        <input type="text" id="username" />
        <hr />
        <div className="box"></div>
        <hr />
        <div style={{ backgroundColor: flag ? 'pink' : 'skyblue' }}>内容</div>
        <div style={myStyle}>内容</div>
        <hr />
        <ul>
          {
            arr.map((item, index) =>
              <li key={index}>{item}</li>
            )
          }
        </ul>
      </>
    )
  }
}

/**
 * 1.label标签中使用htmlFor代替for
 * 2.直接输入 .box 回车会自动补全<div className="box"></div>
 * 3.双花括号，外面花括号是在html中写js需要的，里面的花括号是对象的花括号
 * 4.属性中的键必须采用驼峰命名
 * 5.在不想使用<div>作为返回的闭合标签时可以使用空标签<></>
 * 6.React中的列表循环有且只有map可以使用，因为只有map有返回值，forEach没有
 * 7.安装插件ES7+ React/Redux/React-Native snippets可以快捷写组件，敲简写直接出基本结构
 *    rcc - react class component
 *    rfc - react function component
 */