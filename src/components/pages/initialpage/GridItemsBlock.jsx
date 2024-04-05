import { useEffect, useState } from "react";
import { GridCard } from "../../generic/GridCard";

function GridItemsBlock() {
  const [gamingGridData, setGamingGridData] = useState({});
  const [jeweleryGridData, setJeweleryGridData] = useState({});
  const [menClothingGridData, setMenClothingGridData] = useState({});
  const [womenClothingGridData, setWomenClothingGridData] = useState({});
  const [dealsInPCData, setDealsInPCData] = useState({});
  const [portableStorageData, setPortableStorageData] = useState({});
  const [kidsWearData, setKidsWearData] = useState({});

  useEffect(() => {
    const getItemsUsingIds = async (ids) => {
      try {
        const prodcuts = {};

        for (let id of ids) {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const resJson = await res.json();
          prodcuts[resJson.title] = resJson.image;
        }

        return prodcuts;
      } catch (error) {
        console.log(error);
      }
    };

    const gamingProductIDs = [13, 14, 11, 10];
    getItemsUsingIds(gamingProductIDs).then((res) => setGamingGridData(res));

    const jewleryProductIDs = [5, 6, 7, 8];
    getItemsUsingIds(jewleryProductIDs).then((res) => setJeweleryGridData(res));

    const menclothingProductIDs = [1, 2, 3, 4];
    getItemsUsingIds(menclothingProductIDs).then((res) =>
      setMenClothingGridData(res),
    );

    const womenClothingProductIDs = [15, 16, 17, 18];
    getItemsUsingIds(womenClothingProductIDs).then((res) =>
      setWomenClothingGridData(res),
    );

    const dealsInPCID = [13];
    getItemsUsingIds(dealsInPCID).then((res) => setDealsInPCData(res));

    const portableStorageID = [12];
    getItemsUsingIds(portableStorageID).then((res) =>
      setPortableStorageData(res),
    );

    const kidsWearIDs = [20];
    getItemsUsingIds(kidsWearIDs).then((res) => setKidsWearData(res));
  }, []);

  return (
    <>
      <GridCard
        title="Gaming accessories"
        colCount={2}
        data={gamingGridData}
        expansionText="see more"
        categoryName={"electronics"}
      />

      <GridCard
        title="Deals in PCs"
        colCount={1}
        data={dealsInPCData}
        expansionText="shop now"
        categoryName={"electronics"}
      />

      <GridCard
        title="Mens Clothing"
        colCount={2}
        data={menClothingGridData}
        expansionText="see more"
        categoryName={"men's clothing"}
      />

      <GridCard
        title="Womens Clothing"
        colCount={2}
        data={womenClothingGridData}
        expansionText="see more"
        categoryName={"women's clothing"}
      />

      <GridCard
        title="Trends you like"
        colCount={2}
        data={menClothingGridData}
        expansionText="explore more"
        categoryName={"men's clothing"}
      />

      <GridCard
        title="Portable storage under $25"
        colCount={1}
        data={portableStorageData}
        expansionText="see more"
        categoryName={"electronics"}
      />

      <GridCard
        title="Jewlery"
        colCount={2}
        data={jeweleryGridData}
        expansionText="see more"
        categoryName={"jewelery"}
      />

      <GridCard
        title="Shop kid's wear"
        colCount={1}
        data={kidsWearData}
        expansionText="see more"
        categoryName={"women's clothing"}
      />
    </>
  );
}

export { GridItemsBlock };
