"use client";
import styled from "styled-components";

// TODO: Add props for Radio
type RadioProps = {
  propName: string; // replace string with actual prop type
};

// TODO: implement Radio component
export default function Radio({}: RadioProps) {
  return <StyledRadio />;
}

const StyledRadio = styled.input.attrs({ type: "radio" })`
  /* TODO: Add styles for Radio */
`;
