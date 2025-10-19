import CatalogResults from "../../components/CatalogResults";
import CatalogSearchBar from "../../components/CatalogSearchBar";
import { Title } from "../../components/library/Headers";

export default function Catalog() {
  return (
    <>
      <Title text="Catalog" textcolor="black" />
      <CatalogSearchBar />
      <CatalogResults />
      {/* TODO: implement */}
    </>
  );
}
