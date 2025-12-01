"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type H3Props = {
  text: string;
  color?: ColorType;
};

export default function H3({ text, color = "black" }: H3Props) {
  return <StyledH3 $color={color}>{text}</StyledH3>;
}

const StyledH3 = styled.h3<{ $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2rem; /* 133.333% */
`;
