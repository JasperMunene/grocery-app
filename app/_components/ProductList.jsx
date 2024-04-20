import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({productList}) => {
  return (
    <div className='mt-10'>
        <h2 className='text-green-600 text-2xl font-bold mb-4'>Our Popular products</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6'>
            {productList.map((product, index) => index < 10 &&(
                <ProductItem product={product} />
            ))}
        </div>
    </div>
  )
}

export default ProductList