import {
  ContainerWrapper,
  defaultTheme,
  desktop,
  largeDesktop,
  mobile,
  orange,
  tablets,
} from "componenents/utils";
import styled from "styled-components";
import { about } from "utils";
import largeAboutImage from "../../../assests/images/aboutLarge.svg";
import aboutSmallImage from "../../../assests/images/aboutSmall.svg";
import hyveFeatureLine from "../../../assests/images/featureline.svg";

const AboutSectionWrapper = styled.section`
  position: relative;

  .about-img-large {
    display: none;
    position: absolute;
    left: 0;
    top: -200px;
    width: 30%;
    ${desktop} {
      display: block;
    }
  }

  .about-img-small {
    width: 100%;
    margin-top: 40px;

    ${desktop} {
      display: none;
    }
  }

  .what-is-hive-wrapper {
    padding-top: 20px;
    margin-top: 20px;

    ${desktop} {
      display: flex;
      flex-direction: column;
      padding-top: 0;
      margin-top: 0;
    }
  }

  .fancy-text-wrapper {
    height: 48px;
    width: 100%;
    position: relative;
    margin-bottom: 48px;

    ${mobile} {
      margin-bottom: 0;
    }
  }

  .fancy-text {
    font-family: Coming Soon !important;

    ${tablets} {
      font-size: 24px !important;
    }
  }

  .hyve-fancy-text {
    position: absolute;
    right: 7vw;
    top: -20%;
    transform: rotate(-10deg);

    ${mobile} {
      top: -160%;
    }

    ${tablets} {
      top: -240%;
    }

    ${desktop} {
      top: -80%;
      right: 2%auto;
    }
  }

  .hyve-paragraph {
    color: ${defaultTheme.textColor};
    font-size: inherit;
  }

  .text-orange {
    color: ${orange[100]};
  }

  .what-is-hive-main {
    padding: 0 20px;

    ${desktop} {
      order: -1;
    }

    ${largeDesktop} {
      margin-top: 32px;
    }
  }

  .hyve-long-text {
    padding: 0 16px;
    text-align: center;
    padding-bottom: 40px;
    line-height: 2;

    ${tablets} {
      font-size: 18px;
    }

    ${desktop} {
      width: 50%;
      margin: auto;
    }
  }

  .hyve-features {
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    justify-content: center;
    align-items: center;

    ${desktop} {
      grid-template-columns: repeat(4, 1fr);
    }

    ${desktop} {
      margin-top: 64px;
    }
  }

  .hyve-feature {
    padding: 12px 8px;

    .hyve-feature__icon,
    .hyve-feature__text,
    .hyve-feature__line {
      text-align: center;
    }

    .hyve-feature__icon {
      padding: 0 24px;
      margin: 25px auto;

      img {
        height: 110px !important;
        margin: auto;
      }
    }

    .hyve-feature__text {
      font-size: 14px;
      color: ${defaultTheme.headerText};
      line-height: 1.5;
      font-weight: 600;

      ${tablets} {
        padding: 0 24px;
      }
    }

    .hyve-feature__line {
      padding: 32px 0;
    }
  }
`;

const AboutSection = () => (
  <AboutSectionWrapper>
    <img
      src={largeAboutImage}
      alt="section about"
      className="about-img-large"
    />
    <img
      src={aboutSmallImage}
      alt="section about"
      className="about-img-small"
    />
    <ContainerWrapper>
      <div className="what-is-hive-wrapper">
        <div className="fancy-text-wrapper">
          <div className="fancy-text hyve-fancy-text">
            <p className="hyve-paragraph">
              <span className="text-orange">HYVE</span>
              <span>(/haiv/) - noun.</span>
            </p>
            <p className="hyve-paragraph lg-inline">A teeming crowd.</p>
            <p className="hyve-paragraph text-orange">
              a place swarming with activity.
            </p>
          </div>
        </div>
        <div className="what-is-hive-main">
          <h2 data-text="What is HYVE?" className="shadowed-title">
            What is HYVE?
          </h2>
          <p className="hyve-long-text">
            HYVE is a community-governed ecosystem that solves the current
            problems in the global multi billion freelance and workforce market,
            leveraging the power of decentralized technologies while adding new
            features and mechanics that are non-existent on any current
            platform.
          </p>
        </div>
        <div className="hyve-features">
          {about.map((feature, index) => (
            <div className="hyve-feature">
              <div className="hyve-feature__icon">
                <img src={`images/about${index + 1}.svg`} alt="" />
              </div>
              <div className="hyve-feature__text">{feature}</div>
              <div className="hyve-feature__line">
                <img src={hyveFeatureLine} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ContainerWrapper>
  </AboutSectionWrapper>
);

export default AboutSection;
