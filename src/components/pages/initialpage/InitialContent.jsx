import BookBnrImg from "../../../assets/banners/books_banner.jpg";
import BeautyBnrImg from "../../../assets/banners/beauty_banner.jpg";
import KitchenBnrImg from "../../../assets/banners/kitchen_banner.jpg";
import ToysBnrImg from "../../../assets/banners/toys_banner.jpg";
import GameBnrImg from "../../../assets/banners/games_banner.jpg";
import { Carousel } from "../../generic/Carousel";
import { GridItemsBlock } from "./GridItemsBlock";
import { ItemBannerBlock } from "./ItemBannerBlock";

function InitialContent() {
  const bnrArr = [
    BookBnrImg,
    BeautyBnrImg,
    KitchenBnrImg,
    ToysBnrImg,
    GameBnrImg,
  ];

  //TODO: Add the banner sliders
  //TODO: Add the footer section

  // We will fetch the data in components as both are expected to have different data
  return (
    <div className="w-full flex flex-col items-center bg-[#E3E6E6]">
      <div className="w-4/5">
        <Carousel autoSlide={true}>
          {[...bnrArr.map((s, i) => <img key={i} src={s} alt="" />)]}
        </Carousel>

        <div className="relative -translate-y-96 p-4 grid grid-cols-4 gap-6">
          <GridItemsBlock />
          <ItemBannerBlock />
        </div>
      </div>
    </div>
  );
}

export { InitialContent };
