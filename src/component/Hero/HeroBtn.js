import styled from 'styled-components'

const HeroBtn = styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2s ease-out;

&:hover{
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
}
`

export default HeroBtn
