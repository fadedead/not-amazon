import bookBnrImg from "../../assets/banners/books_banner.jpg";
import beautyBnrImg from "../../assets/banners/beauty_banner.jpg";
import kitchenBnrImg from "../../assets/banners/kitchen_banner.jpg";
import { BannerSlider } from "../generic/BannerSlider";
import { GridCard } from "../generic/GridCard";
import { useEffect, useState } from "react";

function InitialContent() {
  const bnrArr = [bookBnrImg, beautyBnrImg, kitchenBnrImg];

  const [gamingGridData, setGamingGridData] = useState({});

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
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-4/5 relative">
        <BannerSlider bnrArr={bnrArr} />
      </div>
      <GridCard title="Gaming accessories" colCount="2" data={gamingGridData} />
    </div>
  );
}

export { InitialContent };
