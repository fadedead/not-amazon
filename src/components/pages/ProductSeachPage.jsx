import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";

function ProductSearchWithFilters() {
  const params = useParams();
  const currentCategory = params.categoryName;
  return (
    <div>
      <Header />
      <NavBar />
    </div>
  );
}

export { ProductSearchWithFilters };
