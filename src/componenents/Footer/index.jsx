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
  position: relative;
  background: ${defaultTheme.darkBackground};
  background-image: url(${footerBackground});
  background-image: url(${footerBackground}),
    linear-gradient(90deg, #1f3d53, #2f5572);
  background-size: 40vw, cover;
  width: 100%;
  bottom: 0;
  opacity: 1;

  ${tablets} {
    background-position-x: -14%;
  }

  ${desktop} {
    background-size: 12.5vw, cover;
    background-position-x: 7.2%;
  }

  .footer-rights {
    margin: 0 auto;
    margin-top: 32px;
    text-align: center;

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

  .footer-main-content {
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
  order: 1;

  ${mobile} {
    flex-direction: row;
    margin-bottom: 48px;
  }

  ${tablets} {
    display: block;
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
    flex-direction: column;

    ${mobile} {
      margin-right: 24px;
      margin-bottom: 0;
    }
  }

  .brand-address-container {
    padding-top: 0;
    text-align: center;
    line-height: 2;
    color: ${defaultTheme.textColorOnDarkBackGround};
    font-size: 14px;

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
  order: 1;

  ${mobile} {
    order: 2;
    padding-bottom: 48px;
  }

  ${tablets} {
    width: 50%;
  }

  ${desktop} {
    margin-right: 48px;
    margin-left: 16px;
  }

  ${largeDesktop} {
    width: auto;
    margin-left: 0;
    margin-right: 0;
  }

  h3 {
    color: ${neutral[100]};
    margin-bottom: 24px;
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
    border-radius: 4px;
    background-color: ${neutral[100]};
    padding: 4px;
    border-radius: 4px;

    ${desktop} {
      background-color: transparent;
      padding: 0;
    }
  }

  .form-input-container {
    display: flex;
    align-items: center;
    overflow-x: auto;
    background-color: ${neutral[100]};
    border-radius: 4px;
    font-weight: 600;
    font-size: 14px;
    width: 75%;
  }
`;

const FooterInput = styled(FormInput)`
  background-color: transparent;
  border-style: none;
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 12px;

  ${desktop} {
    background-color: ${neutral[100]};
    padding: 24px 32px;
    border-radius: 4px;
    width: 450px;
    border-style: none;
    width: 450px;
    color: #1f3d53;
  }
`;

const FooterButton = styled(PrimaryButton)`
  font-weight: 600;
  padding: 12px;
  border-radius: 4px;
  font-size: 14px;

  ${desktop} {
    padding: 24px 40px;
    margin-left: 20px;
  }
`;

const Footer = ({ inView }) => {
  const [email, setEmail] = useState("");
  return (
    <FooterContainer>
      <FootInnerContainer>
        <div className="footer-main-content">
          <FooterBrandContainer>
            <div className="brand-svg">
              <Logo />
            </div>
            <div className="brand-address-container">
              <div className="brand-address">
                <p>HYVE Ltd.</p> <p>First Floor, Providence Complex</p>
                <p>Providence, Mahe, Seychelles</p>
              </div>
              <div className="brand-address-mobile">
                <p>HYVE Ltd. First Floor, Providence Complex</p>
                <p>Providence, Mahe,</p> <p> Seychelles</p>
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
              </div>
              <FooterButton>SUBMIT</FooterButton>
            </form>
          </FooterFormContainer>
          <div className="side-image-container">
            <img src="/images/etherum.svg" alt="" />
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
