import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Index'
import Sidebar from '../Sidebar/Index'
import HeroBtn from './HeroBtn'
import HeroContent from './HeroContent'
import HeroContainer from './HeroElement'
import HeroH1 from './HeroH1'
import HeroItems from './HeroItems'
import HeroP from './HeroP'


const Hero = () => {
    const [Open, setOpen]= useState(false)

    const toggle = ()=>{
        setOpen(!Open)
    };
  return (
    <HeroContainer>
        
        <Navbar toggle = {toggle} />
        <Sidebar Open= {Open} toggle= {toggle}
         />

        <HeroContent>
            <HeroItems>
                <HeroH1>Greatest Pizza Ever</HeroH1>
                <HeroP>Ready in 60 seconds</HeroP>
                <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
    </HeroContainer>
  )
}

export default Hero
