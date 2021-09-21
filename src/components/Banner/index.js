import React from "react"

// components
import { 
    BannerWrap,
    BannerCTA
} from './style'
import Contain from "../Contain"

// markup
const Banner = ({children, image, title, text}) => {
    return (
        <BannerWrap>
            <BannerCTA>
                <Contain>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {text}
                    </p>
                    { children }
                </Contain>
            </BannerCTA>
        </BannerWrap>
    )
}

export default Banner