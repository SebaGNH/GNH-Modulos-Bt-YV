import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
//import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ReactQuery } from './components'
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const AppFaztCode = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQuery/>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    
  )
}

export default AppFaztCode