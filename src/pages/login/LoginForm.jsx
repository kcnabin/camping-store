import { useState } from "react"
import axios from 'axios'
import { handleError } from "../../helper/handleError"
import { useAuth } from "../../context/UserContext"
import { toast } from "react-toastify"
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const userObject = { email, password }

    try {
      const { data } = await axios.post('/login', userObject)
      localStorage.setItem('camping-store-user', JSON.stringify(data))
      setAuth(data)

      toast.success(`'${data.user.name}' logged in!`)
      navigate('/')

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
        />
      </div>

      <div className="mb-3">
        <label htmlFor="uPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          id='uPassword'
        />
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm