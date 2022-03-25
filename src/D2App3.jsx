import React, { useState } from 'react'

// 子组件
function Child(props) {
  return (
    <>
      <h2>子组件 = {props.num}</h2>
      {/* <button onClick={() => props.changeNumFn()}>修改num</button> */}
      <button onClick={() => props.setNum(789)}>修改num</button>
    </>
  )
}
// 父组件
function Father(props) {
  return (
    // <Child num={props.num} changeNumFn={props.changeNumFn} />
    <Child num={props.num} setNum={props.setNum} />
  )
}
// 顶级组件
export default function D2App3() {
  const [num, setNum] = useState(123)
  // 提供给子组件用来修改num的函数，可以直接传setNum
  // const changeNumFn = (arg) => setNum(arg)
  return (
    // <Father num={num} changeNumFn={changeNumFn} />
    <Father num={num} setNum={setNum} />
  )
}
