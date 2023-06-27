import { useState } from "react"
import axios from 'axios'
import { handleError } from "../../helper/handleError"
import { useAuth } from "../../context/UserContext"
import { toast } from "react-toastify"
import { useLocation, useNavigate } from 'react-router-dom'
import HideIcon from "../../svgIcons/HideIcon"
import VisibleIcon from "../../svgIcons/VisibleIcon"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = async (e) => {
    e.preventDefault()

    const userObject = { email, password }

    try {
      const { data } = await axios.post('/login', userObject)
      localStorage.setItem('camping-store-user', JSON.stringify(data))
      setAuth(data)

      toast.success(`'${data.user.name}' logged in!`)
      navigate(location?.state?.redirectTo || '/')

    } catch (error) {
      handleError(error)
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <label htmlFor="uEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          id='uEmail'
          placeholder="Your Email Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="uPassword" className="form-label">
          Password
        </label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='form-control'
            placeholder='Your password'
            id='uPassword'
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
      </div>

      <button
        type="submit"
        className="btn btn-success mt-2"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm