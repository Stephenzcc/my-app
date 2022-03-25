import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'

export default function D2App9() {
  const navigate = useNavigate()
  const location = useLocation()
  // console.log(location.pathname)
  const goDetail = () => {
    navigate('./detail', {
      state: { username: '张三' }
    })
  }

  return (
    <div>
      <ul>
        <li><Link to="/home?id=456">首页</Link></li>
        <li><Link to="/list/123">列表页</Link></li>
        <li><Link to="/detail">详情页</Link></li>
      </ul>
      <button onClick={goDetail}>跳转详情页</button>
      <hr />
      <Outlet />
    </div>

  )
}

// Outlet类似插槽或iframe