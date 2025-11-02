"use client";
import Link from "next/link";
import styled from "styled-components";

type SidebarItemProps = {
  label: string;
  icon: React.ReactNode;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

export default function SidebarItem({
  label,
  icon,
  href,
  active = false,
  onClick,
}: SidebarItemProps) {
  const content = (
    <StyledSidebarItem active={active} onClick={onClick}>
      {icon}
      <Label>{label}</Label>
    </StyledSidebarItem>
  );

  // If href is provided, wrap in Link
  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  // Otherwise just return the content
  return content;
}

const Label = styled.span`
  /* text */
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 133.333% */
`;

const StyledSidebarItem = styled.div<{ active: boolean }>`
  /* layout */
  display: flex;
  padding: var(--Scaling-XS, 8px) var(--Scaling-XL, 24px);
  align-items: center;
  gap: var(--Scaling-S, 12px);
  align-self: stretch;
  cursor: pointer;

  /* style */
  border-radius: var(--Scaling-XS, 8px);
  background: ${({ active }) =>
    active ? "rgba(247, 149, 24, 0.20)" : "transparent"};
  transition: background 0.2s ease;

  /* hover state */
  &:hover {
    background: ${({ active }) =>
      active ? "rgba(247, 149, 24, 0.25)" : "rgba(82, 82, 82, 0.10)"};
  }

  /* active/pressed state */
  &:active {
    background: ${({ active }) =>
      active ? "rgba(247, 149, 24, 0.35)" : "rgba(82, 82, 82, 0.20)"};
  }
`;
