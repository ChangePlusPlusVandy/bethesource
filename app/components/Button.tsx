"use client";
import styled from "styled-components";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  icon1?: React.ReactNode;
  icon2?: React.ReactNode;
  variant?: ButtonVariant;
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export default function Button({
  icon1,
  icon2,
  variant = "primary",
  label,
  disabled = false,
  onClick,
}: ButtonProps) {
  return (
    <StyledButton variant={variant} disabled={disabled} onClick={onClick}>
      {icon1 && <IconWrapper>{icon1}</IconWrapper>}
      <Label>{label}</Label>
      {icon2 && <IconWrapper>{icon2}</IconWrapper>}
    </StyledButton>
  );
}

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--Scaling-L, 20px);
  height: 20px;
  aspect-ratio: 1/1;
  flex-shrink: 0;
`;

const Label = styled.span`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-align: center;
`;

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

const StyledButton = styled.button<{
  variant?: ButtonVariant;
  disabled: boolean;
}>`
  // button layout
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
    const v = buttonVariants[variant];

    var styles = "";

    if (!disabled) {
      styles = `
      background-color: ${v.background};
      color: ${v.color};
      border-color: ${v.border};

      &:hover:not(:disabled) {
        background-color: ${v.hoverBG};
      }

      &:active:not(:disabled) {
        background-color: ${v.pressedBG};
      }
      `;
    } else {
      styles = `
      &:disabled {
        background-color: ${v.disabledBG};
        color: ${v.disabledColor};
        border-color: ${v.disabledBorder};
        cursor: not-allowed;
      }
      `;
    }

    return `
      ${styles}
    `;
  }}
`;
