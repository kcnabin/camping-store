import React, { useState } from 'react'
import axios from 'axios'
import AllCategories from './AllCategories'
import { handleError } from '../../../helper/handleError'
import { useFetchData } from '../../../hooks/useFetchData'
import { getTokenHeader } from '../../../helper/getTokenHeader'
import { toast } from 'react-toastify'
import LoadingIcon from '../../../svgIcons/LoadingIcon'

const CreateCategoryForm = () => {
  const [category, setCategory] = useState('')
  const { value: allCategories, setValue: setAllCategories } = useFetchData('/category/all')
  const [loading, setLoading] = useState(false)

  const handleNewCategory = async (e) => {
    setLoading(true)
    e.preventDefault()

    try {
      const { data } = await axios.post('/category', { name: category }, getTokenHeader())

      if (allCategories) {
        setAllCategories(allCategories.concat(data))
      } else {
        setAllCategories(data)
      }

      toast.success(`'${category}' added!`)
      setCategory('')

    } catch (error) {
      return handleError(error)

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h5 className='text-center'>Add New Product Category</h5>

      <form onSubmit={handleNewCategory} className='my-3'>
        <span className='align-center'>
          <input
            type='text'
            value={category}
            onChange={e => setCategory(e.target.value)}
            className='form-control me-3'
          />
          <button className="btn btn-primary" type='submit' disabled={loading}>
            {
              loading ? 'Adding...' : 'Add'
            }
          </button>
        </span>
      </form>

      {allCategories
        ? (<AllCategories categories={allCategories} setCategories={setAllCategories} />)
        : <LoadingIcon />
      }
    </div>
  )
}

export default CreateCategoryForm