"use client";
import styled from "styled-components";

type ToggleProps = {
  value: boolean;
  setValue: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
};

export default function Toggle({
  value,
  setValue,
  label,
  disabled = false,
}: ToggleProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.checked);
  };

  return (
    <ToggleWrapper>
      <StyledToggle
        checked={value}
        onChange={handleChange}
        disabled={disabled}
      />
      <ToggleSlider />
      {label && <ToggleLabel>{label}</ToggleLabel>}
    </ToggleWrapper>
  );
}

const ToggleWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const ToggleSlider = styled.span`
  position: relative;
  width: 40px;
  height: 20px;
  background-color: var(--gray);
  border-radius: 100px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  padding: 0 2px;

  &::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--white);
    transition: transform 0.3s ease;
    left: 2px;
  }
`;

const StyledToggle = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  cursor: pointer;

  /* Off - Initial state */
  ~ ${ToggleSlider} {
    background-color: var(--gray);
  }

  /* Off - Hover state */
  &:not(:checked):hover ~ ${ToggleSlider} {
    background-color: var(--dark-gray);
  }

  /* On - Initial state */
  &:checked ~ ${ToggleSlider} {
    background-color: var(--orange);
  }

  /* On - Hover state */
  &:checked:hover ~ ${ToggleSlider} {
    background-color: var(--light-orange);
  }

  /* Move the ball when checked */
  &:checked ~ ${ToggleSlider}::before {
    transform: translateX(21px);
  }

  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }

  &:disabled ~ ${ToggleSlider} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ToggleLabel = styled.span`
  font-size: 14px;
  color: var(--foreground);
`;
