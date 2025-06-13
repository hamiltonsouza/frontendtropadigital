import React from 'react'
import UserProfile from './UserProfile'
import ListItem from './ListItem'

const UserMenu = () => {
  return (
    <section className="userMenu">
        <ul>
            <UserProfile />
            <ListItem listItemClass="userItem" listItemName="Alterar Dados"/>
            <ListItem listItemClass="userItem" listItemName="Sair"/>
        </ul>
    </section>
  )
}

export default UserMenu