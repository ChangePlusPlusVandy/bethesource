"use client";
import styled from "styled-components";

// TODO: Add props for Checkbox
type CheckboxProps = {
  propName: string; // replace string with actual prop type
};

// TODO: implement Checkbox component
export default function Checkbox({}: CheckboxProps) {
  return <StyledCheckbox />;
}

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  /* TODO: Add styles for Checkbox */
`;
