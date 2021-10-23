import { PrimaryButton } from "componenents/Buttons";
import FormInput from "componenents/FormInput";
import Logo from "componenents/Logo";
import {
  ContainerWrapper,
  defaultTheme,
  desktop,
  largeDesktop,
  mobile,
  neutral,
  tablets,
} from "componenents/utils";
import { useState } from "react";
import styled from "styled-components";
import footerBackground from "../../assests/images/footersvg.svg";

const FooterContainer = styled.footer`
  padding-top: 64px;
  padding-bottom: 32px;
  background: ${defaultTheme.darkBackground};
  background-image: url(${footerBackground});
  background-image: url(${footerBackground}),
    linear-gradient(90deg, ${defaultTheme.darkBackground}, #2f5572);
  background-size: 40vw, cover;
  width: 100%;
  position: fixed;
  bottom: 0;
  opacity: 1;

  .footer-rights {
    margin-top: 32px;

    div {
      font-size: 14px;
      margin-top: 20px;
      color: ${defaultTheme.textColorOnDarkBackGround};
    }
  }
`;

const FootInnerContainer = styled(ContainerWrapper)`
  margin: 0 auto;
  padding: 0 12px;
  position: relative;
  z-index: 50;

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${desktop} {
      flex-wrap: nowrap;
    }

    .side-image-container {
      padding-top: 48px;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      order: 5;

      ${desktop} {
        width: auto;
        margin: 0;
      }

      img {
        width: 192px;
      }
    }
  }
`;

const FooterBrandContainer = styled.div`
  width: 100%;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${mobile} {
    flex-direction: row;
    margin-bottom: 64px;
  }

  ${tablets} {
    display: block;
    margin-bottom: 48px;
    width: 50%;
  }

  ${desktop} {
    width: auto;
  }

  .brand-svg {
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    color: ${neutral[100]};
    margin-right: 0;
    margin-bottom: 20px;

    ${mobile} {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }

  .brand-address-container {
    padding-top: 0;
    text-align: center;

    ${mobile} {
      text-align: left;
    }

    .brand-address-mobile {
      ${tablets} {
        display: none;
      }
    }

    .brand-address {
      display: none;
      padding-top: 48px;

      ${tablets} {
        display: block;
      }
    }
  }
`;

const FooterFormContainer = styled.div`
  width: 100%;

  ${tablets} {
    width: 50%;
  }

  ${desktop} {
    margin-right: 48px;
    margin-left: 16px;
  }

  /* ${largeDesktop} {
        width: auto;
        margin: 0;
    } */

  h3 {
    color: ${neutral[100]};
    display: none;

    ${tablets} {
      display: block;
    }
  }

  .footer-form-box {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
  }

  .form-input-container {
    display: flex;
    align-items: center;
    overflow-x: scroll;
    background-color: ${neutral[100]};
    border-radius: 4px;
    font-weight: 600;
    font-size: 12px;
    width: 75%;
  }
`;

const FooterInput = styled(FormInput)`
  background-color: transparent;
  border-style: none;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const FooterButton = styled(PrimaryButton)`
  font-weight: 600;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;
`;

const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <FooterContainer>
      <FootInnerContainer>
        <div>
          <FooterBrandContainer>
            <div className="brand-svg">
              <Logo />
              <div className="brand-address-container">
                <div className="brand-address">
                  <p>HYVE Ltd.</p> <p>First Floor, Providence Complex</p>
                  <p>Providence, Mahe, Seychelles</p>
                </div>
                <div class="brand-address-mobile">
                  <p>HYVE Ltd. First Floor, Providence Complex</p>
                  <p>Providence, Mahe,</p> <p> Seychelles</p>
                </div>
              </div>
            </div>
          </FooterBrandContainer>
          <FooterFormContainer>
            <h3>Stay In Touch</h3>
            <form className="footer-form-box">
              <div className="form-input-container">
                <FooterInput
                  name="email"
                  type="text"
                  placeholder="YOUR EMAIL"
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />
                <FooterButton />
              </div>
            </form>
          </FooterFormContainer>
          <div className="side-image-container">
            <img src="/nuxt/a1d6a36.svg" alt="" />
          </div>
        </div>
        <div className="footer-rights">
          <div>© 2019—2021 HYVE. All Rights Reserved.</div>
        </div>
      </FootInnerContainer>
    </FooterContainer>
  );
};

export default Footer;
