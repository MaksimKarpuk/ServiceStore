import React, { useState } from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import gazel from "../../../assets/images/autopark-gazel.png";
import gruzovik from "../../../assets/images/autopark-gruzovik.png";
import kabluk from "../../../assets/images/autopark-kabluk.png";
import Button from "../../atoms/Button/component";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";

function AutoPark() {
  let [index, setIndex] = useState(0);
  const sliderPoints: any[] = content.autoparkPoints.map(
    (point, pointIndex) => (
      <div
        onClick={() => setIndex((index = pointIndex))}
        className={
          pointIndex === index
            ? style.slider__point__active
            : style.slider__point
        }
        key={pointIndex}
      >
        {point}
      </div>
    )
  );
  const formButtonText: string = "Заказать";

  const slider: any[] = content.autoparkSlider.map((auto) => (
    <SwiperSlide key={auto.id}>
      <div className={style.slider__point} >
        <div className={style.point__text}>
          <div className={style.point__title}>{auto.title}</div>
          <ul className={style.text__list}>
            <li>{auto.width}</li>
            <li>{auto.height}</li>
            <li>{auto.obiom}</li>
            <li>{auto.massa}</li>
          </ul>
          <a href="#Заказать">
            <Button formButtonText={formButtonText} />
          </a>
        </div>
        <div className={style.point__image}>
          <img
            src={
              auto.title === "Газель 3 метра"
                ? gazel
                : auto.title === "Каблук 2 метра"
                ? kabluk
                : gruzovik
            }
            alt="auto"
          />
        </div>
      </div>
    </SwiperSlide>
  ));
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
}

export default AutoPark;
