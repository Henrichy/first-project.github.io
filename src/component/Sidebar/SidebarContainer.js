import styled from 'styled-components'

const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 350px;
height: 100%;
background: #ffc500;
display: grid;
align-items: center;
top: 0;
transition: 0.3s ease-in-out;
right: ${({Open})=> (Open ? '0': '-1000px')};

@media screen and (max-width: 200px){
    width: 100%;
};
`

export default SidebarContainer
