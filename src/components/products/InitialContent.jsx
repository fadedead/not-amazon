import bookBnrImg from "../../assets/banners/books_banner.jpg";
import beautyBnrImg from "../../assets/banners/beauty_banner.jpg";
import kitchenBnrImg from "../../assets/banners/kitchen_banner.jpg";
import { BannerSlider } from "../generic/BannerSlider";

function InitialContent() {
  const bnrArr = [bookBnrImg, beautyBnrImg, kitchenBnrImg];

  return (
    <div className="w-full flex justify-center">
      <div className="w-4/5 relative">
        <BannerSlider bnrArr={bnrArr} />
      </div>
    </div>
  );
}

export { InitialContent };
