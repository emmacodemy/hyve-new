import { PrimaryButton } from "componenents/Buttons";
import FormInput from "componenents/FormInput";
import Navbar from "componenents/Navbar";
import {
  desktop,
  HeroSectionWrapper,
  tablets,
  typeScale,
} from "componenents/utils";
import { useState } from "react";
import styled from "styled-components";

const HeroContentContainer = styled.div`
  background: transparent;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 89vw;
  margin-left: 0;
  margin-right: 0;

  ${tablets} {
    margin-left: 30px;
    background: transparent;
  }

  ${desktop} {
    width: 50%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 120px;
    background: transparent;
    padding-left: 30px;
    margin-left: 0;
    margin-right: 0;
  }

  .hero-mission {
    line-height: 1.5;
    padding-top: 8px;

    ${tablets} {
      width: 80%;
      font-size: ${typeScale.header3};
    }
  }

  .hero-about {
    font-weight: 600;
    padding-top: 24px;
    padding-right: 12px;

    ${tablets} {
      font-size: ${typeScale.header3};
    }
  }
`;

const HeroFormContainer = styled.div`
  padding: 20px 0;
`;

const HeroForm = styled.form`
  text-align: center;
  ${tablets} {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    .form-button {
      ${desktop} {
        margin-left: 12px;
      }

      ${tablets} {
        margin-left: 24px;
      }
    }
  }
`;

const Hero = () => {
  const [mnemonic, setMnemonic] = useState("");
  return (
    <HeroSectionWrapper>
      <Navbar />
      <HeroContentContainer>
        <h1>Hiring is broken.</h1>
        <p className="hero-mission">
          We're not touching that with a 10 foot pole, we're building it from
          scratch.
        </p>
        <p className="hero-about">
          HYVE — a DeFi centric autonomous ecosystem built on top of the multi
          billion workforce industry.
        </p>
        <HeroFormContainer>
          <HeroForm>
            <FormInput
              name="email"
              type="text"
              placeholder="YOUR MNEMONIC"
              value={mnemonic}
              handleChange={(e) => setMnemonic(e.target.value)}
            />
            <div className="form-button">
              <PrimaryButton modifiers="responsive">
                import wallet
              </PrimaryButton>
            </div>
          </HeroForm>
        </HeroFormContainer>
      </HeroContentContainer>
    </HeroSectionWrapper>
  );
};

export default Hero;
