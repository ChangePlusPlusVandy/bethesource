"use client";
import styled from "styled-components";

type TextRegularProps = {
  text: string;
};

export default function TextRegular({ text }: TextRegularProps) {
  return <StyledTextRegular>{text}</StyledTextRegular>;
}

const StyledTextRegular = styled.p`
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`;
