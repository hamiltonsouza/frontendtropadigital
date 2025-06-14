import React from 'react'

const InputLabel = ({inputID, labelMessage, labelClass}) => {
  return (
    <>
        <label for={inputID} className={labelClass}>{labelMessage}</label><br/>
    </>
  )
}

export default InputLabel