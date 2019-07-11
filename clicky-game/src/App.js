import React from 'react'
import Cards from './components/Cards'
import { Provider } from './context'

function App () {
  return (
    <Provider> 
      <Cards />
    </Provider>

  )
}

export default App
