import { useFetchData } from '../../hooks/useFetchData'

const AdminInfo = () => {
  const { value: user } = useFetchData('/user-info')

  if (user) {
    return (
      <>
        <h4 className="text-center">
          Info about Admin
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

  return <h4>Loading info about admin...</h4>
}

export default AdminInfo