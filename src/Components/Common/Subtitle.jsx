import React from 'react'

const Subtitle = ({typeClass, message}) => {
  return (
    <h2 className={typeClass}>{message}</h2>
  )
}

export default Subtitle