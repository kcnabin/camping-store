import Page100Vh from '../../components/Page100Vh'
import RegisterForm from './RegisterForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <Page100Vh>
      <div className=''>
        <p className="h4 text-center mb-4">
          Register
        </p>

        <RegisterForm />

        <div className="mt-3 d-sm-flex align-items-center">
          <span className="fw-bold me-2">
            Already have an account ?
          </span>

          <Link
            to='/login'
            className="btn btn-success py-1"
          >
            Login
          </Link>

        </div>
      </div>
    </Page100Vh>
  )
}

export default RegisterPage