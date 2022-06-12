import React from 'react'
import All from './All'
import Feature from './Feature/Index';
import Footer from './Footer/Index';
import Hero from './Hero/Index'
import ProductData from './Products/Data';
import Product from './Products/Index';
const Allof = () => {
  return (
   <All>
       <Hero />
       <Product heading='Choose your Favorite' data ={ProductData}/>
       <Feature />
       <Footer />
   </All>

  )
}

export default Allof
