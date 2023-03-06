import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import Button from "../../atoms/Button/Button";
import AutoParkView from "./AutoParkView";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import gazel from "../../../assets/images/autopark-gazel.png";
import gruzovik from "../../../assets/images/autopark-gruzovik.png";
import kabluk from "../../../assets/images/autopark-kabluk.png";
import "swiper/scss";
import "swiper/scss/navigation";

const AutoPark = () => {
  const formButtonText: string = "Заказать";
  let [index, setIndex] = useState(0);
  const sliderPoints: any[] = content.autoparkPoints.map(
    (point, pointIndex) => (
      <div
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

  const slider: any[] = content.autoparkSlider.map((auto) => (
    <SwiperSlide key={auto.id}>
      <div className={style.slider__point}>
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
    <AutoParkView
      slider={slider}
      setIndex={setIndex}
      sliderPoints={sliderPoints}
      index={index}
    />
  );
};

export default AutoPark;
