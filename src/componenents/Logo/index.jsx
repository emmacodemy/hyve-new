import styled from "styled-components";
import { defaultTheme, typeScale } from "componenents/utils";
import { ReactComponent as LogoSvg } from "../../assests/images/logo.svg";
import { Link } from "react-router-dom";

const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  margin-right: 24px;
  text-decoration: none;

  span {
    font-size: ${typeScale.textLarge};
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ dark }) =>
      dark ? defaultTheme.headerText : defaultTheme.textColorOnPrimary};
    text-transform: uppercase;
    margin: auto 16px;
    white-space: nowrap;
  }
`;

const Logo = ({ dark }) => (
  <LogoWrapper to="/" dark={dark}>
    <LogoSvg />
    <span>h y v e</span>
  </LogoWrapper>
);

export default Logo;
