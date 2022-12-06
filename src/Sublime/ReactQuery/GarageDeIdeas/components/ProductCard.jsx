import React, {Fragment} from 'react'

export const ProductCard = ({product}) => {
  return (
    <Fragment>

      {/* Card */}
      <div className="card text-white bg-primary mb-3">
      <div className="card-header">
        <h5>{product.name}</h5>
      </div>
      <div className="card-body d-flex justify-content-around">
        <div className="col-3">
          <img src={product.image} alt="" className='card-img rounded' />
        </div>
        <div className="col-6 text-start">
          <h4 className="card-title">ID #{product.id}</h4>
          <p>{product.description}</p>
          <p>Categoría: {product.category}</p>
          <p>Precio: {product.price}</p>
        </div>
    </div>
    </div>

    </Fragment>
  )
}

/*
<div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h4 class="card-title">Primary card title</h4>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>




 <div className="product">
      <div className="left" style={{ backgroundImage: `url(${product.image})` }}>
        </div>
        <div className="right">
          <h5>{product.name}</h5>
          <p>ID #{product.id}</p>
          <p>{product.description}</p>
          <p>Categoría: {product.category}</p>
          <p>Precio: {product.price}</p>
        </div>
      </div>
*/