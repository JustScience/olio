import React from 'react'
import { Link } from 'gatsby'
import { LogoWrap, LogoIcon, LogoText } from './style.js'
import { StaticImage } from 'gatsby-plugin-image'

export default function HeaderLogo() {
    return (
        <Link to="/">
            <LogoWrap>
                <LogoIcon><StaticImage src="../../images/icon.png" /></LogoIcon>
                <LogoText>Galenti Design</LogoText>
            </LogoWrap>
        </Link>
    )
}
