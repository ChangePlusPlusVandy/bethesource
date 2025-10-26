import CatalogResults from "../../components/CatalogResults";
import CatalogSearchBar from "../../components/CatalogSearchBar";
import H1 from "../../components/H1";

export default function Catalog() {
  return (
    <>
      <H1 text="Catalog" textcolor="black" />
      <CatalogSearchBar />
      <CatalogResults />
      {/* TODO: implement */}
    </>
  );
}
