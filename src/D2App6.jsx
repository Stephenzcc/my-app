import React, { useState, useRef } from 'react'

export default function D2App6() {
  const [value, setValue] = useState("asd")
  const element = useRef(null)

  return (
    <div>
      <h3>受控组件</h3>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => console.log(value)}>获取input的值</button>
      <hr />
      <h3>不受控组件</h3>
      <input type="text" ref={element} />
      <button onClick={() => console.log(element.current.value)}>获取input的值</button>
    </div >
  )
}

/**
 * 受控组件和不受控组件 只存在于表单元素
 * 受控组件是表单元素的value需要通过state(useState)来定义
 * 不受控组件意味着表单元素的value无法通过state获取，只能通过ref（或useRef）获取
 */