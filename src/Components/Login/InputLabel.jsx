import React from 'react'

const InputLabel = ({inputID, labelMessage}) => {
  return (
    <>
        <label for={inputID}>{labelMessage}</label><br/>
    </>
  )
}

export default InputLabel