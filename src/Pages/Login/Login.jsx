import React from 'react'
import './Login.scss'
import Logo from '../../Components/Common/Logo'
import Title from '../../Components/Common/Title'
import Subtitle from '../../Components/Common/Subtitle'
import Form from './Form'
import Image from './Image'

const Login = () => {
  return (
    <main className='container'>
        <header className="header">
            <Logo />
            <Title typeClass="title" message="Bem-vindo de volta" />
            <Subtitle typeClass="subtitle" message="Entre com sua conta para acessar o painel." />
        </header>
        <Form />
        <Image />
    </main>
  )
}

export default Login