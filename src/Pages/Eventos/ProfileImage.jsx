import React from 'react'
import profileImage from '../../img/profile-image.png'
const ProfileImage = () => {
  const imageDescription = "logged user profile image";
  return (
    <img src={profileImage} alt={imageDescription}/>
  )
}

export default ProfileImage