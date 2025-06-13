import React from 'react'
import './Login.scss'
import LoginImage from './LoginImage'
import LoginContent from './LoginContent'

const Login = () => {
  return (
    <main className='container'>
      <LoginContent />
      <LoginImage />
    </main>
  )
}

export default Login