import { defaultTheme, neutral, tablets } from "componenents/utils";
import styled from "styled-components";

const FormGroupContainer = styled.div`
  border-radius: 8px;
  border-width: 2px;
  margin-bottom: 24px;

  ${tablets} {
    width: 60%;
  }
`;

const FormInputWithStyles = styled.input`
  width: 100%;
  padding: 16px;
  font-family: ${defaultTheme.primaryFont};
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  border: 2px solid ${neutral[200]};
  letter-spacing: 3px;

  &:focus,
  &:active {
    outline: none;
  }
`;

const FormInput = ({ handleChange, ...otherProps }) => (
  <FormGroupContainer>
    <FormInputWithStyles onChange={handleChange} {...otherProps} required />
  </FormGroupContainer>
);

export default FormInput;
