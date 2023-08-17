import React from 'react'
import Products from './products/Products'
import ProductsHeader from './productsHeader/ProductsHeader'
import "./Main.scss"

const Main = () => {
  return (
    <main>
        <ProductsHeader />
        <Products />
    </main>
  )
}

export default Main