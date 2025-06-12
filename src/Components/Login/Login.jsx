import React from 'react'
import './Login.scss'
import Logo from '../Logo/Logo'

const Login = () => {
  return (
    <main className='container'>
        <header className="header">
            <Logo />
            <h1 className="title">Bem-vindo de volta</h1>
            <h2 className="subtitle">Entre com sua conta para acessar o painel.</h2>
        </header>
        <section className="input">
            
        </section>
    </main>
  )
}

export default Login