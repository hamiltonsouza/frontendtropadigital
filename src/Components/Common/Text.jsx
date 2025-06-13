import React from 'react'

const Text = ({typeClass, message}) => {
  return (
    <span className={typeClass}>{message}</span>
  )
}

export default Text