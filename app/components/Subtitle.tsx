"use client";
import styled from "styled-components";
import { ColorType } from "../types/colors";

type SubtitleProps = {
  text: string;
  bold?: boolean;
  color?: ColorType;
};

export default function Subtitle({
  text,
  bold = false,
  color = "black",
}: SubtitleProps) {
  return (
    <StyledSubtitle bold={bold} $color={color}>
      {text}
    </StyledSubtitle>
  );
}

const StyledSubtitle = styled.p<{ bold: boolean; $color: ColorType }>`
  color: var(--${({ $color }) => $color});
  font-family: Inter;
  font-size: 0.625rem;
  font-style: normal;
  line-height: 1rem; /* 160% */

  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;
