"use client";

import styles from "@/app/styles/components/Dropdown.module.css";
import DropDownArrow from "@/public/assets/icons/DropDownArrow.svg";
import FullStar from "@/public/assets/icons/FullStar.svg";
import { useEffect, useRef, useState } from "react";

type MenuItem = {
  label: string;
  onClick?: () => void;
  selected?: boolean;
};

type DropdownProps = {
  buttonLabel: string;
  menuItems: MenuItem[];
};

const isAssetModule = (value: unknown): value is { src: string } => {
  if (typeof value !== "object" || value === null) return false;
  if (!("src" in value)) return false;
  const maybe = (value as { src: unknown }).src;
  return typeof maybe === "string";
};

const renderIcon = (Icon: unknown, className?: string) => {
  if (!Icon) return null;

  if (typeof Icon === "string") {
    return <img src={Icon} className={className} alt="" aria-hidden="true" />;
  }

  if (isAssetModule(Icon)) {
    const src = Icon.src;
    return <img src={src} className={className} alt="" aria-hidden="true" />;
  }

  const Comp = Icon as React.ComponentType<Record<string, unknown>>;
  return <Comp className={className} aria-hidden="true" />;
};

export default function Dropdown({ buttonLabel, menuItems }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  // Close on Escape
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const focusItem = (index: number) => {
    const el = itemsRef.current[index];
    el?.focus();
  };

  const moveFocus = (direction: 1 | -1) => {
    const list = itemsRef.current;
    const currentIndex = list.findIndex((el) => el === document.activeElement);
    const len = menuItems.length;
    const nextIndex =
      currentIndex === -1
        ? direction === 1
          ? 0
          : len - 1
        : (currentIndex + direction + len) % len;
    focusItem(nextIndex);
  };

  useEffect(() => {
    if (isOpen) {
      const selectedIndex = menuItems.findIndex((item) => item.selected);
      const indexToFocus = selectedIndex >= 0 ? selectedIndex : 0;
      const id = window.setTimeout(() => focusItem(indexToFocus), 0);
      return () => window.clearTimeout(id);
    }
  }, [isOpen, menuItems]);

  const menuId = "dropdown-menu";

  return (
    <div
      ref={containerRef}
      className={styles.container}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node))
          closeMenu();
      }}
    >
      {/* Header: label text + arrow-only toggle button */}
      <div className={styles.button} role="group" aria-label="Dropdown">
        <span>{buttonLabel}</span>
        <button
          type="button"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-controls={menuId}
          onClick={toggleMenu}
          className={styles.arrowButton}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              setIsOpen(true);
            }
          }}
        >
          {/* Arrow icon (rotates on open) */}
          {renderIcon(
            DropDownArrow,
            `${styles.dropArrowDownIcon} ${isOpen ? styles.dropArrowOpen : ""}`,
          )}
        </button>
      </div>

      {/* Menu panel */}
      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        id={menuId}
        tabIndex={-1}
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
        hidden={!isOpen}
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
            case "Enter":
            case " ":
              // Let the focused button handle click via default behavior
              break;
            default:
              break;
          }
        }}
      >
        <div className={styles.frameParent} role="none">
          {menuItems.map((item, index) => {
            const rowClass = item.selected
              ? styles.fullStarParentSelected
              : styles.fullStarParent;
            return (
              <button
                key={index}
                type="button"
                role="menuitem"
                tabIndex={0}
                className={rowClass}
                ref={(el) => {
                  itemsRef.current[index] = el;
                }}
                onClick={() => {
                  item.onClick?.();
                  closeMenu();
                }}
              >
                {/* Left icon */}
                {renderIcon(FullStar, styles.fullStarIcon)}

                {/* Text */}
                <div className={styles.placeholderTextWrapper}>
                  <div className={styles.placeholderText}>{item.label}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
