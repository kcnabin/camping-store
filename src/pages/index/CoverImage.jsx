import React from 'react'

const CoverImage = () => {
  return (
    <div className='position-relative'>
      <img
        src="/photos/cover-image.jpg"
        alt="cover"
        className='img-fluid'
      />

      <div className='position-absolute start-0 end-0 bottom-0 cover-text text-white text-center p-4'>
        <h4 className='d-none d-sm-block mb-3'>
          Camp all day, then call it a day.
        </h4>

        <p className='m-0'>
          We have all the gears you need to seize the day and the overnight.
        </p>
      </div>
    </div>
  )
}

export default CoverImage