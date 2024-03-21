import { useParams } from "react-router-dom";
import { Header } from "../header/Header";
import { NavBar } from "../nav/NavBar";
import { useEffect, useState } from "react";
import { ItemCard } from "../generic/ItemCard";
import { FilterCard } from "../generic/FilterCard";

function ProductSearchWithFilters() {
  const params = useParams();
  const currentCategory = params.categoryName;
  // TODO: If current category is all, fetch all the details

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
    fetchCategory()
      .then((data) => {
        return data.map((value) => ({
          ...value,
          rating: value.rating.rate,
          rating_count: value.rating.count,
        }));
      })
      .then((data) => {
        setCategoryData(data);
        setDisplayData(data);
      });
  }, [currentCategory]);

  return (
    <div>
      <Header currentSelected={currentCategory} />
      <NavBar />
      <div className="w-full p-8 flex justify-between">
        <FilterCard
          filterKeys={filteringObject}
          data={categoryData}
          setDisplayedData={setDisplayData}
        />
        <div className="w-11/12">
          <h3 className="font-bold text-xl">Results</h3>
          <p className="text-xs text-gray-900">
            Check each product page for other buying options.
          </p>
          {displayData.map((data) => (
            <ItemCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProductSearchWithFilters };
