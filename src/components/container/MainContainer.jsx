import React from 'react'
import ButtonList from './ButtonList'
import ProductContainer from './ProductContainer'

const MainContainer = () => {
  return (
    <div style={{margin: '32px'}}>
        <ButtonList />
        <ProductContainer />
    </div>
  )
}

export default MainContainer