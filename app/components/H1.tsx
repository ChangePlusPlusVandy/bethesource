"use client";
import styled from "styled-components";

// TODO: fix compatability with color/design scheme
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

// TODO: implement H1 component
export default function H1({ text, textcolor }: H1Props) {
  return <StyledH1 />;
}

const StyledH1 = styled.h1`
  /* TODO: Add styles for H1 */
`;
