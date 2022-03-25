import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  let location = useLocation()
  return (
    <h2>详情页Detail - {location.state?.username || ""}</h2>
  )
}
