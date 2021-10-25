import {
  ContainerWrapper,
  defaultTheme,
  desktop,
  largeDesktop,
  mobile,
  mobileLandscape,
  neutral,
  tablets,
} from "componenents/utils";
import styled from "styled-components";

const RoadmapContainer = styled.section`
  padding-top: 80px;
  position: relative;
  top: -1px;
  background-image: linear-gradient(90deg, #db4b2f, #ef8333);
  .roadmap-background {
    position: absolute;
    right: 0;
    left: 0;
    margin: 0 auto;
    opacity: 0.5;
    margin-bottom: 0;
    bottom: 0;
    height: calc(100% + 6rem);
    background-image: url(${"/images/roadmapbg.svg"});

    ${desktop} {
      height: calc(100% + 16rem);
    }
  }

  .roadmap__header {
    color: ${neutral[100]};
    text-align: center;
    margin-top: 0;

    &.shadowed-title:after {
      color: hsla(0, 0%, 100%, 0.051) !important;
    }
  }

  .roadmap__subtitle {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: ${defaultTheme.textColor};
    margin-bottom: 64px;
    line-height: 2;
  }

  .roadmap__social-link {
    text-decoration: none;
    color: ${neutral[100]};
    font-weight: 700;
    background: transparent;
  }

  .roadmap__illustration-desktop-wrapper {
    position: relative;

    ${desktop} {
      bottom: -1px;
    }

    ${largeDesktop} {
      bottom: -2px;
    }

    &::before {
      ${desktop} {
        content: "";
        position: absolute;
        height: 100%;
        width: calc((100vw - 984px) / 2 + 2px);
        left: calc((-100vw - -984px) / 2);
        top: -1px;
        border-bottom: 3px solid #ed7233;
        z-index: 10;
      }

      ${largeDesktop} {
        width: calc((100vw - 1176px) / 2 + 2px);
        left: calc((-100vw - -1176px) / 2);
        border-bottom: 4px solid #ed7233;
      }
    }

    &::after {
      ${desktop} {
        content: "";
        position: absolute;
        background: #fff;
        height: 100%;
        width: calc((100vw - 984px) / 2 + 2px);
        right: calc((-100vw - -984px) / 2);
        top: 0;
        border-top: 3px solid #e65c1f;
      }

      ${largeDesktop} {
        width: calc((100vw - 1176px) / 2 + 2px);
        right: calc((-100vw - -1176px) / 2);
        border-top: 4px solid #e65c1f;
      }
    }
  }

  .roadmap-curve-desktop {
    display: none;
    position: relative;

    ${desktop} {
      display: block;
      visibility: visible;
    }
  }

  .roadmap-content {
    display: flex;
    padding-bottom: 16px;
    margin-left: -1.25rem;
    padding-left: 1.25rem;
    min-width: 100vw;
    overflow: scroll;
    z-index: 10;

    ${mobile} {
      margin-left: calc((480px - 100vw) / 2 - 1.25rem);
      padding-left: calc((100vw - 480px) / 2 + 1.25rem);
    }

    ${mobileLandscape} {
      margin-left: calc((576px - 100vw) / 2 - 1.25rem);
      padding-left: calc((100vw - 576px) / 2 + 1.25rem);
    }

    ${tablets} {
      margin-left: calc((768px - 100vw) / 2 - 1.25rem);
      padding-left: calc((100vw - 768px) / 2 + 1.25rem);
    }

    ${desktop} {
      min-width: auto;
      padding: 0;
      margin: 0;
      overflow: visible;
      justify-content: space-between;
      height: 100%;
      position: absolute;
      width: 100%;
    }
  }

  .roadmap-point {
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 10%);
    position: relative;
    width: 24px;
    height: 24px;
    border: 6px solid #fff;
    border-radius: 100000px;
    background: #f37229;

    ${desktop} {
      margin-left: auto;
      margin-right: auto;
      margin-top: 45px;
    }

    &.not-active {
      background-color: ${defaultTheme.textColor};
    }
  }

  .roadmap-milestone {
    white-space: nowrap;
    color: ${neutral[100]};
    text-transform: uppercase;
    position: relative;
    margin-right: 32px;

    ${desktop} {
      text-align: center;
      margin-right: 0;
    }

    &:first-child {
      ${desktop} {
        top: 47%;
      }

      ${largeDesktop} {
        top: 56%;
      }
    }

    &:nth-child(2) {
      ${desktop} {
        top: 23%;
      }

      ${largeDesktop} {
        top: 30.5%;
      }
    }

    &:nth-child(3) {
      ${desktop} {
        top: -14%;
      }

      ${largeDesktop} {
        top: -6%;
      }
    }

    &:nth-child(4) {
      ${desktop} {
        top: -11%;
      }

      ${largeDesktop} {
        top: -5%;
      }
    }

    &:nth-child(5) {
      ${desktop} {
        top: -42%;
      }

      ${largeDesktop} {
        top: -37%;
      }
    }

    .roadmap-point {
      display: none;
      ${desktop} {
        display: block;
      }
    }

    h4 {
      letter-spacing: 0.05em;
      font-size: 14px;
      margin-bottom: 24px;
      opacity: 0.8;
      color: inherit;
    }

    span {
      font-weight: 300;
    }
  }

  .roadmap-illustration-mobile-wrapper {
    position: relative;
    bottom: -10px;

    ${desktop} {
      display: none;
    }
  }

  .roadmap-illustration-mobile {
    height: 160px;
    width: 100%;

    ${mobileLandscape} {
      max-height: 190px;
    }

    ${tablets} {
      max-height: 224px;
    }

    .roadmap-point {
      &:first-child {
        top: 83%;
        left: 13%;
      }

      &:nth-child(2) {
        top: 54%;
        left: 15%;
      }

      &:nth-child(3) {
        top: 22%;
        left: 11%;
      }

      &:nth-child(4) {
        top: 1%;
        left: 4%;
      }

      &:nth-child(5) {
        top: -5%;
        left: -1%;
      }
    }
  }

  .roadmap-mobile-content {
    position: absolute;
    display: flex;
    justify-content: space-around;
  }
`;

const RoadMapWrapper = styled(ContainerWrapper)`
  padding: 0 20px;
  position: relative;
  text-align: center;
`;

const SectionRoadmap = () => {
  return (
    <RoadmapContainer>
      <div className="roadmap-background"></div>
      <RoadMapWrapper>
        <h2 data-text="Roadmap" className="roadmap__header shadowed-title">
          Roadmap
        </h2>
        <h3 className="roadmap__subtitle">
          <a
            href="https://twitter.com/hashtag/build"
            target="_blank"
            className="roadmap__social-link"
            rel="noreferrer"
          >
            We are here to #build
          </a>
        </h3>
        <div className="roadmap__illustration-desktop-wrapper">
          <div className="roadmap-content">
            <div className="roadmap-milestone">
              <h4>Initial Idea &amp; WP v0.1</h4> <span>Q1 2018</span>
              <div className="roadmap-point"></div>
            </div>
            <div className="roadmap-milestone">
              <h4>Architecture Design</h4> <span>Q2 2019</span>
              <div className="roadmap-point"></div>
            </div>
            <div className="roadmap-milestone">
              <h4>Audit</h4> <span>Q2 2021</span>
              <div className="roadmap-point"></div>
            </div>
            <div className="roadmap-milestone">
              <h4>HYVE Launchpad</h4> <span>Q3 2021</span>
              <div className="roadmap-point not-active"></div>
            </div>
            <div className="roadmap-milestone">
              <h4>Mainnet</h4> <span>Q3 2021</span>
              <div className="roadmap-point not-active"></div>
            </div>
          </div>
          <img
            src="/images/roadmapcurve.svg"
            alt=""
            className="roadmap-curve-desktop"
          />
        </div>
      </RoadMapWrapper>
      <div className="roadmap-illustration-mobile-wrapper">
        <div className="roadmap-illustration-mobile roadmap-mobile-content">
          <div className="roadmap-point"></div>
          <div className="roadmap-point"></div>
          <div className="roadmap-point"></div>
          <div className="roadmap-point not-active"></div>
          <div className="roadmap-point not-active"></div>
        </div>
        <img
          src="/images/roadmapmobilecurve.svg"
          alt=""
          className="block roadmap-illustration-mobile"
        />
      </div>
    </RoadmapContainer>
  );
};

export default SectionRoadmap;
