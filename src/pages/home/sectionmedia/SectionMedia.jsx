import styled from "styled-components";
import {
  ContainerWrapper,
  desktop,
  largeDesktop,
  defaultTheme,
  mobile,
  mobileLandscape,
} from "../../../componenents/utils";

import yahooLogo from "../../../assests/images/yahoofinance.png";
import hackernoonLogo from "../../../assests/images/hackernoon.png";
import coinLogo from "../../../assests/images/cointelegraph.png";

const MediaSectionContainer = styled(ContainerWrapper)`
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  padding-top: 24px;
  margin-top: 24px;
  position: relative;
  z-index: 10;

  ${desktop} {
    width: 80%;
    padding-top: 80px;
    margin-bottom: 128px;
  }

  ${largeDesktop} {
    width: 60%;
  }

  &::before {
    position: absolute;
    content: "";
    transform: translateX(-50%);
    top: 0;
    left: 50%;
    width: 100px;
    height: 2px;
    background-color: ${defaultTheme.primaryColor};
    margin-bottom: 30px;
  }
`;

const MediaQuote = styled.p`
  display: flex;
  font-size: 18px;
  color: ${defaultTheme.textColorBrand};
  text-align: center;
  align-items: center;
  min-height: 9em;

  ${mobileLandscape} {
    min-height: 6em;
  }
`;

const MediaQuoteLinkContainer = styled.div`
  text-align: center;
  padding: 16px 0;
  padding-right: 12px;
  font-weight: 600;
  min-height: 6.5em;

  ${mobile} {
    min-height: auto;
  }
`;

const MediaQuoteLink = styled.a`
  text-decoration: none;
  background-color: transparent;
  color: ${defaultTheme.textColor};
`;

const MediaLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;

  ${mobile} {
    padding-top: 32px;
  }

  div {
    padding: 0 16px;
  }
`;

const MediaLogo = styled.img`
  width: 100%;
  opacity: 0.5;
  filter: grayscale(100%);
  transition: all 0.3s ease-in-out 0s;
  border: none;
  cursor: pointer;
`;

const MediaSection = () => (
  <MediaSectionContainer>
    <div>
      <MediaQuote>
        "...HYVE enables borderless global collaboration between any two humans
        or any two machines. HYVE’s open infrastructure can power any sort of
        marketplace or service platform to exist."
      </MediaQuote>
      <MediaQuoteLinkContainer>
        <MediaQuoteLink
          target="_blank"
          href="https://hackernoon.com/cryptocurrency-bounty-campaigns-are-changing-marketing-and-the-way-we-work-3d5362ac6802"
        >
          Bounty Campaigns Are Changing Marketing &amp; The Way We Work —
          Hackernoon
        </MediaQuoteLink>
      </MediaQuoteLinkContainer>
      <MediaLogoContainer>
        <div>
          <MediaLogo src={yahooLogo} />
        </div>
        <div>
          <MediaLogo src={hackernoonLogo} />
        </div>
        <div>
          <MediaLogo src={coinLogo} />
        </div>
      </MediaLogoContainer>
    </div>
  </MediaSectionContainer>
);

export default MediaSection;
