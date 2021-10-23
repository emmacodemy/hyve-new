import { defaultTheme, desktop, typeScale } from "componenents/utils";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
  small: () => `
    font-weight: 600;
    font-size: ${typeScale.copyrightText};
    padding: 10px 24px 8px;
  `,
  responsive: () => `
    padding: 20px 40px;  
    
    ${desktop} {
      padding: 20px 32px;
    }
    `,
};

const Button = styled.button`
  display: inline-block;
  letter-spacing: 3px;
  text-decoration: none;
  font-family: ${defaultTheme.primaryFont};
  font-size: ${typeScale.helperText};
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  border: none;
  border-radius: 200px;
  outline: 0;
  cursor: pointer;
  padding: 20px 24px;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${defaultTheme.primaryColor};
  color: ${defaultTheme.textColorOnPrimary};

  &:hover {
    box-shadow: 0 15px 30px 0 rgb(${defaultTheme.primaryColor} / 11%),
      0 5px 15px 0 rgb(${defaultTheme.primaryColor} / 8%);
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

export const SecondaryButton = styled(Button)`
  background: transparent;
  border: 1px solid ${defaultTheme.textColorOnTransparent};
  color: ${defaultTheme.textColorOnTransparent};

  &:hover {
    background-color: ${defaultTheme.primaryColor};
    border: transparent;
    color: ${defaultTheme.textColorOnPrimary};
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
