"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type TextRegularProps = {
  text: string;
  color?: ColorType;
};

export default function TextRegular({
  text,
  color = "black",
}: TextRegularProps) {
  return <StyledTextRegular $color={color}>{text}</StyledTextRegular>;
}

const StyledTextRegular = styled.p<{ $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 142.857% */
`;
