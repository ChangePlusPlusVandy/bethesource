"use client";
import styled from "styled-components";

// TODO: Add props for Toggle
type ToggleProps = {
  propName: string; // replace string with actual prop type
};

// TODO: implement Toggle component
export default function Toggle({}: ToggleProps) {
  return <StyledToggle />;
}

const StyledToggle = styled.input.attrs({ type: "checkbox" })`
  /* TODO: Add styles for Toggle */
`;
