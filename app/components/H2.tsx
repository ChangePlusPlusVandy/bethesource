"use client";
import styled from "styled-components";

type H2Props = {
  text: string;
};

export default function H2({ text }: H2Props) {
  return <StyledH2>{text}</StyledH2>;
}

const StyledH2 = styled.h2`
  font-size: 32px;
  line-height: 40px;
  font-weight: 600; /* Semibold */
`;
