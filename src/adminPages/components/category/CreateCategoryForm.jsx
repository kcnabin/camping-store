import React, { useState } from 'react'
import { handleError } from '../../../helper/handleError'
import axios from 'axios'
import { useFetchData } from '../../../hooks/useFetchData'
import AllCategories from './AllCategories'
import { getTokenHeader } from '../../../helper/getTokenHeader'
import { toast } from 'react-toastify'

const CreateCategoryForm = () => {
  const [category, setCategory] = useState('')
  const { value: allCategories, setValue: setAllCategories } = useFetchData('/category/all')

  const handleNewCategory = async (e) => {
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
          <button className="btn btn-primary" type='submit'>
            Add
          </button>
        </span>
      </form>

      {allCategories && (
        <AllCategories categories={allCategories} setCategories={setAllCategories} />
      )}
    </div>
  )
}

export default CreateCategoryForm