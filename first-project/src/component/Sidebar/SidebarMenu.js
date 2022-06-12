import styled from 'styled-components'

const SidebarMenu = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(3, 80px);
text-align: center;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(3, 60px);

}`

export default SidebarMenu
