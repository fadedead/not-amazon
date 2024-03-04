import bookBnrImg from "../../assets/banners/books_banner.jpg";
import beautyBnrImg from "../../assets/banners/beauty_banner.jpg";
import kitchenBnrImg from "../../assets/banners/kitchen_banner.jpg";

function InitialContent() {
  const bnrArr = [bookBnrImg, beautyBnrImg, kitchenBnrImg];
  return (
    <div className="z-1 w-full flex justify-center">
      <div className="w-4/5 relative">
        <div className="absolute h-56 w-20 flex items-center justify-center text-5xl border border-transparent hover:border-black">
          <p className="scale-x-50">&#10094;</p>
        </div>
        <div className="z-0">
          <img src={bnrArr[2]} alt="" />
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-white to-transparent"></div>
        </div>
        <div className="absolute right-0 top-0 h-56 w-20 flex items-center justify-center text-5xl border border-transparent hover:border-black">
          <p className="scale-x-50">&#10095;</p>
        </div>
      </div>
    </div>
  );
}

export { InitialContent };
