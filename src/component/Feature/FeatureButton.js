import React from 'react'
import styled from 'styled-components'

const FeatureButton = styled.button`
font-size: 1.4rem;
padding: 0.6rem 3rem;
border: none;
background: #ffc500;
color: #000;
transition: 0.2s ease-out;
margin-top: 20px;

&:hover{
    background: #e31837;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
}
`

export default FeatureButton
