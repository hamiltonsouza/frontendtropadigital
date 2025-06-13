import React from 'react'

const Title = ({typeClass, message}) => {
  return (
    <h1 className={typeClass}>{message}</h1>
  )
}

export default Title