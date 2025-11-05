"use client";
import styled from "styled-components";

type SubtitleProps = {
  text: string;
  bold?: boolean;
};

export default function Subtitle({ text, bold = false }: SubtitleProps) {
  return <StyledSubtitle bold={bold}>{text}</StyledSubtitle>;
}

const StyledSubtitle = styled.p<{ bold: boolean }>`
  font-size: 12px;
  line-height: 16px;

  font-weight: ${({ bold }) => (bold ? "600" : "400")};
`;
