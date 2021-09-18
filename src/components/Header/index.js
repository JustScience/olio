import React from "react"

import { 
    HeaderWrap, 
} from "./style"
import HeaderLogo from './logo.js'
import HeaderNav from './nav.js'

const Header = ({children}) => {
    return (
        <HeaderWrap>
            <HeaderLogo />
            <HeaderNav />
            {children}
        </HeaderWrap>
    )
}

export default Header