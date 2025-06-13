import React from 'react'
import ProfileImage from './ProfileImage'
import Text from '../../Components/Common/Text'

const UserProfile = () => {
  return (
    <>
        <ProfileImage />
        <Text as={'p'} variant={'userName'} message={'Kaique Steck'}/>
        <Text as={'p'} variant={'userRole'} message={'Administrador'} />
    </>
  )
}

export default UserProfile