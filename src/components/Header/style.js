import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'
import color from '../Theme/Color'
import media from '../Responsive/media'

const HeaderWrap = styled.nav`
    align-items: center;
    background-color: rgba(0,0,0,0.6);
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 9px -6px ${color.shadow.base};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    padding: 12px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 9999;
`
const LogoWrap = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`
const LogoIcon = styled.span`
    /* border: solid 2px #222;
    border-radius: 50%; */
    color: ${color.grey.medium};
    font-size: 2.1em;
    font-weight: 700;
    /* height: 24px; */
    margin-right: 10px;
    text-shadow: 0 1px 3px ${color.shadow.light};
    transition: 333ms ease-in;
    width: 24px;

    /* &:hover {
        color: ${color.accent.base};
    } */
`
const LogoText = styled.span`
    color: ${color.primary.light};
    font-size: .84em;
`
const NavWrap = styled.nav`
    align-items: center;
    display: none;
    flex-direction: row;
    justify-content: flex-start;

    ${media.tabletSM`
        display: flex;
    `};
`
const NavItem = styled(GatsbyLink)`
    border: solid 1px transparent;
    /* border-radius: 12px; */
    box-sizing: border-box;
    color: ${color.primary.base};
    font-size: 0.9em;
    margin-left: 4px;
    padding: 8px 12px;
    transition: all 333ms ease-in;

    &:hover {
        /* background-color: ${color.grey.offWhite}; */
        /* border-color: ${color.primary.light}; */
        box-shadow: 0 4px 9px -6px ${color.shadow.base};
        color: ${color.primary.light};
    }
`

export { HeaderWrap, LogoWrap, NavWrap, NavItem, LogoIcon, LogoText }