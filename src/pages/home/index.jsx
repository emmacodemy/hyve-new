import styled from "styled-components";
import backgroundMobile from "../../assests/images/backgroundmobile.svg";
import background from "../../assests/images/backgroundlarge.svg";

import { desktop, mobile, tablets } from "componenents/utils";
import Hero from "./Hero";
import MediaSection from "./SectionMedia";
import Footer from "componenents/Footer";
import AboutSection from "./SectionAbout";
import SectionOpportunity from "./SectionOpportunity";

const MainWrapper = styled.main`
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-image: url(${backgroundMobile});
  background-size: 108%;
  min-height: 100vh;

  ${desktop} {
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-image: url(${background});
    background-size: 62%;
  }
  ${tablets} {
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-image: url(${background});
  }

  .footer-fixed {
    z-index: 10;
  }

  .footer-spacing {
    height: 580px;
    ${mobile} {
      height: 585px;
    }
  }
`;

const Home = () => (
  <MainWrapper>
    <div className="footer-fixed">
      <Hero />
      <MediaSection />
      <AboutSection />
      <SectionOpportunity />
    </div>
    <div className="footer-spacing"></div>
    <Footer />
  </MainWrapper>
);

export default Home;
