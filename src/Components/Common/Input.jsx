import React from 'react'

const Input = ({inputType, inputID, inputPlaceholder, autoComplete}) => {
  return (
        <>
          <input type={inputType} id={inputID} placeholder={inputPlaceholder} autoComplete={autoComplete}></input><br />
        </>
  )
}

export default Input