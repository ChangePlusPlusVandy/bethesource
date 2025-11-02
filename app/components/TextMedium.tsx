"use client";
import styled from "styled-components";

type TextMediumProps = {
  text: string;
};

export default function TextMedium({ text }: TextMediumProps) {
  return <StyledTextMedium>{text}</StyledTextMedium>;
}

const StyledTextMedium = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
`;
