import React from 'react'
import ProductHero from '../component/product/ProductHero';
import ProductBiochar from '../component/product/ProductBiochar';
import ProductPellets from '../component/product/ProductPellets';
import '../component/product/product.css';

const Product = () => {
  return (
    <div className='product'>

    <ProductHero/>
    <ProductBiochar/>
    <ProductPellets/> 
      
    </div>
  )
}

export default Product
