import React from 'react'

export const Products = ({product}) => {
  return (
    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
    <div className="card-header text-center">{product.id}</div>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <div className="card-footer d-flex justify-content-around">
        <button className='btn btn-danger'>Delete</button>

        <div className="">
          <input type="checkbox" />
          <label htmlFor="">in Stock</label>
        </div>
      </div>
    </div>
  </div>
  )
}

//