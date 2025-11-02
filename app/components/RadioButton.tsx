"use client";
import styled from "styled-components";

// TODO: Add props for Radio
type RadioProps = {
  name: string; // Groups - Ensures one in the group can be selected
  value: string; // Value - The value this specific radio button represents
  checked?: boolean; // Checked -Whether the radio button is currently selected
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // OnChange - What happens when the radio button is selected
  label?: string; // Label - Optional text displayed next to the radio button
  id?: string; // Id - Optional unique identifier (helps with accessibility and linking labels)
};

// TODO: implement Radio component
export default function Radio({
  name,
  value,
  checked = false,
  onChange,
  label,
  id,
}: RadioProps) {
  return (
    <Label htmlFor={id}>
      <StyledRadio
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {label && <span>{label}</span>}{" "}
      {/* Optional text displayed next to the radio button, in span for separation in styling */}
    </Label>
  );
}

const StyledRadio = styled.input.attrs({ type: "radio" })`
  /* Base styles (applied to all states) */
  width: 22px;
  height: 22px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  border-radius: 50%;
  border: 1px solid var(--gray);
  background: var(--white);

  &:hover:not(:checked) {
    background: var(--light-gray);
    border-color: var(--gray);
  }

  &:checked:not(:hover) {
    border: 1px solid var(--orange);
    background: var(--white);

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--orange);
    }
  }

  &:hover:checked {
    border: 1px solid var(--light-orange);
    background: var(--white);

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--light-orange);
    }
  }
`;

// Figma Body 1 typography
const Label = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  span {
    color: #000;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
  }
`;
