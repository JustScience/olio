import React from "react"

// components
import ContainWrap from "./style"

// markup
const Contain = ({children}) => {
    return (
        <ContainWrap>
            { children }
        </ContainWrap>
    )
}

export default Contain