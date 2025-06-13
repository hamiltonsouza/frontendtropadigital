import React from 'react'
import Logo from '../../Components/Common/Logo'
import Title from '../../Components/Common/Title'
import Subtitle from '../../Components/Common/Subtitle'

const Header = () => {
  return (
    <header className="header">
        <Logo />
        <Title typeClass="title" message="Bem-vindo de volta" />
        <Subtitle typeClass="subtitle" message="Entre com sua conta para acessar o painel." />
    </header>
  )
}

export default Header