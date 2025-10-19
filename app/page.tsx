"use client";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <PageContainer>
      <MainContainer>
        <ImageContainer>
          <LearningSourceBanner
            src="assets/learningSourceBannerHorizontal.png"
            alt="Banner saying Welcome to the Learning Source"
          />
        </ImageContainer>

        {/* Navigation Tiles */}
        <NavigationTiles>
          {/* TODO: abstract this out into a Navigation Tile component */}
          <Link href="/">
            <Tile>
              <BackgroundImage
                src="assets/gettingStarted.png"
                alt="Getting Started Background"
              />
              <OrangeOverlay />
              <ContentOverlay>
                <Title>Getting Started</Title>
                <LearnMoreButton>Learn More</LearnMoreButton>
              </ContentOverlay>
            </Tile>
          </Link>

          <Link href="/catalog">
            <Tile>
              <BackgroundImage
                src="assets/catalogHomePage.png"
                alt="Catalog Background"
              />
              <OrangeOverlay />
              <ContentOverlay>
                <Title>Catalog</Title>
              </ContentOverlay>
            </Tile>
          </Link>

          <Link href="/">
            <Tile>
              <BackgroundImage
                src="assets/inPersonTraining.png"
                alt="In-person Training Background"
              />
              <OrangeOverlay />
              <ContentOverlay>
                <Title>In-person Training</Title>
              </ContentOverlay>
            </Tile>
          </Link>

          <Link href="/">
            <Tile>
              <BackgroundImage
                src="assets/onlineTraining.png"
                alt="Online Training Background"
              />
              <OrangeOverlay />
              <ContentOverlay>
                <OrangeButtons>
                  <OrangeButton>Upcoming</OrangeButton>
                  <OrangeButton>On-Demand</OrangeButton>
                </OrangeButtons>
                <Title>Online Training</Title>
              </ContentOverlay>
            </Tile>
          </Link>
        </NavigationTiles>
      </MainContainer>
    </PageContainer>
  );
}

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
`;

const MainContainer = styled.main`
  margin: 0 auto;
  padding: 2rem 1.5rem;
  max-width: 1024px;
`;

const ImageContainer = styled.section`
  text-align: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const NavigationTiles = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LearningSourceBanner = styled.img`
  display: block;
  margin: 0 auto;
  width: 90%;
  max-width: 816px;
  height: auto;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.5rem;

  animation: fadeInUp 1s ease-out;

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Tile = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  margin: 0 auto;
  width: 90%;
  max-width: 600px;
  aspect-ratio: 16/9;
  border-radius: 20px;
  animation: fadeInScale 0.5s ease-out 0.2s both;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
    transition: all 0.15s ease;
  }

  @keyframes fadeInScale {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
`;

const OrangeOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #f97316;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Tile}:hover & {
    opacity: 0.6;
  }
`;

const ContentOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  padding: 1rem;
  padding-bottom: 1rem;
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  font-size: clamp(1.25rem, 1.8vw, 2rem);
  line-height: 1.2;
  margin-bottom: 1.5rem;
`;

const LearnMoreButton = styled.button`
  background-color: black;
  font-family: inherit;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #374151;
    transform: scale(1.02);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.93);
  }
`;

const OrangeButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const OrangeButton = styled.button`
  background-color: #f97316;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e88800;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }
`;
