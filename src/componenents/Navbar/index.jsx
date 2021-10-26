import { useState } from "react";
import styled from "styled-components";
import {
  defaultTheme,
  desktop,
  HeroSectionWrapper,
  mobile,
  typeScale,
} from "componenents/utils";
import Logo from "../Logo/index.jsx";
import menuBackgroundImg from "../../assests/images/menubackground.svg";
import { SecondaryButton } from "../Buttons";
import Hamburger from "./Hamburger.js";
import { Link } from "react-scroll";

const MenuContainer = styled.div`
  background: transparent;
  padding: 24px;

  ${desktop} {
    display: none;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    `
    z-index: 99999999;
    min-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: ${defaultTheme.darkBackground};
    background-image: url(${menuBackgroundImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50%;
  `};
`;

const MobileNavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo-container {
    display: flex;
    flex-shrink: 0;
    flex-grow: 1;
  }

  .button-wrapper {
    display: none;

    ${mobile} {
      display: block;
    }
  }
`;

const DesktopNavWrapper = styled.nav`
  display: none;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: transparent;

  ${desktop} {
    display: flex;
  }
`;

const NavList = styled.div`
  padding-top: 40px;
  width: 100%;
  text-align: center;

  ${desktop} {
    padding-top: 0;
    width: initial;
    font-size: ${typeScale.helperText};
  }
`;

const NavLinkStyles = styled(Link)`
  text-align: center;
  display: block;
  color: ${defaultTheme.textColorOnDarkBackGround};
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;

  &:not(:first-child) {
    margin-top: 32px;
  }

  ${desktop} {
    margin-right: 35px;
    display: inline-block;
    margin-top: 0 !important;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${defaultTheme.primaryColor};
  }
`;

const NavLinks = () => (
  <NavList>
    <NavLinkStyles to="opportunity" spy={true} smooth={true}>
      opportunity
    </NavLinkStyles>
    <NavLinkStyles to="team" spy={true} smooth={true}>
      team
    </NavLinkStyles>
    <NavLinkStyles>platforms</NavLinkStyles>
    <NavLinkStyles>token</NavLinkStyles>
    <NavLinkStyles>partners</NavLinkStyles>
    <NavLinkStyles>
      <SecondaryButton modifiers="small">whitepaper</SecondaryButton>
    </NavLinkStyles>
  </NavList>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <HeroSectionWrapper>
      <MenuContainer isMenuOpen={isMenuOpen}>
        <MobileNavWrapper isMenuOpen={isMenuOpen}>
          <div className="logo-container">
            <Logo />
          </div>
          <div className="button-wrapper">
            <SecondaryButton modifiers="small">whitepaper</SecondaryButton>
          </div>

          <Hamburger
            handleHamburgerClick={handleClick}
            isMenuOpen={isMenuOpen}
          />
        </MobileNavWrapper>
        {isMenuOpen && <NavLinks  />}
      </MenuContainer>
      <DesktopNavWrapper>
        <Logo dark />
        <NavLinks />
      </DesktopNavWrapper>
    </HeroSectionWrapper>
  );
};

export default Navbar;
