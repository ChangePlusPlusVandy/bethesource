"use client";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";
import styled from "styled-components";

type NumberInputProps = {
  defaultValue?: number;
  onChange?: (value?: number) => void;
  update?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  label?: string;
};
export default function NumberInput({
  defaultValue = 0,
  onChange = () => {},
  update = 1,
  min = 0,
  max = 9,
  disabled = false,
  label,
}: NumberInputProps) {
  const [val, setVal] = useState(() =>
    Math.max(min, Math.min(max, defaultValue)),
  );
  const [cur, setCur] = useState<string | null>(null);

  const format = (value: string) => value.replace(/^(-?)0+(?=\d)/, "$1");

  // current existing value in input field
  const base = () => {
    if (cur === null || cur === "") return val;
    const num = Number(format(cur));
    return !Number.isNaN(num) ? num : val;
  };

  // update value
  const commit = useCallback(
    (next: number) => {
      if (next < min) next = min;
      else if (next > max) next = max;

      setVal((prev) => {
        if (prev !== next) onChange?.(next);
        return next;
      });
    },
    [min, max, onChange],
  );

  // value inc + dec handlers
  const handleIncrement = () => {
    commit(base() + update);
    setCur(null);
  };
  const handleDecrement = () => {
    commit(base() - update);
    setCur(null);
  };

  // keyboard handler
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "ArrowUp") {
      event.preventDefault();
      handleIncrement();
      return;
    }
    if (event.key == "ArrowDown") {
      event.preventDefault();
      handleDecrement();
      return;
    }
    if (event.key == "Enter") {
      event.preventDefault();
      const num = Number(format(cur ?? String(val)));

      if (!Number.isNaN(num)) commit(num);
      setCur(null);
      event.currentTarget.blur();
      return;
    }
    if (event.key == "Escape") {
      setCur(null);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let update = (event.target as HTMLInputElement).value;
    if (update === "") {
      setCur(update);
      return;
    }
    update = format(update);

    setCur(update);
  };

  // element focus
  const handleBlur = () => {
    if (cur === null || cur === "") {
      setCur(null);
      return;
    }
    const update = Number(format(cur));
    if (!Number.isNaN(update)) commit(update);

    setCur(null);
  };

  return (
    <NumberInputWrapper>
      <StyledNumberInput
        data-disabled={disabled || undefined}
        aria-label={label}
      >
        <StyledInput
          className="number-input-field"
          type="number"
          inputMode="numeric"
          min={Number.isFinite(min) ? min : undefined}
          max={Number.isFinite(max) ? max : undefined}
          step={update}
          value={cur ?? String(val)}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <StyledNumberArrows>
          <StyledVectorUp />
          <StyledVectorDown />

          <ArrowButton
            className="number-input-up"
            type="button"
            aria-label="Increment"
            onClick={handleIncrement}
            disabled={disabled || val >= max}
          />
          <ArrowButton
            className="number-input-down"
            type="button"
            aria-label="Decrement"
            onClick={handleDecrement}
            disabled={disabled || val <= min}
          />
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

const StyledNumberArrows = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 20px;
  height: 20px;
  align-self: center;
  position: relative;
`;

const StyledVectorUp = styled.div`
  position: absolute;
  left: 6.42px;
  top: 2.04px;
  width: 0;
  height: 0;
  border-left: 3.585px solid transparent;
  border-right: 3.585px solid transparent;
  border-bottom: 3.92px solid var(--chevron);
`;

const StyledVectorDown = styled.div`
  position: absolute;
  left: 6.42px;
  bottom: 2.04px;
  width: 0;
  height: 0;
  border-left: 3.585px solid transparent;
  border-right: 3.585px solid transparent;
  border-top: 3.92px solid var(--chevron);
`;

const ArrowButton = styled.button`
  position: absolute;
  left: 0;
  width: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: opacity 100ms ease;

  &.number-input-up {
    top: 0;
    height: calc(50% - 4.04px);
  }
  &.number-input-down {
    bottom: 0;
    height: calc(50% - 4.04px);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
