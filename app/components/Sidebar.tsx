"use client";

import {
  BookOpen,
  Home,
  LayoutDashboard,
  LogOut,
  MessageCircleQuestion,
  Phone,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

export default function Sidebar() {
  const pathname = usePathname(); // Hook to get current route for active state

  return (
    <Container>
      <TopSection>
        {/* Profile Section from Figma */}
        <Profile>
          <Avatar />
          <UserInfo>
            <UserName>Vince</UserName>
            <UserRole>Parent</UserRole>
          </UserInfo>
        </Profile>

        {/* Navigation Menu */}
        <NavMenu>
          <NavItem $active={pathname === "/"}>
            <Link
              href="/"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
          </NavItem>

          <NavItem $active={pathname === "/dashboard"}>
            <Link
              href="/dashboard"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <LayoutDashboard size={20} />
              <span>Dashboard</span>
            </Link>
          </NavItem>

          <NavItem $active={pathname === "/catalog"}>
            <Link
              href="/catalog"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <BookOpen size={20} />
              <span>Catalog</span>
            </Link>
          </NavItem>

          <NavItem $active={pathname === "/faqs"}>
            <Link
              href="/faqs"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <MessageCircleQuestion size={20} />
              <span>FAQs</span>
            </Link>
          </NavItem>

          <NavItem $active={pathname === "/cart"}>
            <Link
              href="/cart"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
          </NavItem>

          <NavItem $active={pathname === "/contact"}>
            <Link
              href="/contact"
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Phone size={20} />
              <span>Contact</span>
            </Link>
          </NavItem>
        </NavMenu>
      </TopSection>

      {/* Logout Button */}
      <LogoutButton>
        <LogOut size={20} />
        <span>Log Out</span>
      </LogoutButton>
    </Container>
  );
}

// --- Styled Components (Matching Figma Specs) ---

const Container = styled.div`
  width: 236px;
  height: 100vh;
  background-color: white;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 16px; /* Matches Figma Scaling/XL top padding */
  box-sizing: border-box;
  flex-shrink: 0;
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 40px;
  padding-left: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #d1d5db;
  /* If you have the image, uncomment below: */
  /* background-image: url('/images/pfp.jpg'); */
  background-size: cover;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #111827;
`;

const UserRole = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

const NavMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const NavItem = styled.div<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  font-size: 14px;

  /* Conditional Styling for Active State */
  background-color: ${(props) => (props.$active ? "#FFF7ED" : "transparent")};
  color: ${(props) => (props.$active ? "#EA580C" : "#374151")};

  a {
    color: inherit;
    text-decoration: none;
  }

  &:hover {
    background-color: ${(props) => (props.$active ? "#FFF7ED" : "#F3F4F6")};
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: none;
  background: none;
  cursor: pointer;
  color: #374151;
  font-weight: 700;
  font-size: 14px;
  margin-top: auto;

  &:hover {
    background-color: #f3f4f6;
    border-radius: 8px;
  }
`;
