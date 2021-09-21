import React from 'react'
import { Link } from 'gatsby'

import Logo from '../Logo'
import { LogoWrap, LogoIcon, LogoText } from './style.js'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon><Logo/></LogoIcon>
                <LogoText>Galenti Design</LogoText>
            </LogoWrap>
        </Link>
    )
}
