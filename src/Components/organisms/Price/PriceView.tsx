import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";

interface IPriceView {
  [key: string]: string;
}

function PriceView({ cards }: IPriceView) {
  return (
    <div id="Цена" className={style.price}>
      <div className={style.price__container}>
        <div className={style.container__title}>{content.price[0].title}</div>
        <div className={style.container__subtitle}>
          {content.price[0].subtitle}
        </div>
        <div className={style.container__cards}>{cards}</div>
      </div>
    </div>
  );
}

export default PriceView;
