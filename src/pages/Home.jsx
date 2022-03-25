import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
  const [searchParams] = useSearchParams()
  let id = searchParams.getAll('id')[0];
  return (
    <h2>首页Home - {id}</h2>
  )
}
