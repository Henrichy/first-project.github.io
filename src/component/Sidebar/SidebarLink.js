import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #000;
cursor: pointer;

&:hover{
    color: #e31837;
    transition: 0.2s ease-in-out;
}`

export default SidebarLink
