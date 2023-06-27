import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { handleError } from '../../helper/handleError'
import HideIcon from '../../svgIcons/HideIcon'
import VisibleIcon from '../../svgIcons/VisibleIcon'


const RegisterForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  const clearForm = () => {
    setFullName('')
    setEmail('')
    setPassword('')
  }

  const registerUser = async (e) => {
    e.preventDefault()

    const newUser = { name: fullName, email, password }

    try {
      const { data } = await axios.post('/register', newUser)
      console.log(data)

      toast.success('New user created! Redirecting to login page.',
        { hideProgressBar: false })

      clearForm()

      setTimeout(() => {
        navigate('/login')
      }, 4000);

    } catch (error) {
      handleError(error)
    }


  }

  return (
    <form onSubmit={registerUser}>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          id="fullname"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
          placeholder='Full Name'
        />
      </div>

      <div className="mb-4">
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder='Email'
        />
      </div>

      <div className="input-group mb-4">
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          className='form-control'
          placeholder='Password'
        />
        <span className="input-group-text">
          <button
            className="btn p-0 m-0"
            type='button'
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HideIcon /> : <VisibleIcon />}
          </button>
        </span>
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-2"
      >
        Register
      </button>
    </form>
  )
}

export default RegisterForm