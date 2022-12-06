import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


const AppFaztCode = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div>AppFaztCode</div>
  </QueryClientProvider>
    
  )
}

export default AppFaztCode