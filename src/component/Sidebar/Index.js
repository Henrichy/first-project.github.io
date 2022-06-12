import React from 'react'
import SidebarContainer from './SidebarContainer'
import Icon from './Icon'
import CloseIcon from './CloseIcon'
import SidebarMenu from './SidebarMenu'
import SidebarLink from './SidebarLink'
import SideBtnWrap from './SideBtnWrap'
import SidebarRoute from './SidebarRoute'

const Sidebar = ({toggle, Open}) => {
  return (
    <SidebarContainer Open= {Open}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarMenu>
            <SidebarLink to="/">Pizzas</SidebarLink>
            <SidebarLink to="/">Dessert</SidebarLink>
            <SidebarLink to="/">Full Menu</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
            <SidebarRoute to="/">Order Now</SidebarRoute>
        </SideBtnWrap>
    </SidebarContainer>
  )
}

export default Sidebar
