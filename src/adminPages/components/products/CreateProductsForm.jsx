import React, { useEffect, useState } from 'react'
import { useFetchData } from '../../../hooks/useFetchData'
import AddPhotosForm from './AddPhotosForm'
import { toast } from 'react-toastify'
import { handleError } from '../../../helper/handleError'
import axios from 'axios'
import { getTokenHeader } from '../../../helper/getTokenHeader'
import { useNavigate, useParams } from 'react-router-dom'

const CreateProductsForm = () => {
  const { pId } = useParams()
  console.log('pId :', pId);
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [brand, setBrand] = useState('')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [price, setPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [photos, setPhotos] = useState([])
  const [descriptions, setDescriptions] = useState([])

  const [feature, setFeature] = useState('')
  const { value: allCategories } = useFetchData('/category/all')
  const [product, setProduct] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (pId) {
      const fetchData = async () => {
        try {
          const { data } = await axios.get(`/products/${pId}`)
          setProduct(data)
          setCategory(data.category)
          setName(data.name)
          setBrand(data.brand)
          setSize(data.size)
          setColor(data.color)
          setPrice(data.price)
          setDiscount(data.discount)
          setPhotos(data.photos)
          setDescriptions(data.descriptions)
          setFeature('')
        } catch (error) {
          return handleError(error)
        }
      }
      fetchData()
    }
  }, [pId])

  const clearForm = () => {
    setCategory('')
    setName('')
    setBrand('')
    setSize('')
    setColor('')
    setPrice('')
    setDiscount(0)
    setPhotos([])
    setDescriptions([])
    setFeature('')
  }

  const handleAddProducts = async (e) => {
    e.preventDefault()
    const productObject = {
      category, name, brand, size, color, price, discount, photos, descriptions
    }
    console.log('productObject :', productObject);

    if (descriptions.length < 1) {
      return toast.error('Add atleast one description !')
    }

    if (photos.length < 1) {
      return toast.error('Add atleast one photo!')
    }

    if (!category || !name || !brand || !size || !color || !price || !discount) {
      return toast.error('All Fields are required')
    }

    try {
      if (pId) {
        await axios.put(`/products/${product._id}`, productObject, getTokenHeader())
      } else {
        await axios.post('/products/add', productObject, getTokenHeader())
      }

      toast.success(pId ? 'Product Updated' : 'Product Added!')
      setTimeout(() => {
        navigate(`/product/${product._id}`)
      }, 2000)

      clearForm()


    } catch (error) {
      return handleError(error)
    }

  }

  const addFeature = () => {
    if (feature) {
      setDescriptions(descriptions.concat(feature))
      setFeature('')
    }
  }


  return (
    <div className={pId ? 'mx-4' : ''}>
      <h5 className={pId ? 'mt-3 text-center' : "text-center"}>
        {pId ? 'Update Product' : 'Add New Products'}
      </h5>

      <form onSubmit={handleAddProducts} className='my-4 px-2'>
        {
          allCategories && (
            <div className="mb-3">
              <label htmlFor="pCategory" className='form-label h6'>
                Category
              </label>

              <select
                className='form-select'
                id="pCategory"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option>
                  Select Category
                </option>
                {
                  allCategories && allCategories.map(cat => {
                    return (
                      <option value={cat.name} key={cat._id}>
                        {cat.name}
                      </option>
                    )
                  })
                }
              </select>
            </div>
          )
        }

        <div className="mb-3">
          <label htmlFor="pName" className='form-label h6'>
            Name
          </label>
          <input
            type='text'
            id='pName'
            value={name}
            onChange={e => setName(e.target.value)}
            className='form-control'
            placeholder='Name of the product'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pBrand" className='form-label h6'>
            Brand
          </label>
          <input
            type='text'
            id='pBrand'
            value={brand}
            onChange={e => setBrand(e.target.value)}
            className='form-control'
            placeholder='Brand name of the product'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pColor" className='form-label h6'>
            Color
          </label>
          <input
            type='text'
            id='pColor'
            value={color}
            onChange={e => setColor(e.target.value)}
            className='form-control'
            placeholder='Color of the product'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pSize" className='form-label h6'>
            Size
          </label>
          <input
            type='text'
            id='pSize'
            value={size}
            onChange={e => setSize(e.target.value)}
            className='form-control'
            placeholder='Size of the product'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pPrice" className='form-label h6'>
            Price
          </label>
          <input
            type='number'
            id='pPrice'
            value={price}
            onChange={e => setPrice(e.target.value)}
            className='form-control'
            placeholder='Maximum Retail Price of the product'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pDiscount" className='form-label h6'>
            Discount %
          </label>
          <input
            type='Number'
            id='pDiscount'
            value={discount}
            onChange={e => setDiscount(e.target.value)}
            className='form-control'
            placeholder='Discount %'
          />
        </div>

        <div className="mb-3">
          <label htmlFor="pDescriptions" className='form-label h6'>
            Features
          </label>

          <ul>
            {
              descriptions.map((des, i) => <li key={i}>{des}</li>)
            }
          </ul>

          <div className="d-flex">
            <input
              type='text'
              id='pDescriptions'
              value={feature}
              onChange={e => setFeature(e.target.value)}
              className='form-control'
            />
            <button type='button' onClick={() => addFeature()} className="btn btn-secondary ms-2" style={{ minWidth: '130px' }}>
              Add Features
            </button>
          </div>
        </div>

        <AddPhotosForm photos={photos} setPhotos={setPhotos} />

        <div>
          <button
            className="btn btn-success"
            type='submit'
          >
            {pId ? 'Update' : 'Add'}
          </button>

          {
            pId ? (
              <button
                className="btn btn-secondary ms-2"
                type='button'
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            ) : ''
          }
        </div>

      </form>
    </div>
  )
}

export default CreateProductsForm