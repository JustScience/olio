import React from 'react'
import { NavWrap, NavItem } from './style.js'
import color from './../Theme/Color'

const activeStyle = {
    color: color.primary.light, 
    boxShadow: "0 4px 9px -6px" + color.shadow.base,
}

export default function HeaderNav() {
    return (
        <NavWrap>
            <NavItem to="/process" activeStyle={activeStyle}>Process</NavItem>
            <NavItem to="/projects" activeStyle={activeStyle}>Projects</NavItem>
            <NavItem to="/history" activeStyle={activeStyle}>History</NavItem>
        </NavWrap>
    )
}
