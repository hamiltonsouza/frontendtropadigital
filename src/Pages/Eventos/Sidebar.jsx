import React from 'react'
import Logo from '../../Components/Common/Logo'
import NavMenu from './NavMenu'
import UserMenu from './UserMenu'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <Logo />
      <NavMenu />
      <UserMenu />
    </aside>
  )
}

export default Sidebar