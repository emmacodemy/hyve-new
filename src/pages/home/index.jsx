import styled from "styled-components";
import backgroundMobile from "../../assests/images/backgroundmobile.svg";
import background from "../../assests/images/backgroundlarge.svg";

import { desktop, neutral, tablets } from "componenents/utils";
import Hero from "./section-hero/Hero";
import MediaSection from "./sectionmedia/SectionMedia";
import Footer from "componenents/Footer";
import AboutSection from "./section-about/SectionAbout";
import SectionOpportunity from "./section-opportunity/SectionOpportunity";
import SectionTeams from "./section-team/SectionTeam";
import SectionRoadmap from "./section-roadmap/SectionRoadMap";

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

`;

const Home = () => {
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
      <Footer />
    </MainWrapper>
  );
};

export default Home;
