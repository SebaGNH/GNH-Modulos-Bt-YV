import React from 'react'
//import { useQuery} from '@tanstack/react-query'
import { useQuery } from 'react-query'
import { getProducts } from '../api/productsAPI';
import { Products } from './'




export const ReactQuery = () => {

  //queryFn = query Function
  //data es un arreglo de productos con":" lo renombramos
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  
  if(isLoading) return <h3>Loading...</h3>
  else if(isError) return <h3>Error: {error.message}</h3>


  return (
    <div className='row'>
      <div className="d-grid gap-3">
        {
          data.map( product => (  
            <Products
              className="col-6"
              key={product.id}
              product={product}
            />
          ))
        }
      </div>  
    </div>
  )
}



   /*  <div>
      {JSON.stringify(productos)}
    </div> */