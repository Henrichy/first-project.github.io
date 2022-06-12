import styled from 'styled-components'

const HeroItems = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0 4rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width: 650px){
    width: 100%;
}
`

export default HeroItems
