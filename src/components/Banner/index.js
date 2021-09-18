import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// components
import { 
    BannerWrap,
    BannerBG,
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