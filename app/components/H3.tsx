"use client";
import styled from "styled-components";

type H3Props = {
  text: string;
};

export default function H3({ text }: H3Props) {
  return <StyledH3>{text}</StyledH3>;
}

const StyledH3 = styled.h3`
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
`;
