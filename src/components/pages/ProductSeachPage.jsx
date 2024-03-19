import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";
import { useEffect, useState } from "react";
import { ItemCard } from "../generic/ItemCard";
import { FilterCard } from "../generic/FilterCard";

function ProductSearchWithFilters() {
  const params = useParams();
  const currentCategory = params.categoryName;

  const [categoryData, setCategoryData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  const filteringObject = {
    price: {
      "under $10": [0, 10],
      "$10 to $20": [10, 20],
      "$20 to $30": [20, 30],
      "$30 & Above": [30, Infinity],
    },
    rating: {
      "4 & Above": [4, Infinity],
      "3 & Above": [3, Infinity],
      "2 & Above": [2, Infinity],
      "1 & Above": [1, Infinity],
      "0 & Above": [0, Infinity],
    },
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${currentCategory}`,
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategory().then((data) => {
      setCategoryData(data);
      setDisplayData(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <NavBar />
      <div className="p-8 flex">
        <FilterCard
          filterKeys={filteringObject}
          data={categoryData}
          setDisplayedData={setDisplayData}
        />
        <div className="">
          {displayData.map((data) => (
            <ItemCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProductSearchWithFilters };
