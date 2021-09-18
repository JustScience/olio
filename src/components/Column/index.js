import React from "react"

// components
import ColumnWrap from "./style"

// markup
const Column = ({children}) => {
    return (
        <ColumnWrap>
            { children }
        </ColumnWrap>
    )
}

export default Column