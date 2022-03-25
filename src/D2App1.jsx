import { useState } from 'react'


function D2App1() {
  // hook只能用在组件函数中的最顶层
  const [num, setNum] = useState(1)

  return (
    <>
      <h2>{num}</h2>
      <button onClick={() => { setNum(num + 1) }}>修改msg</button>
    </>
  )
}

export default D2App1