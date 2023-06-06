import { useEffect, useState } from "react"
import { handleError } from "../helper/handleError"
import axios from "axios"
import { getTokenHeader } from "../helper/getTokenHeader"
import { useAuth } from "../context/UserContext"

export const useCheckAuth = (path) => {
  const { auth } = useAuth()
  const [isAuthorized, setIsAuthorized] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(path, getTokenHeader())
        if (res?.data?.ok) {
          setIsAuthorized(res.data.ok)
        } else {
          setIsAuthorized(false)
        }

      } catch (error) {
        handleError(error)
      }
    }

    if (auth?.token) {
      checkAuth()
    }
  }, [auth?.token, path])

  return isAuthorized
}