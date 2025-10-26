"use client";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

// TODO: Add props for SearchBarBar
type SearchBarProps = {
  propName: string; // replace string with actual prop type
};

// TODO: implement SearchBar component
export default function SearchBar({}: SearchBarProps) {
  return (
    <StyledSearchBar>
      <TextInput propName="search" />
      <Button propName="search" />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  /* TODO: Add styles for SearchBar */
`;
