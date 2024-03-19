import { useState } from "react";
import PropTypes from "prop-types";

function BannerSlider({ bnrArr }) {
  const [currImgIndex, setImageIndex] = useState(0);
  const [bnrChangeLeft, setBnrChangeLeft] = useState(false);
  const [bnrChangeRight, setBnrChangeRight] = useState(false);

  const changeImageWithAnimationLeft = (newIndex) => {
    setBnrChangeLeft(true);
    setTimeout(() => {
      setImageIndex(newIndex);
      setBnrChangeLeft(false);
    }, 300);
  };

  const changeImageWithAnimationRight = (newIndex) => {
    setBnrChangeRight(true);
    setTimeout(() => {
      setImageIndex(newIndex);
      setBnrChangeRight(false);
    }, 1000);
  };

  return (
    <>
      <div
        className="absolute h-56 w-20 flex items-center justify-center text-5xl border border-transparent hover:border-black"
        onClick={() => {
          currImgIndex - 1 < 0
            ? changeImageWithAnimationLeft(bnrArr.length - 1)
            : changeImageWithAnimationLeft(currImgIndex - 1);
        }}
      >
        <p className="scale-x-50">&#10094;</p>
      </div>
      {bnrChangeLeft ? (
        <div className="flex overflow-clip">
          <div className="w-auto translate-x-2/3 animate-[slideIn_0.2s] ">
            <img src={bnrArr[currImgIndex]} alt="" />
            <div className="absolute z-1 bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
          </div>
          <div className="absolute w-auto animate-[slideIn_0.3s]">
            <img
              src={
                bnrArr[
                  currImgIndex - 1 < 0 ? bnrArr.length - 1 : currImgIndex - 1
                ]
              }
              alt=""
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
          </div>
        </div>
      ) : bnrChangeRight ? (
        <div className="flex overflow-clip">
          <div className="w-auto animate-[slideOut_0.2s] ">
            <img src={bnrArr[currImgIndex]} alt="" />
            <div className="absolute z-1 bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
          </div>
          <div className="w-auto animate-[slideOut_0.3s]">
            <img
              src={
                bnrArr[
                  currImgIndex + 1 > bnrArr.length - 1 ? 0 : currImgIndex + 1
                ]
              }
              alt=""
            />
            <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
          </div>
        </div>
      ) : (
        <div className="z-0">
          <img src={bnrArr[currImgIndex]} alt="" />
          <div className="absolute bottom-0 w-full h-2/3 bg-gradient-to-t from-[#E3E6E6] to-transparent"></div>
        </div>
      )}
      <div
        onClick={() => {
          currImgIndex + 1 > bnrArr.length - 1
            ? changeImageWithAnimationRight(0)
            : changeImageWithAnimationRight(currImgIndex + 1);
        }}
        className="absolute right-0 top-0 h-56 w-20 flex items-center justify-center text-5xl border border-transparent hover:border-black"
      >
        <p className="scale-x-50">&#10095;</p>
      </div>
      ;
    </>
  );
}

BannerSlider.propTypes = {
  bnrArr: PropTypes.arrayOf(PropTypes.string),
};

export { BannerSlider };
