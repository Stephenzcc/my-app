import { useEffect, useState } from 'react'

export default function D2App2() {
  const [num1, setNum1] = useState(1)
  const [num2, setNum2] = useState(1)

  // 模拟mounted，一般在这个位置写ajax
  // useEffect(() => {
  //   console.log('挂载完成');
  // })
  // 检测数据更新，数组中为要检测的数据，不写为全部
  // useEffect(() => {
  //   console.log('num1更新了');
  // }, [num1])

  // 模拟beforeDestroy，一般在这个阶段处理脏数据和垃圾回收
  // useEffect(() => {
  //   return () => {
  //     console.log('销毁阶段');
  //   }
  // })

  return (
    <>
      <h2>数字1为:{num1}</h2>
      <button onClick={() => { setNum1(num1 + 1) }}>累加</button>
      <hr />
      <h2>数字2为:{num2}</h2>
      <button onClick={() => { setNum2(num2 + 1) }}>累加</button>
    </>
  )
}


/**
 * 函数式组件没有生命周期
 * 【vue生命周期】
 * mounted     updated      beforeDestroy
 * 数据请求    监测数据更新   垃圾回收
 * useEffect
 */