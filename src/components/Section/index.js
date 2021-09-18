import React from "react"

// components
import SectionWrap from "./style"

// markup
const Section = ({children}) => {
    return (
        <SectionWrap>
            { children }
        </SectionWrap>
    )
}

export default Section