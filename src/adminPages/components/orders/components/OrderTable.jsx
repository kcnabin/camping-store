import React from 'react'
import EachOrderedItem from './EachOrderedItem'

const OrderTable = ({ orderItems }) => {
  return (
    <table className="table">
      <thead className='fw-light'>
        <tr className='table-secondary'>
          <th scope="col">Item</th>
          <th scope="col" className='d-none d-sm-block'>Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>

        {
          orderItems?.map((item, i) => (
            <EachOrderedItem item={item} key={item._id + i} />
          ))
        }
      </tbody>
    </table>
  )
}

export default OrderTable