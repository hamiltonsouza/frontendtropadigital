import React from 'react'
import Logo from '../../Components/Common/Logo'
import NavMenu from './NavMenu'
import UserProfile from './UserProfile'
import UserMenu from './UserMenu'

const Eventos = () => {
  return (
    <aside id="sidebar">
      <Logo />
      <NavMenu />
      <UserProfile />
      <UserMenu />
    </aside>
  )
}

export default Eventos