import React from 'react'

const ListItem = ({listItemClass, listItemName}) => {
  return (
    <li className={listItemClass}>
        {listItemName}
    </li>
  )
}

export default ListItem