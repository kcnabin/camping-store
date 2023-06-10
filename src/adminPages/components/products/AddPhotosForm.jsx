import React from 'react'
import axios from 'axios'
import { handleError } from '../../../helper/handleError';
import { getImgSrc } from '../../../helper/getImgSrc';

const AddPhotosForm = ({ photos, setPhotos }) => {
  let token = ''
  const ls = localStorage.getItem('camping-store-user')
  if (ls) {
    token = JSON.parse(ls)
  }

  const handlePhotoUpload = async (e) => {
    const files = e.target.files

    const data = new FormData()
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i])
    }

    const url = `/upload-photos`
    try {
      const res = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `bearer ${token}`
        }
      })

      if (res?.data) {
        setPhotos([...photos, ...res?.data])
      }
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <div>
      <h6>Add Photos</h6>
      <input
        type='file'
        multiple
        className='form-control'
        onChange={handlePhotoUpload}
      />

      <div className='my-3 d-flex gap-2'>
        {(!(photos.length < 0)) && photos.map(photo => {
          return (
            <div className="" key={photo} style={{ width: '150px' }}>
              <img
                src={getImgSrc(photo)}
                alt={photo}
                className='ratio ratio-4x3 object-fit-cover border rounded-4 w-100'
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AddPhotosForm