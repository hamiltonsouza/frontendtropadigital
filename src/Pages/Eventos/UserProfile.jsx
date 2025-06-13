import React from 'react'
import ProfileImage from './ProfileImage'
import Text from '../../Components/Common/Text'

const UserProfile = () => {
  return (
    <>
        <ProfileImage />
        <Text typeClass={'userName'} message={'Kaique Steck'}/>
        <Text typeClass={'userRole'} message={'Administrador'} />
    </>
  )
}

export default UserProfile