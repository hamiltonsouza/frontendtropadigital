import React from 'react'
import ListItem from './ListItem'

const UserMenu = () => {
  return (
    <section className="userMenu">
        <ul>
            <ListItem listItemClass="userItem" listItemName="Alterar Dados"/>
            <ListItem listItemClass="userItem" listItemName="Sair"/>
        </ul>
    </section>
  )
}

export default UserMenu