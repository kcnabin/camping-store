import Page100Vh from '../../components/Page100Vh'
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <Page100Vh>
      <div className="card p-4 shadow rounded-4 mx-4">
        <p className="h4 text-center">
          Register
        </p>

        <div className="py-5">
          <RegisterForm />
        </div>

        <div className="d-flex align-items-center">
          <span className="fw-bold me-2">
            Already have an account ?
          </span>

          <Link
            to='/login'
            className="text-success fw-bold py-1"
          >
            Login
          </Link>

        </div>
      </div>
    </Page100Vh>
  )
}

export default RegisterPage