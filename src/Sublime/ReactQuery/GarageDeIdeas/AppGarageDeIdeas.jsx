import React from 'react'
import { ReactQuery } from './components'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';
import './AppGarageDeIdeas.css'

const queryClient = new QueryClient();

const AppGarageDeIdeas = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <ReactQuery/>
    </div>
    <ReactQueryDevtools/>
  </QueryClientProvider>
  )
}

export default AppGarageDeIdeas