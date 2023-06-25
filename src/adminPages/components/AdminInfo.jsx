import { useFetchData } from '../../hooks/useFetchData'
import LoadingIcon from '../../svgIcons/LoadingIcon'

const AdminInfo = () => {
  const { value: user } = useFetchData('/user-info')

  if (user) {
    return (
      <>
        <h4 className="text-center">
          Admin Profile
        </h4>

        <div className="mt-3">
          <p>Full Name: {user?.name}</p>
          <p>Email: {user?.email}</p>
        </div>

        <div>
          <button className="btn btn-secondary">
            Edit Profile
          </button>
        </div>
      </>
    )
  }

  return <LoadingIcon />
}

export default AdminInfo