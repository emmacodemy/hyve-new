import styled from "styled-components";
import { desktop, mobile, mobileLandscape, tablets } from "./mediaquery";

export const ContainerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  ${mobile} {
    max-width: 480px;
  }

  ${mobileLandscape} {
    max-width: 576px;
  }

  ${tablets} {
    max-width: 768px;
  }

  ${desktop} {
    max-width: 1024px;
  }
`;

export const HeroSectionWrapper = styled(ContainerWrapper)`
  ${desktop} {
    max-width: 98%;
  }
`;
