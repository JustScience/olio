import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// components
import { 
    HeroWrap,
    HeroBG,
    HeroCTA
} from './style'
import Contain from "../Contain"

// markup
const Hero = ({children, image, headline, text}) => {
    return (
        <HeroWrap>
            <HeroBG>
                <StaticImage src="../../images/desk.png" alt={headline} />
            </HeroBG>
            <HeroCTA>
                <Contain>
                    <h1>
                        {headline}
                    </h1>
                    <p>
                        {text}
                    </p>
                    { children }
                </Contain>
            </HeroCTA>
        </HeroWrap>
    )
}

export default Hero