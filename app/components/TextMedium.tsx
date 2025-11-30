"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type TextMediumProps = {
  text: string;
  color?: ColorType;
};

export default function TextMedium({ text, color = "black" }: TextMediumProps) {
  return <StyledTextMedium $color={color}>{text}</StyledTextMedium>;
}

const StyledTextMedium = styled.p<{ $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem; /* 150% */
`;
