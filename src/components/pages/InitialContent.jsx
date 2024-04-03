import BookBnrImg from "../../assets/banners/books_banner.jpg";
import BeautyBnrImg from "../../assets/banners/beauty_banner.jpg";
import KitchenBnrImg from "../../assets/banners/kitchen_banner.jpg";
import ToysBnrImg from "../../assets/banners/toys_banner.jpg";
import GameBnrImg from "../../assets/banners/games_banner.jpg";
import { GridCard } from "../generic/GridCard";
import { useEffect, useState } from "react";
import { Carousel } from "../generic/Carousel";

function InitialContent() {
  const bnrArr = [
    BookBnrImg,
    BeautyBnrImg,
    KitchenBnrImg,
    ToysBnrImg,
    GameBnrImg,
  ];

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
  //TODO: Add the banner sliders
  //TODO: Add the footer section
  return (
    <div className="w-full flex flex-col items-center bg-[#E3E6E6]">
      <div className="w-4/5">
        <Carousel autoSlide={true}>
          {[...bnrArr.map((s, i) => <img key={i} src={s} alt="" />)]}
        </Carousel>

        <div className="relative -translate-y-96 p-4 grid grid-cols-4 gap-6">
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
        </div>
      </div>
    </div>
  );
}

export { InitialContent };
