import { defaultTheme } from "componenents/utils";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const HAMBURGER_MODIFIERS = {
  open: () => `
        background-color: transparent;

        &::before {
            bottom: 0;transform: rotate(-45deg);
        }

        &::after {
            top: 0;transform: rotate(45deg);
        }
    `,
  close: () => `
        background-color: ${defaultTheme.textColorInverted};

        &::before {
            transform: rotate(0deg);bottom: 8px;
        }

        &::after {
            transform: rotate(0deg);top: 8px;
        }
    `,
};

const HambugerWrapper = styled.button`
  background: none;
  display: block;
  position: relative;
  display: flex;
  justify-items: center;
  outline: 0;
  border: 0;
  cursor: pointer;
  padding: 8px 12px;
`;

const HambugerMenu = styled.div`
  position: relative;
  width: 20px;
  height: 2px;
  background-color: ${defaultTheme.textColorInverted};

  &::after,
  &::before {
    position: absolute;
    content: "";
    left: 0;
    width: 20px;
    height: 2px;
    background-color: ${defaultTheme.textColorInverted};
    transform-origin: center;
    transition: bottom, transform 0.3s cubic-bezier(0.23, 1, 0.32, 1) 0.3s;
  }

  &::before {
    bottom: 8px;
    transition: bottom 0s cubic-bezier(0.23, 1, 0.32, 1) 0s,
      transform 0.3s 0.1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  &::after {
    top: 8px;
    transition: top 0s cubic-bezier(0.23, 1, 0.32, 1) 0s,
      transform 0.3s 0.1s cubic-bezier(0.23, 1, 0.32, 1);
  }

  ${applyStyleModifiers(HAMBURGER_MODIFIERS, "isMenuOpen")};
`;

const Hamburger = ({ handleHamburgerClick, isMenuOpen }) => {
  return (
    <HambugerWrapper onClick={handleHamburgerClick}>
      <HambugerMenu isMenuOpen={isMenuOpen ? "open" : "close"} />
    </HambugerWrapper>
  );
};

export default Hamburger;
