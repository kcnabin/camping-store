import { useState } from 'react'
import { useFetchData } from '../../hooks/useFetchData'
import LoadingIcon from '../../svgIcons/LoadingIcon'
import ProfileForm from './profile/ProfileForm'
import ProfileInfo from './profile/ProfileInfo'

const UserInformation = () => {
  const [editProfile, setEditProfile] = useState(false)
  const { value: user } = useFetchData('/user-info', editProfile)

  if (editProfile && user) {
    return <ProfileForm user={user} setEditProfile={setEditProfile} />
  }

  if (user) {
    return (
      <ProfileInfo
        user={user}
        setEditProfile={setEditProfile}
      />
    )
  }

  return <LoadingIcon />
}

export default UserInformation