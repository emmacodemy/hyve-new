import styled from "styled-components";
import backgroundMobile from "../../assests/images/backgroundmobile.svg";
import background from "../../assests/images/backgroundlarge.svg";

import { desktop, mobile, neutral, tablets } from "componenents/utils";
import Hero from "./Hero";
import MediaSection from "./SectionMedia";
import Footer from "componenents/Footer";
import AboutSection from "./SectionAbout";
import SectionOpportunity from "./SectionOpportunity";
import { useInView } from "react-intersection-observer";
import SectionTeams from "./SectionTeam";
import SectionRoadmap from "./SectionRoadMap";

const MainWrapper = styled.main`
  overflow: hidden;
`;

const MainContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  background-color: ${neutral[100]};
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

  .footer-spacing {
    height: 580px;
    background-image: linear-gradient(90deg, #1f3d53, #2f5572);
    ${mobile} {
      height: 585px;
    }
  }
`;

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <MainWrapper>
      <MainContentWrapper>
        <Hero />
        <MediaSection />
        <AboutSection />
        <SectionOpportunity />
        <SectionTeams />
        <SectionRoadmap />
      </MainContentWrapper>
      <div ref={ref} className="footer-spacing"></div>
      <Footer inView={inView} />
    </MainWrapper>
  );
};

export default Home;
