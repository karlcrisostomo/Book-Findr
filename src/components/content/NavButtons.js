import React, { useCallback } from "react";
import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const NavButtons = () => {
  const swiper = useSwiper();

  const handleSlidePrev = useCallback(() => {
    if (!swiper.isBeginning) {
      swiper.slidePrev();
    }
  }, [swiper]);

  const handleSlideNext = useCallback(() => {
    if (!swiper.isEnd) {
      swiper.slideNext();
    }
  }, [swiper]);

  return (
    <div className="border-red-500 border-2 flex items-center absolute  bottom-0 z-50 right-0 ">
      <MdOutlineKeyboardArrowLeft
        size={32}
        className={`cursor-pointer ${
          swiper.isBeginning ? " text-gray-400" : " text-black "
        }`}
        onClick={handleSlidePrev}
      />
      <MdOutlineKeyboardArrowRight
        size={32}
        className={`cursor-pointer ${
          swiper.isEnd ? " text-gray-400" : " text-black"
        }`}
        onClick={handleSlideNext}
      />
    </div>
  );
};

export default React.memo(NavButtons);
