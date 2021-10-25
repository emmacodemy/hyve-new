import { defaultTheme, neutral } from "componenents/utils";
import styled from "styled-components";

const FormInputWithStyles = styled.input`
  display: block;
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
  <FormInputWithStyles onChange={handleChange} {...otherProps} required />
);

export default FormInput;
