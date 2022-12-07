import React from 'react'
//import { useQuery} from '@tanstack/react-query'
import { getProducts } from '../api/productsAPI';
import { useQuery } from 'react-query'



//queryFn = query Function
export const ReactQuery = () => {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });

  
  if(isLoading) return <h3>Loading...</h3>
  else if(isError) return <h3>Error: {error.message}</h3>


  return (
    <div>
      si
      {JSON.stringify(data)}
    </div>
  )
}
