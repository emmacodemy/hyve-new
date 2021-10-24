import {
  ContainerWrapper,
  defaultTheme,
  desktop,
  mobile,
  neutral,
  staticData,
} from "componenents/utils";
import styled from "styled-components";

import opportunityLargeImage from "../../assests/images/opportunityLarge.svg";
import opportunitySmallImage from "../../assests/images/opportunitysmall.svg";
import opportunityIcon from "../../assests/images/opportunityIcon.svg";

const SectionOpportunityContainer = styled.section`
  position: relative;

  .mobile-market {
    .mobile-market__counter,
    .mobile-market__size {
      background: hsla(0, 0%, 87.5%, 0.3);
      width: 220px;
      position: absolute;
      z-index: 9999;
      padding: 10px;

      ${mobile} {
        background: hsla(0, 0%, 87.5%, 0.3);
        width: 220px;
        position: absolute;
        z-index: 9999;
        padding: 10px;
      }
    }
    .mobile-market__counter {
      right: 10%;
      top: 1%;

      ${mobile} {
        right: 10%;
        top: 15%;
      }

      ${desktop} {
        right: 7%;
        top: 45%;
      }
    }

    .mobile-market__size {
      left: 8%;
      top: 10%;

      ${mobile} {
        left: 8%;
        top: 25%;
      }

      ${desktop} {
        left: auto;
        right: 20%;
        top: 83%;
      }
    }

    .mobile-market__inner {
      background-image: linear-gradient(-149deg, #eee 21%, #d8d8d8);
      height: 100%;
      width: 100%;
      text-align: center;
      padding: 15px;
    }

    .mobile-market-size__inner {
      background-image: linear-gradient(43deg, #214159 19%, #2c526d);
      height: 100%;
      width: 100%;
      text-align: center;
      padding: 20px;
    }

    .mobile-market__value {
      font-size: 20px;
      color: ${defaultTheme.headerText};
      padding-bottom: 8px;
      font-weight: 700;

      &.white {
        color: ${neutral[100]};
      }
    }

    .mobile-market__title {
      letter-spacing: 0.05em;
      font-size: 10.5px;
      color: ${defaultTheme.headerText};
      padding-bottom: 8px;
      font-weight: 700;

      &.white {
        color: ${neutral[100]};
      }

      &.no-padding {
        padding: 0;
      }
    }
  }

  .mobile-city-svg {
    width: 100%;

    ${desktop} {
      display: none;
    }
  }

  .large-city-svg {
    display: none;
    position: absolute;
    right: -9%;
    bottom: -10%;

    ${desktop} {
      display: block;
      width: 55%;
    }
  }

  .opportunity-main-content {
    ${desktop} {
      width: 50%;
    }
  }

  .opportunity__header {
    ${desktop} {
      font-size: 30px;
      font-weight: 700;
      position: relative;
      text-align: left;
      padding-left: 24px;
      overflow: hidden;
    }

    &::after {
      ${desktop} {
        content: attr(data-text);
        bottom: -2px;
        z-index: -1;
        margin-left: 7%;
        margin-right: 0;
      }
    }
  }

  .opportunity__text {
    text-align: center;
    line-height: 2;
    padding: 8px 24px;
    padding-bottom: 12px;

    ${desktop} {
      text-align: left;
      padding-left: 24px;
      padding-right: 0;
    }
  }

  .opportunity__list {
    padding: 0 24px;
    padding-top: 32px;
  }

  .opportunity__item {
    display: flex;
    padding-bottom: 24px;

    .opportunity__item-icon {
      border-radius: 9999px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(198, 128, 63, 0.2);
      height: 50px;
      width: 50px;

      img {
        height: 13px;
      }
    }

    .opportunity__item-content {
      padding-left: 24px;
    }

    .opportunity__item-title {
      color: ${defaultTheme.primaryColor};
      font-weight: 700;
      padding-bottom: 16px;
      font-size: 20px;
    }

    .opportunity__item-subtext {
      font-size: 14px;
      font-weight: 400;
      color: ${defaultTheme.textColor};
      line-height: 1.75rem;
    }
  }
`;

const SectionOpportunity = () => (
  <SectionOpportunityContainer id="opportunity">
    <div className="mobile-market">
      <div className="mobile-market__counter">
        <div className="mobile-market__inner">
          <p className="mobile-market__value">
            $<span id="count-up-box-market-value">350</span>B
          </p>
          <p className="mobile-market__title">ESTIMATED MARKET SIZE</p>
          <p className="mobile-market__title">2023</p>
        </div>
      </div>
      <div className="mobile-market__size">
        <div className="mobile-market-size__inner">
          <p className="mobile-market__value white">
            $<span id="count-up-box-market-size">100</span>B
          </p>{" "}
          <p className="mobile-market__title white no-padding">CURRENT MARKET SIZE</p>
        </div>
      </div>
    </div>
    <img src={opportunitySmallImage} className="mobile-city-svg" alt="" />
    <img src={opportunityLargeImage} className="large-city-svg" alt="" />
    <ContainerWrapper>
      <div className="opportunity-main-content">
        <h2
          data-text="The Opportunity"
          className="shadowed-title center-text opportunity__header"
        >
          The Opportunity
        </h2>
        <p className="opportunity__text">
          Worldwide research and advisory company Gartner assessed that with
          current platforms not yet ready for the imminent change, people
          starting to work independently will need platforms with functionality
          lacking in current solutions.
        </p>
        <ul className="opportunity__list">
          {staticData.opportunityData.map((opportunity, index) => (
            <li key={index} className="opportunity__item">
              <div>
                <div className="opportunity__item-icon">
                  <img src={opportunityIcon} alt="" />
                </div>
              </div>
              <div className="opportunity__item-content">
                <div className="opportunity__item-title">
                  {opportunity.title}
                </div>
                <div className="opportunity__item-subtext">
                  {opportunity.text}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ContainerWrapper>
  </SectionOpportunityContainer>
);

export default SectionOpportunity;
