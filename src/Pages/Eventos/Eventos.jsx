import React from 'react'
import Logo from '../../Components/Common/Logo'
import NavMenu from './NavMenu'
import UserProfile from './UserProfile'
import UserMenu from './UserMenu'
import Header from './Header'

const Eventos = () => {
  return (
    <aside id="sidebar">
      <Logo />
      <NavMenu />
      <UserProfile />
      <UserMenu />
      <Header userName={'Kaique Steck'}/>
    </aside>
  )
}

export default Eventos