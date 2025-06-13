import React from 'react'
import Text from '../../Components/Common/Text'

const Header = ({userName}) => {
    const boldUserName = userName;
  return (
    <>
        <Text as='p' variant='greeting' message={`Bem vindo de volta, ${boldUserName}`}/>
        <Text as='h1' variant='title' message='Todos eventos' />
    </>
  )
}

export default Header