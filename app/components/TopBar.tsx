"use client";

import Link from "next/link";
import styled from "styled-components";

export default function TopBar() {
  return (
    <Container>
      <LogoSection>
        {/* Placeholder for the Logo - replace with <Image> if you have the asset */}
        <LogoText>
          BE THE <span style={{ color: "#F2994A" }}>SOURCE</span>
        </LogoText>
      </LogoSection>

      <NavLinks>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/programs">Programs</StyledLink>
        <StyledLink href="/help">How to Help</StyledLink>
        <StyledLink href="/calendar">Calendar</StyledLink>
        <StyledLink href="/news">News</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
      </NavLinks>

      <ActionButtons>
        <Button $variant="primary">REQUEST HELP</Button>
        <Button $variant="secondary">DONATE NEW</Button>
      </ActionButtons>
    </Container>
  );
}

// --- Styled Components ---

const Container = styled.div`
  width: 100%;
  height: 76px;
  background-color: #283659; /* Dark Blue from Figma */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  flex-shrink: 0;
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  margin: 0;
  letter-spacing: 1px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 1000px) {
    display: none; /* Hide nav links on smaller screens for now */
  }
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
`;

const Button = styled.button<{ $variant?: "primary" | "secondary" }>`
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$variant === "primary" ? "#F2C94C" : "#A3E4D7"};
  color: #283659;

  &:hover {
    opacity: 0.9;
  }
`;
