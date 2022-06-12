import React from 'react'
import ProductContainer from './ProductContainer'
import ProductHeading from './ProductHeading'
import ProductWrapper from './ProductWrapper'
import ProductCard from './ProductCard'
import ProductImg from './ProductImg'
import ProductInfo from './ProductInfo'
import ProductTitle from './ProductTitle'
import ProductDesc from './ProductDesc'
import ProductPrice from './ProductPrice'
import ProductButton from './ProductButton'

const Product = ({heading, data}) => {
  return (
    <ProductContainer>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
        {data.map((product, index)=>{
            return(
                <ProductCard key={index}>
                    <ProductImg src={product.img} alt={product.alt}/>
                    <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductDesc>{product.desc}</ProductDesc>
                        <ProductPrice>{product.price}</ProductPrice>
                        <ProductButton>{product.button}</ProductButton>
                    </ProductInfo>
                </ProductCard>
            )
        })}
        </ProductWrapper>
    </ProductContainer>
  )
}

export default Product
