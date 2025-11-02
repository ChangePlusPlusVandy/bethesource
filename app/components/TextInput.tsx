"use client";
import styled from "styled-components";

type TextInputProps = {
  label?: string;
  placeholder?: string;
};

export default function TextInput({ label, placeholder }: TextInputProps) {
  return (
    <StyledInputContainer>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledTextInput type="text" placeholder={placeholder} />
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

const StyledInputLabel = styled.label`
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: var(--black);
  margin-bottom: 8px;
`;

const StyledTextInput = styled.input`
  padding: 12px 16px;
  align-self: stretch;
  border-radius: 4px;
  border: 2px solid var(--dark-gray);
  background: #fff;
  font-family: Inter, sans-serif;
  font-size: 16px;
  color: var(--black);
  outline: none;

  &::placeholder {
    color: var(--dark-gray);
  }
`;
