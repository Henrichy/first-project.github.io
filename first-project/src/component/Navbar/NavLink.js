import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components'
const NavLink = styled(Link)`
color: #fff;
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;

@media screen and (maxwidth: 400px){
position: absolute;
top: 10px;
left: 25px;
}`

export default NavLink