import React, { useCallback, useState } from "react";
import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const NavButtons = () => {
  const swiper = useSwiper();
  const [update, setUpdate] = useState(0);

  const handleSlidePrev = useCallback(() => {
    if (!swiper.isBeginning) {
      swiper.slidePrev();
      setUpdate((prev) => prev + 1);
    }
  }, [swiper]);

  const handleSlideNext = useCallback(() => {
    if (!swiper.isEnd) {
      swiper.slideNext();
      setUpdate((prev) => prev + 1);
    }
  }, [swiper]);

  return (
    <>
      <div className="flex border-red-500 overflow-hidden items-center absolute bottom-0 z-50 right-0">
        <MdOutlineKeyboardArrowLeft
          size={32}
          className={`cursor-pointer hover:scale-75 transition-all ${
            swiper.isBeginning ? "text-gray-400" : "text-black"
          }`}
          onClick={handleSlidePrev}
        />
        <MdOutlineKeyboardArrowRight
          size={32}
          className={`cursor-pointer hover:scale-75 transition-all ${
            swiper.isEnd ? "text-gray-400 " : "text-black"
          }`}
          onClick={handleSlideNext}
        />
      </div>
    </>
  );
};

export default NavButtons;
