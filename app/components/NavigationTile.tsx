/* 
TODO: delete this once the component is implemented

This is the format of the Navigation Tile component, from page.tsx
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
*/

type NavigationTileProps = {
  somePropsHere: string; // replace this with the actual props you need!
};

export default function NavigationTile({ somePropsHere }: NavigationTileProps) {
  return <>{/* TODO: implement */ somePropsHere}</>;
}
