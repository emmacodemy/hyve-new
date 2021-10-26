import styled, { keyframes } from "styled-components";
import { FaSpinner } from "react-icons/fa";

const spin = keyframes`
from {
  transform: rotate(0deg); 
}

to {
  transform: rotate(360deg);
}
`;

export const Spinner = styled(FaSpinner)`
  animation: ${spin} 1s linear infinite;
  font-size: 18px;
  margin-left: 10px;
`;

Spinner.defaultProps = {
  "aria-label": "loading",
};
