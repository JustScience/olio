import React, { useState } from 'react'

import color from '../Theme/Color'
import Icon from '../Icon'
import { MobileNavItem, MobileNavWrap, MobileNavTrigger, MobileNavHeaderWrap } from './style.js'

const activeStyle = {
    background: "rgba(0,0,0,0.3)", 
    boxShadow: "0 4px 9px -6px " + color.shadow.base,
}

export default function MobileNav() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <MobileNavHeaderWrap>
                <MobileNavTrigger 
                    onClick={() => setShowMenu(!showMenu)}
                >
                    {!showMenu &&
                        <Icon shape="menu" size="32px" />
                    }
                    {!!showMenu &&
                        <Icon shape="close" size="32px" />
                    }
                </MobileNavTrigger>
            </MobileNavHeaderWrap>
            {!!showMenu && 
                <MobileNavWrap>
                    <MobileNavItem to="/process" activeStyle={activeStyle}>Process</MobileNavItem>
                    <MobileNavItem to="/projects" activeStyle={activeStyle}>Projects</MobileNavItem>
                    <MobileNavItem to="/history" activeStyle={activeStyle}>History</MobileNavItem>
                </MobileNavWrap>
            }
        </div>
    )
}
