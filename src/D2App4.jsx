import React, { useState, createContext } from 'react'

// 创建上下文空间
const NumContext = createContext()

// 子组件
function Child() {
  return (
    <NumContext.Consumer>
      {
        ({ num, setNum }) => (
          <>
            <h2>{num}</h2>
            <button onClick={() => setNum(456)}>修改num</button>
          </>
        )
      }
    </NumContext.Consumer>
  )
}
// 父组件
function Father() {
  return (
    <Child />
  )
}
// 顶级组件
export default function D2App4() {
  const [num, setNum] = useState(123)
  return (
    <NumContext.Provider value={{ num, setNum }}>
      <Father />
    </NumContext.Provider>
  )
}
