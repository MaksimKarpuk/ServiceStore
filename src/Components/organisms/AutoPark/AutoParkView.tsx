import React from "react";
import style from "./styles.module.scss";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

const AutoParkView = ({ slider, setIndex, sliderPoints, index }: any) => {
  return (
    <div id="Автопарк" className={style.autopark}>
      <div className={style.autopark__container}>
        <div className={style.container__title}>Автопарк</div>
        <div className={style.container__subtitle}>
          10 видов автомобилей от 800 кг до 10 тонн
        </div>
        <div className={style.container__slider_points}>{sliderPoints}</div>
        <div className={style.container__slider}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => setIndex(swiper.activeIndex)}
            onSlideChange={(swiper) => console.log(swiper)}
            onNavigationNext={(swiper) => {
              setIndex(index + 1);
            }}
            onNavigationPrev={(swiper) => {
              setIndex(index - 1);
            }}
          >
            {slider}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AutoParkView;
