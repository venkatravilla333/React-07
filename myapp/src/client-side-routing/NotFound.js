import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFound() {
  var navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 1000)
  })
  return (
    <div>Page Not Found 404</div>
  )
}

export default NotFound