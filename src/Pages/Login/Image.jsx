import React from 'react'
import loginImage from '../../img/login.png'
const Image = () => {
  const imageDescription = "person with a phone and a computer representing logging in";
  return (
    <img src={loginImage} alt={imageDescription}/>
  )
}

export default Image