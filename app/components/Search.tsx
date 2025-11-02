"use client";
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import TextInput from "./TextInput";

export type SearchProps = {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  onChange?: (value: string) => void;
  buttonLabel?: string;
  icon?: React.ReactNode;
  initialValue?: string;
};

/**
 * Search component that combines TextInput and Button for search functionality.
 * This component can be extended to handle searching based on metrics and database integration.
 */
export default function Search({
  placeholder = "Search...",
  onSearch,
  onChange,
  buttonLabel = "Search",
  icon,
  initialValue = "",
}: SearchProps) {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  const handleInputChange = (value: string) => {
    setSearchTerm(value);
    onChange?.(value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <StyledSearchContainer>
      <StyledTextInputWrapper>
        <TextInput
          propName={placeholder}
          value={searchTerm}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(event.target.value)
          }
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
        />
      </StyledTextInputWrapper>
      <StyledButtonWrapper>
        <Button label={buttonLabel} onClick={handleSearch} icon={icon} />
      </StyledButtonWrapper>
    </StyledSearchContainer>
  );
}

const StyledSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

const StyledTextInputWrapper = styled.div`
  flex: 1;
`;

const StyledButtonWrapper = styled.div`
  flex-shrink: 0;
`;
