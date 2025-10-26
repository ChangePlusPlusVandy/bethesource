"use client";
import styled from "styled-components";

// TODO: Add props for TextInput
type TextInputProps = {
  propName: string; // replace string with actual prop type
};

// TODO: implement TextInput component
export default function TextInput({}: TextInputProps) {
  return (
    <div>
      <StyledInputLabel>
        <StyledTextInput />
      </StyledInputLabel>
    </div>
  );
}

const StyledTextInput = styled.input`
  /* TODO: Add styles for TextInput */
`;

const StyledInputLabel = styled.label`
  /* TODO: Add styles for InputLabel */
`;
