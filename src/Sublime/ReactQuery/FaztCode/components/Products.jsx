import { useMutation, useQueryClient } from "react-query"
import { deleteProduct, updateProduct } from "../api/productsAPI"



export const Products = ({product}) => {

  const queryClient = useQueryClient();

  const deleteProductMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products'); //refresca ,pero no me funciona
    }
  });

  const updateProductMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries('products'); //refresca ,pero no me funciona
    }
  });

  return (
    <div className="card text-white bg-secondary mb-3" style={{ width: '18rem' }} >
    <div className="card-header text-center">{product.id}</div>
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <p>{product.description}</p>
      <p>{product.price}</p>

      <div className="card-footer d-flex justify-content-around">
        <button 
          className='btn btn-danger'
          onClick={()=> deleteProductMutation.mutate(product.id)}
        >Delete</button>

        <div className="">
          <input 
            type="checkbox" 
            id={product.id}
            checked={product.inStock}
            onChange={ e => { 
            updateProductMutation.mutate({
              ...product,
              inStock: e.target.checked
            })
          }} />
          <label htmlFor={product.id}>in Stock</label>
        </div>
      </div>
    </div>
  </div>
  )
}

//