import styled from "styled-components"
import color from "../Theme/Color"

const BannerWrap = styled.section`
    height: 180px;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
`
const BannerBG = styled.div`
    height: 100%;
    overflow: hidden;
    width: 100%;
    /* overlay positioning */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
`
const BannerCTA = styled.div`
    background-color: rgba(0,0,0,0.8);
    height: 100%;
    width: 100%;
    /* text positioning */
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* overlay positioning */
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    /* text styling */
    h1 {
        color: ${color.primary.light};
        font-size: 300%;
        text-align: center;
        line-height: 100%;
        margin-bottom: 8px;
    }
    p {
        color: ${color.grey.medium};
        font-weight:300;
        text-align: center;
    }
`

export { 
    BannerWrap,
    BannerBG,
    BannerCTA 
}