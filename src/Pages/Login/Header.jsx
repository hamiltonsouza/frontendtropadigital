import React from 'react'
import Logo from '../../Components/Common/Logo'
import Text from '../../Components/Common/Text'

const Header = () => {
  return (
    <header className="header">
        <Logo />
        <Text as='h1' variant="title" message="Bem-vindo de volta" />
        <Text as='h2' variant="subtitle" message="Entre com sua conta para acessar o painel." />
    </header>
  )
}

export default Header