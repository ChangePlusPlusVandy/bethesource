"use client";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import styled from "styled-components";

type NumberInputProps = {
  defaultValue?: number;
  disabled?: boolean;
  label?: string;
};

export default function NumberInput({
  defaultValue = 0,
  disabled = false,
  label,
}: NumberInputProps) {
  const [val, setVal] = useState<number>(defaultValue);

  // can change these for future purposes
  const step = 1;
  const min = 0;
  const max = 9;

  const handleIncrement = () => {
    setVal(Math.min(max, val + step));
  };

  const handleDecrement = () => {
    setVal(Math.max(min, val - step));
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target as HTMLInputElement;
    // if the field is empty
    if (Number.isNaN(input.valueAsNumber)) {
      setVal(min);
      return;
    }
    const update = Math.max(min, Math.min(max, input.valueAsNumber));
    setVal(update);
    input.value = String(update);
  };

  return (
    <NumberInputWrapper>
      <StyledNumberInput
        data-disabled={disabled || undefined}
        aria-label={label}
      >
        <StyledInput
          className="number-input-field"
          value={val}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="number"
          disabled={disabled}
        />

        <StyledNumberArrows>
          <ArrowButton
            $dir="up"
            className="number-input-up"
            type="button"
            aria-label="Increment"
            onClick={handleIncrement}
            disabled={disabled}
          >
            <MaterialIcon>arrow_drop_up</MaterialIcon>
          </ArrowButton>
          <ArrowButton
            $dir="down"
            className="number-input-down"
            type="button"
            aria-label="Decrement"
            onClick={handleDecrement}
            disabled={disabled}
          >
            <MaterialIcon>arrow_drop_down</MaterialIcon>
          </ArrowButton>
        </StyledNumberArrows>
      </StyledNumberInput>
    </NumberInputWrapper>
  );
}

const NumberInputWrapper = styled.div`
  --s: 1;

  @media (max-width: 768px) {
    --s: 0.75;
  }

  @media (max-width: 600px) {
    --s: 0.5;
  }

  @media (max-width: 360px) {
    --s: 0.3;
  }

  display: inline-block;
  transform: scale(var(--s));
  transform-origin: top left;

  width: calc(52px / var(--s));
  height: calc(36px / var(--s));
`;

const StyledNumberInput = styled.div`
  --border: #525252;
  --bg: #ffffff;
  --bg-hover: #f2f2f2;
  --bg-focus: #e9e9e9;
  --chevron: #525252;

  position: relative;
  width: 52px;
  height: 36px;

  display: grid;
  grid-template-columns: 1fr 20px;
  column-gap: 8px;

  border: 2px solid var(--border);
  border-radius: 4px;
  background: var(--bg);
  box-sizing: border-box;

  padding-left: 8px;
  padding-right: 2px;
  overflow: hidden;
  transition:
    background 120ms ease,
    border-color 120ms ease;

  &:focus-within {
    background: var(--bg-focus);
  }

  &[data-disabled="true"] {
    --border: #cfcfcf;
    --bg: #efefef;
    --chevron: #cfcfcf;
  }
`;

const StyledInput = styled.input`
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  text-align: left;

  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--Black, #000);

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:disabled {
    color: #9e9e9e;
  }
`;

const MaterialIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--chevron);
  user-select: none;
`;

const StyledNumberArrows = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 20px;
  height: 20px;
  align-self: center;
  position: relative;
`;

const ArrowButton = styled.button<{ $dir: "up" | "down" }>`
  position: absolute;
  left: 0;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: opacity 100ms ease;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ $dir }) =>
    $dir === "up"
      ? `
    top: 0;
    height: calc(50% - 2px);
  `
      : `
    bottom: 0;
    height: calc(50% - 2px);
  `}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
