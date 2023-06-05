import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { handleError } from '../../helper/handleError'


const RegisterForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

      navigate('/login')

    } catch (error) {
      handleError(error)
    }


  }

  return (
    <form onSubmit={registerUser}>

      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullname"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
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