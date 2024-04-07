import { useEffect, useState } from "react";
import { ItemCarousel } from "../../generic/ItemCarousel";

function ItemBannerBlock() {
  const [electronicsBannerData, setElectronicsBannerData] = useState([]);
  const [jeweleryBannerData, setJeweleryBannerData] = useState([]);
  const [menClothingBannerData, setMenClothingBannerData] = useState([]);
  const [womenClothingBannerData, setWomenClothingBannerData] = useState([]);

  useEffect(() => {
    const getItemsUsingIds = async (ids) => {
      try {
        const prodcuts = [];

        for (let id of ids) {
          const res = await fetch(`https://fakestoreapi.com/products/${id}`);
          const resJson = await res.json();
          prodcuts.push(resJson);
        }

        return prodcuts;
      } catch (error) {
        console.log(error);
      }
    };

    const electronicsProductIDs = [13, 14, 11, 10, 9];
    getItemsUsingIds(electronicsProductIDs).then((res) =>
      setElectronicsBannerData(res),
    );

    const jewleryProductIDs = [5, 6, 7, 8];
    getItemsUsingIds(jewleryProductIDs).then((res) =>
      setJeweleryBannerData(res),
    );

    const menclothingProductIDs = [1, 2, 3, 4];
    getItemsUsingIds(menclothingProductIDs).then((res) =>
      setMenClothingBannerData(res),
    );

    const womenClothingProductIDs = [15, 16, 17, 18, 19, 20];
    getItemsUsingIds(womenClothingProductIDs).then((res) =>
      setWomenClothingBannerData(res),
    );
  }, []);

  return (
    <>
      <ItemCarousel
        items={menClothingBannerData
          .concat(womenClothingBannerData)
          .concat(jeweleryBannerData)
          .concat(electronicsBannerData)}
      />

      <ItemCarousel
        items={electronicsBannerData
          .concat(jeweleryBannerData)
          .concat(menClothingBannerData)}
      />

      <ItemCarousel
        items={womenClothingBannerData
          .concat(menClothingBannerData)
          .concat(electronicsBannerData)}
      />
    </>
  );
}

export { ItemBannerBlock };
