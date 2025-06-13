import React from 'react'
import ListItem from './ListItem'

const NavMenu = () => {
  return (
    <nav className="navMenu">
        <ul>
            <ListItem listItemClass="navItem" listItemName="Dashboard"/>
            <ListItem listItemClass="navItem" listItemName="Eventos"/>
            <ListItem listItemClass="navItem" listItemName="Equipes"/>
            <ListItem listItemClass="navItem" listItemName="Inscrições"/>
        </ul>
    </nav>
  )
}

export default NavMenu