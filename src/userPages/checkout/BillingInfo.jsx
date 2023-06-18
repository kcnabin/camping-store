import React, { useEffect } from 'react'
import { useFetchData } from '../../hooks/useFetchData'

const BillingInfo = ({ actions }) => {
  const { email, setEmail, phoneNum, setPhoneNum, fullName, setFullName, streetAddress, setStreetAddress, city, setCity } = actions

  const { value: userInfo } = useFetchData('/user-info')

  useEffect(() => {
    if (userInfo) {
      setEmail(userInfo.email)
      setFullName(userInfo.name)
    }
  }, [userInfo, setEmail, setFullName])

  return (
    <div>
      <div className="border">
        <h5 className='gray py-2 px-3 '>
          Contact Information
        </h5>

        <div className="py-2 px-3">
          <div className="mb-3">
            <label htmlFor="userEmail" className='form-label h6'>
              Email
            </label>
            <input
              type='text'
              id='userEmail'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='form-control'
              placeholder='Email ID'
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userPhone" className='form-label h6'>
              Phone Number
            </label>
            <input
              type='text'
              id='userPhone'
              value={phoneNum}
              onChange={e => setPhoneNum(e.target.value)}
              className='form-control'
              placeholder='Phone Number'
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userName" className='form-label h6'>
              Full Name
            </label>
            <input
              type='text'
              id='userName'
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className='form-control'
              placeholder='Full Name'
            />
          </div>
        </div>
      </div>

      <div className='border mt-4'>
        <h5 className='gray py-2 px-3 '>
          Shiping Address
        </h5>

        <div className="py-2 px-3">
          <div className="mb-3">
            <label htmlFor="userStreet" className='form-label h6'>
              Street Address
            </label>
            <input
              type='text'
              id='userStreet'
              value={streetAddress}
              onChange={e => setStreetAddress(e.target.value)}
              className='form-control'
              placeholder='Street Address'
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userCity" className='form-label h6'>
              City
            </label>
            <input
              type='text'
              id='userCity'
              value={city}
              onChange={e => setCity(e.target.value)}
              className='form-control'
              placeholder='City'
            />
          </div>
        </div>
      </div>

    </div>
  )
}

export default BillingInfo