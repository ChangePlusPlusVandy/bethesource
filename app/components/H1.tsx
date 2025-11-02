"use client";
import styled from "styled-components";

type TextColorType =
  | "white"
  | "black"
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow"
  | "purple"
  | "orange"
  | "pink"
  | "brown"
  | "gray"
  | "black"
  | "white";

type H1Props = {
  text: string;
  textcolor: TextColorType;
};

export default function H1({ text, textcolor }: H1Props) {
  return <StyledH1 textcolor={textcolor}>{text}</StyledH1>;
}

const StyledH1 = styled.h1<{ textcolor: TextColorType }>`
  ${({ textcolor }) => textcolor};
`;
