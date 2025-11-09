"use client";
import styled from "styled-components";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
};

export default function Checkbox({
  label = "Text",
  checked = false,
  onChange,
  disabled = false,
  className,
}: CheckboxProps) {
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(ev.target.checked);
    }
  };

  return (
    <CheckboxContainer className={className}>
      <HiddenCheckbox
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <StyledCheckbox checked={checked}>
        {checked && <MaterialIcon>check</MaterialIcon>}
      </StyledCheckbox>
      <Label>{label}</Label>
    </CheckboxContainer>
  );
}

const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  user-select: none;
  opacity: 1;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 2px;

  /* Unchecked - Initial state */
  background-color: ${(props) =>
    props.checked ? "var(--orange)" : "var(--white)"};
  border: 1px solid
    ${(props) => (props.checked ? "var(--orange)" : "var(--gray)")};

  /* Hover state */
  ${CheckboxContainer}:hover & {
    background-color: ${(props) =>
      props.checked ? "var(--light-orange)" : "var(--light-gray)"};
    border-color: ${(props) =>
      props.checked ? "var(--light-orange)" : "var(--gray)"};
  }
`;

const Label = styled.span`
  font-size: 14px;
  line-height: 1.5;
  color: var(--black);
`;

const MaterialIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 16px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
