"use client";
import styled from "styled-components";

// Props for Chip
type ChipProps = {
  label: string; // Text
  onClick?: () => void; //Click handler for the chip (optional)
  onRemove?: () => void; // Remove action (optional)
};

// Chip component
export default function Chip({ label, onClick }: ChipProps) {
  return <StyledChip onClick={onClick}>{label}</StyledChip>;
}

// Styled chip container
const StyledChip = styled.div`
  display: inline-flex; /* Inline flex container */
  padding: var(--Scaling-3XS, 2px) var(--Scaling-XS, 8px); /* Inside spacing */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  gap: var(--Scaling-3XS, 2px); /* Space between items */

  border-radius: 100px;
  background: var(--light-orange);

  color: var(--black);
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 160% */

  cursor: pointer;
`;
