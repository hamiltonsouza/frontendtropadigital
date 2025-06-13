import React from 'react'
import './Login.scss'
import Logo from '../Common/Logo'
import Title from '../Common/Title'
import Subtitle from '../Common/Subtitle'

const Login = () => {
  return (
    <main className='container'>
        <header className="header">
            <Logo />
            <Title typeClass="title" message="Bem-vindo de volta" />
            <Subtitle typeClass="subtitle" message="Entre com sua conta para acessar o painel." />
        </header>
        <section className="input">
            
        </section>
    </main>
  )
}

export default Login