"use client";
import styled from "styled-components";

type ButtonVariant = "primary" | "outline" | "ghost";

// TODO: Add props for Button
type ButtonProps = {
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  label: string;
  onClick: () => void;
};

// TODO: implement Button component
export default function Button({
  icon,
  variant = "primary",
  label,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {icon}
      {label}
    </StyledButton>
  );
}

// TODO: Add styles for Button
const variantColors = {
  primary: "var(--orange)",
  outline: "var(--white)", // update to correct color
  ghost: "var(--black)", // update to correct color
};

const StyledButton = styled.button<{
  variant?: ButtonVariant;
}>`
  background-color: ${(props) => variantColors[props.variant as ButtonVariant]};
  color: ${(props) => variantColors[props.variant as ButtonVariant]};
`;
