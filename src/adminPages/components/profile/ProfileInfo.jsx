import React from 'react'

const ProfileInfo = ({ user, setEditProfile }) => {
  return (
    <div>
      <h4 className="text-center">
        Profile
      </h4>

      <div className="mt-3">
        <div className='mb-3'>
          <span className='h5 me-2'>Full Name:</span>
          <span className='h5 text-primary'>{user?.name}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Email:</span>
          <span className='h5 text-primary'>{user?.email}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Contact Number:</span>
          <span className='h5 text-primary'>{user?.phoneNum}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Address:</span>
          <span className='h5 text-primary'>
            {
              user?.address?.street
                ? `${user?.address?.street}, ${user?.address?.city}`
                : ''
            }
          </span>
        </div>


      </div>

      <div>
        <button className="btn btn-secondary" onClick={() => setEditProfile(true)}>
          Edit Profile
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo