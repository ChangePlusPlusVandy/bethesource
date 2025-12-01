"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type H2Props = {
  text: string;
  color?: ColorType;
};

export default function H2({ text, color = "black" }: H2Props) {
  return <StyledH2 $color={color}>{text}</StyledH2>;
}

const StyledH2 = styled.h2<{ $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem; /* 125% */
`;
