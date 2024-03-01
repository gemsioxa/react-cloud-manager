import React from 'react'
import { useParams } from 'react-router-dom'

export default function Disk() {
  const { id } = useParams();
  return (
    <div>
      <div>Disk page</div>
      <div>{id}</div>
    </div>
  )
}
