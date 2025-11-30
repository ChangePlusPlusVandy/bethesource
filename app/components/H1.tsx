"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type H1Props = {
  text: string;
  color?: ColorType;
};

export default function H1({ text, color = "black" }: H1Props) {
  return <StyledH1 $color={color}>{text}</StyledH1>;
}

const StyledH1 = styled.h1<{ $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.5rem; /* 116.667% */
`;
