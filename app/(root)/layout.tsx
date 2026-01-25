"use client";

import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

export default function BethesourceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      {/* The Sidebar sits on the left. It no longer needs props */}
      <Sidebar />

      {/* The MainContent column sits on the right */}
      <MainContent>
        <TopBar />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </Container>
  );
}

// --- Layout Styles ---

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevents the whole page from scrolling */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; /* Takes up all width not used by Sidebar */
  min-width: 0; /* Prevents flexbox overflow issues */
`;

const ContentArea = styled.main`
  flex: 1; /* Takes up all height not used by TopBar */
  overflow-y: auto; /* Allows only this area to scroll */
  background-color: #f9fafb; /* Light gray background for content */
`;
