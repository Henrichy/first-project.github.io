import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SidebarRoute = styled(Link)`
background: #e31837;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
outline:none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}`

export default SidebarRoute
