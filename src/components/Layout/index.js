import React from "react"

// components
import GlobalStyle from '../Theme/Global'
import Responsive from '../Responsive'
import Header from "../Header"
import Section from "../Section"
import ContactMe from "../Contact"
import Footer from '../Footer'
import LayoutWrap from "./style"

// markup
const Layout = ({children}) => {
    return (
        <>
            <GlobalStyle />
            <LayoutWrap>
                <Header />
                { children }
                <Section>
                    <ContactMe />
                </Section>
                <Footer />
            </LayoutWrap>
            <Responsive /> 
        </>
    )
}

export default Layout