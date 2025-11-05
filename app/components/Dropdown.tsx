"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styled, { css } from "styled-components";

type MenuItem = {
  label: string;
};

type DropdownProps = {
  buttonLabel: string;
  menuItems: MenuItem[];
  onChange?: (index: number, label: string) => void;
};

export default function Dropdown({
  buttonLabel,
  menuItems,
  onChange,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);

  // default selection: buttonLabel match -> that index; else 0
  const defaultIndex = useMemo(() => {
    const matchIndex = menuItems.findIndex(
      (item) => item.label === buttonLabel,
    );
    return matchIndex >= 0 ? matchIndex : 0;
  }, [buttonLabel, menuItems]);

  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);

  useEffect(() => {
    setSelectedIndex(defaultIndex);
  }, [defaultIndex]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape anywhere
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close when focus leaves the container
  const handleBlur: React.FocusEventHandler<HTMLDivElement> = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node)) {
      closeMenu();
    }
  };

  const focusItem = (index: number) => {
    const el = itemsRef.current[index];
    el?.focus();
  };

  // When menu opens, focus selected item (or first)
  useEffect(() => {
    if (isOpen) {
      const id = window.setTimeout(() => focusItem(selectedIndex ?? 0), 0);
      return () => window.clearTimeout(id);
    }
  }, [isOpen, selectedIndex]);

  const moveFocus = (direction: 1 | -1) => {
    const len = menuItems.length;
    const current = itemsRef.current.findIndex(
      (el) => el === document.activeElement,
    );
    const base = current === -1 ? selectedIndex : current;
    const nextIndex = (base + direction + len) % len;
    focusItem(nextIndex);
  };

  const menuId = "dropdown-menu";

  return (
    <Container ref={containerRef} onBlur={handleBlur}>
      {/* Entire header is the control */}
      <HeaderButton
        id="menu-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        type="button"
        onClick={toggleMenu}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <span>{menuItems[selectedIndex]?.label ?? buttonLabel}</span>
        <ArrowIcon $open={isOpen}>arrow_drop_down</ArrowIcon>
      </HeaderButton>

      {/* Menu panel */}
      <Menu
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        id={menuId}
        tabIndex={-1}
        $open={isOpen}
        onKeyDown={(event) => {
          switch (event.key) {
            case "ArrowDown":
              event.preventDefault();
              moveFocus(1);
              break;
            case "ArrowUp":
              event.preventDefault();
              moveFocus(-1);
              break;
            case "Home":
              event.preventDefault();
              focusItem(0);
              break;
            case "End":
              event.preventDefault();
              focusItem(menuItems.length - 1);
              break;
          }
        }}
      >
        <Frame role="none">
          {menuItems.map((item, index) => {
            const isSelected = index === selectedIndex;
            return (
              <ItemButton
                key={index}
                type="button"
                role="menuitem"
                tabIndex={0}
                $selected={isSelected}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                onClick={() => {
                  setSelectedIndex(index);
                  onChange?.(index, item.label);
                  closeMenu();
                }}
              >
                {/* Left icon (star) */}
                <StarIcon>star</StarIcon>

                {/* Text */}
                <LabelWrapper>
                  <LabelText>{item.label}</LabelText>
                </LabelWrapper>
              </ItemButton>
            );
          })}
        </Frame>
      </Menu>
    </Container>
  );
}

/* =================== Styled components =================== */

const Container = styled.div`
  position: relative;
  display: inline-block;
  text-align: left;
`;

const HeaderButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 8px;
  background: var(--white);
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 600;
  color: var(--foreground);
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:hover {
    background: var(--light-gray);
  }

  &:focus-visible {
    outline: 2px solid #2563eb;
    outline-offset: 2px;
  }
`;

const arrowRotate = css<{ $open: boolean }>`
  transform: rotate(${(props) => (props.$open ? 180 : 0)}deg);
`;

const ArrowIcon = styled.span<{ $open: boolean }>`
  font-family: "Material Symbols Outlined";
  font-size: 20px;
  line-height: 1;
  height: 20px;
  width: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  color: var(--black);
  transition: transform 150ms ease;
  ${arrowRotate}
`;

const Menu = styled.div<{ $open: boolean }>`
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 10;
  width: 15rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: var(--white);
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow:
    0 10px 15px rgba(0, 0, 0, 0.1),
    0 4px 6px rgba(0, 0, 0, 0.05);
  outline: none;
  opacity: ${(props) => (props.$open ? 1 : 0)};
  transform: scale(${(props) => (props.$open ? 1 : 0.98)});
  transform-origin: top left;
  transition:
    opacity 120ms ease,
    transform 120ms ease;
  pointer-events: ${(props) => (props.$open ? "auto" : "none")};
`;

const Frame = styled.div`
  width: 100%;
  position: relative;
  border-radius: 4px;
  border: 2px solid var(--dark-gray);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 4px 2px;
  text-align: left;
  font-size: 10px;
  color: var(--black);
`;

const ItemButton = styled.button<{ $selected?: boolean }>`
  align-self: stretch;
  display: flex;
  align-items: center;
  padding: 4px 2px;
  gap: 4px;
  cursor: pointer;
  background: ${(props) =>
    props.$selected ? "var(--light-orange)" : "transparent"};
  border: 0;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;

  &:hover {
    background: var(--light-gray);
  }
  &:focus-visible {
    background: var(--light-gray);
  }
`;

const StarIcon = styled.span`
  font-family: "Material Symbols Outlined";
  font-size: 16px;
  line-height: 1;
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  color: var(--black);
`;

const LabelWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LabelText = styled.div`
  flex: 1 0 0;
  position: relative;
  overflow: hidden;
  color: var(--black);
  text-overflow: ellipsis;
  text-align: left;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
`;
