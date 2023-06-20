import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import Page100Vh from "../../components/Page100Vh"

const LoginPage = () => {

  return (
    <Page100Vh>
      <div className="card px-4 py-5 shadow rounded-4">
        <p className="h4 text-center mb-4">
          Login
        </p>

        <LoginForm />

        <div className="mt-4 d-sm-flex align-items-center">
          <span className="fw-bold me-2">
            Don't have an account ?
          </span>

          <Link
            to='/register'
            className="py-1 text-primary fw-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </Page100Vh>
  )
}

export default LoginPage