import React from 'react'

const Input = ({inputType, inputName, inputPlaceholder}) => {
  return (
    <input type={inputType} name={inputName} placeholder={inputPlaceholder}></input>
  )
}

export default Input