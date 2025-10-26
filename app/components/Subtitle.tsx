"use client";
import styled from "styled-components";

// TODO: Add props for Subtitle
type SubtitleProps = {
  variant: string; // replace string with the actual variant option(s), e.g. "bold"
};

// TODO: implement Subtitle component
export default function Subtitle({}: SubtitleProps) {
  return <StyledSubtitle />;
}

const StyledSubtitle = styled.p`
  /* TODO: Add styles for Subtitle */
`;
