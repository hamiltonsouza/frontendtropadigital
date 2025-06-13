import React from 'react'

const Input = ({labelMessage, inputType, inputID, inputPlaceholder, autoComplete}) => {
  return (
        <>
            <input type={inputType} id={inputID} placeholder={inputPlaceholder} autoComplete={autoComplete}></input><br />
        </>
  )
}

export default Input