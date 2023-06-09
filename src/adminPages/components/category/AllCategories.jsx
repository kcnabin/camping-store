import axios from 'axios'
import React from 'react'
import { getTokenHeader } from '../../../helper/getTokenHeader'
import { handleError } from '../../../helper/handleError'

const AllCategories = ({ categories, setCategories }) => {

  const handleDelete = async (id) => {
    if (window.confirm('Want to delete?')) {
      try {
        await axios.delete(`/category/${id}`, getTokenHeader())
        setCategories(categories.filter(category => category._id.toString() !== id))

      } catch (error) {
        return handleError(error)
      }
    }
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category Name</th>
            <th scope="col">Action</th>

          </tr>
        </thead>
        <tbody>
          {
            categories.map((category, i) => {
              return (
                <tr key={category._id}>
                  <th scope="row">{i + 1}</th>
                  <td>{category.name}</td>

                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(category._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllCategories