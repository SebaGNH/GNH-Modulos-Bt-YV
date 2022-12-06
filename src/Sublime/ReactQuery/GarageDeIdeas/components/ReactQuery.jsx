import React,{Fragment,useState} from 'react'
import { useQuery } from 'react-query'
import { ProductCard } from './ProductCard'

export const ReactQuery = () => {
  const [page, setPage] = useState(1)

  const getProducts = async ({queryKey}) => {
    const response = await fetch(`https://peticiones.online/api/products?page=${queryKey[1]}`);
    const data = await response.json();
    return data.results;
  }
  
    //const {data, status} = useQuery('products', getProducts)
    const {data, status} = useQuery(['products',page], getProducts);

  if (status === 'loading') {
    return <p>Recuperando los productos</p>
  }
  if (status === 'error') {
    return <p>Error</p>
  }
  return (
    <Fragment>
      <h2>Lista de Productos</h2>
      <div className="products">
        {data.map( product => (
          <ProductCard
            key={product.id}
            product={product}/>
        ))}
      </div>

    </Fragment>
  )
}
