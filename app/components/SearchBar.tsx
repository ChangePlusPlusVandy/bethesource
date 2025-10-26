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
      <Button
        label="search"
        onClick={() => {
          console.log("search");
        }}
      />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  /* TODO: Add styles for SearchBar */
`;
