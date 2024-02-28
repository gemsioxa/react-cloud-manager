import React from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div>
      <div>Main</div>
      <Link to={'/settings/123'}>Error page</Link>
    </div>
  )
}
