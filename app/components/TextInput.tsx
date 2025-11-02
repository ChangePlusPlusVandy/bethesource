"use client";
import styled from "styled-components";

type TextInputProps = {
  propName: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
};

export default function TextInput({
  propName,
  value,
  onChange,
  onKeyPress,
  placeholder,
  type = "text",
  disabled = false,
  label,
}: TextInputProps) {
  return (
    <div>
      <StyledInputLabel>
        {label && <span>{label}</span>}
        <StyledTextInput
          name={propName}
          value={value}
          onChange={onChange}
          onKeyPress={onKeyPress}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
        />
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
