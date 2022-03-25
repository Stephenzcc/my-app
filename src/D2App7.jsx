import React, { useState, memo, useCallback, useMemo } from 'react'

const Child = memo((props) => {
  console.log(123);
  return <button onClick={() => props.doSth()}>累加</button>
})

export default function D2App7() {
  const [num, setNum] = useState(1)

  /**
   * memo包裹静态组件时可以防止父组件更新导致的子组件更新，但子组件实现动态功能时会失效
   * 所以可以用useCallback结合memo使用，将doSth包裹起来，空数组[]不检测更新
   * useCallback 的作用在于利用 memo 减少无效的 re-render，来达到性能优化的作用
   * setNum(newValue)使用新值强行覆盖初始值
   * 使用setNum中写回调的方式setNum((num)=>num+1)不断使用新值覆盖旧值
   */

  // const doSth = useCallback(() => {
  //   setNum(num => num + 1)
  // }, [])

  // 函数中返回函数：高阶函数
  const doSth = useMemo(() => {
    return () => setNum(num => num + 1)
  }, [])



  return (
    <div>
      <h3>数字为:{num}</h3>
      <Child doSth={doSth} />
    </div>
  )
}
