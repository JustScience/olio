import styled from "styled-components";
import media from '../Responsive/media'

const GalleryWrap = styled.section`
    display: grid;
    gap: 2px;
    grid-template-columns: 1fr;
    justify-items: stretch;
    margin: 0;
    padding: ${props =>
        props.product ? '0' :
        '0'};
    width: 100%;
    
    ${media.tabletSM`
        grid-template-columns: ${props =>
        props.mini ? '1fr' :
        props.product ? '1fr' :
        '1fr 1fr'};
    `};
    ${media.tablet`
        grid-template-columns: ${props =>
        props.mini ? '1fr 1fr' :
        props.product ? '1fr 1fr' :
        '1fr 1fr 1fr'};
    `};
    ${media.tabletLG`
        grid-template-columns:  ${props => 
            props.mini ? '1fr 1fr' :
            props.small ? '1fr 1fr 1fr' :
            props.product ? '1fr 1fr 1fr' :
            '1fr 1fr 1fr 1fr'};
    `};
    ${media.laptop`
        grid-template-columns:  ${props => 
            props.mini ? '1fr 1fr 1fr' :
            props.small ? '1fr 1fr 1fr' : 
            props.product ? '1fr 1fr 1fr 1fr' :
            '1fr 1fr 1fr 1fr 1fr'};
        margin: 0 auto;
        max-width: 1440px;
    `};
    ${media.desktop`
        grid-template-columns: ${props => 
            props.small ? '1fr 1fr 1fr' : 
            '1fr 1fr 1fr 1fr 1fr'};
        margin: 0 auto;
        max-width: 1440px;
    `};
    ${media.tv`
        grid-template-columns: ${props => 
            props.small ? '1fr 1fr 1fr' : 
            props.product ? '1fr 1fr 1fr 1fr 1fr 1fr' : 
            '1fr 1fr 1fr 1fr 1fr'};
        margin: 0 auto;
        max-width: 1900px;
    `};
`

export default GalleryWrap