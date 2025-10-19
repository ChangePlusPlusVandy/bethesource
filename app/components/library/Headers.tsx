"use client";
import styled from "styled-components";

type TitleProps = {
  text: string;
  textcolor: TextColorType;
};

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

export function Title({ text, textcolor }: TitleProps) {
  return <StyledTitle textcolor={textcolor}>{text}</StyledTitle>;
}

const StyledTitle = styled.h2<{ textcolor: string }>`
  color: ${(props) => props.textcolor};
  font-weight: bold;
  font-size: clamp(1.25rem, 1.8vw, 2rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;
