import React from "react"

// components
import RowWrap from "./style"

// markup
const Row = ({children}) => {
    return (
        <RowWrap>
            { children }
        </RowWrap>
    )
}

export default Row