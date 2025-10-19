"use client";

import styled from "styled-components";
import GlobalBlackBar from "../components/GlobalBlackBar";
import Sidebar from "../components/Sidebar";
export default function BethesourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalBlackBar />
      <LayoutContainer>
        <Sidebar
          // TODO: Implement all of these
          isCollapsed={false}
          setIsCollapsed={() => {}}
          isLoggedIn={false}
          setIsLoggedIn={() => {}}
          cartItemCount={0}
        />
        {children}
      </LayoutContainer>
    </>
  );
}

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
