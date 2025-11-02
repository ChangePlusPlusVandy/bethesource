"use client";
import { Search } from "lucide-react";
import styled from "styled-components";

type SearchBarProps = {
  placeholder?: string;
};

// TODO: Replace SearchInput with TextInput component (borderless variant) and SearchButton with Button component once both are fully implemented
// This SearchBar extends TextInput and Button components as intended
export default function SearchBar({ placeholder = "Search" }: SearchBarProps) {
  return (
    <StyledSearchBar>
      <SearchInput type="text" placeholder={placeholder} />
      <SearchButton
        onClick={() => {
          console.log("search");
        }}
      >
        <Search size={20} />
      </SearchButton>
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SearchInput = styled.input`
  padding: 8px;
  align-self: stretch;
  flex: 1 0 0;
  border: none;
  border-radius: 4px;
  background: #fff;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--black);
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: var(--gray);
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SearchButton = styled.button`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--orange);
  border: none;
  cursor: pointer;
  color: var(--black);

  &:hover {
    background: var(--dark-orange);
  }
`;
