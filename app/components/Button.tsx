"use client";
import Link from "next/link";
import styled from "styled-components";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  variant?: ButtonVariant;
  label: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Button({
  icon1,
  icon2,
  variant = "primary",
  label,
  href,
  disabled = false,
  onClick,
}: ButtonProps) {
  const button = (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {icon1 && <IconWrapper>{icon1}</IconWrapper>}
      <Label>{label}</Label>
      {icon2 && <IconWrapper>{icon2}</IconWrapper>}
    </StyledButton>
  );

  if (href && !disabled) {
    return <Link href={href}>{button}</Link>;
  }

  return button;
}

const buttonVariants = {
  primary: {
    background: "var(--orange)",
    color: "var(--black)",
    border: "transparent",
    hoverBG: "var(--light-orange)",
    pressedBG: "var(--dark-orange)",
    disabledBG: "var(--light-gray)",
    disabledColor: "var(--gray)",
    disabledBorder: "transparent",
  },
  outline: {
    background: "transparent",
    color: "var(--orange)",
    border: "var(--orange)",
    hoverBG: "rgba(247, 149, 24, 0.25)",
    pressedBG: "rgba(247, 149, 24, 0.50)",
    disabledBG: "rgba(233, 233, 233, 0.50)",
    disabledColor: "var(--gray)",
    disabledBorder: "var(--gray)",
  },
  ghost: {
    background: "transparent",
    color: "var(--orange)",
    border: "transparent",
    hoverBG: "rgba(82, 82, 82, 0.10)",
    pressedBG: "rgba(82, 82, 82, 0.20)",
    disabledBG: "transparent",
    disabledColor: "var(--gray)",
    disabledBorder: "transparent",
  },
};

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--Scaling-L, 20px);
  height: 20px;
  aspect-ratio: 1/1;
  flex-shrink: 0;

  /* Scale SVG icons to fill the container */
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Label = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-align: center;
`;

const StyledButton = styled.button<{
  variant?: ButtonVariant;
  disabled: boolean;
}>`
  /* button layout */
  display: inline-flex;
  padding: var(--Scaling-XS, 8px) var(--Scaling-M, 16px);
  justify-content: center;
  align-items: center;
  gap: var(--Scaling-XS, 8px);
  cursor: pointer;
  border: 2px solid;
  border-radius: 8px;
  transition: all 0.2s ease;

  ${({ variant = "primary", disabled = false }) => {
    const varType = buttonVariants[variant];

    return `
      background-color: ${disabled ? varType.disabledBG : varType.background};
      color: ${disabled ? varType.disabledColor : varType.color};
      border-color: ${disabled ? varType.disabledBorder : varType.border};

      ${
        disabled
          ? `
        cursor: not-allowed;
      `
          : `
        &:hover {
          background-color: ${varType.hoverBG};
        }

        &:active {
          background-color: ${varType.pressedBG};
        }
      `
      }
    `;
  }}
`;
