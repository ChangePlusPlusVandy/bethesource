"use client";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

type TextInputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

export default function TextInput({
  label,
  placeholder,
  value,
  setValue,
}: TextInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value);
    }
  };

  return (
    <StyledInputContainer>
      {label && <StyledInputLabel>{label}</StyledInputLabel>}
      <StyledTextInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </StyledInputContainer>
  );
}

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  gap: 4px;
`;

const StyledInputLabel = styled.label`
  font-family: Inter, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  color: var(--black);
`;

const StyledTextInput = styled.input`
  display: flex;
  padding: 8px;
  align-items: center;
  align-self: stretch;
  flex: 1 0 0;
  border-radius: 4px;
  border: 2px solid var(--dark-gray);
  background: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: var(--gray);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
