import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import Button from "../../atoms/Button/Button";

function Price() {
  const priceContent: any = content.price[0].cards;
  const cards = priceContent.map((card: any, index: number) => (
    <div className={style.card__content} key={card.id}>
      <div className={style.content__appartment}>{card.appartment}</div>
      <div className={style.content__car}>{card.car}</div>
      <div className={style.content__people}>{card.people}</div>
      <div className={style.content__time}>{card.time}</div>
      <div className={style.content__price}>{card.price}</div>
      <a href="#Заказать" className={style.content__btn}>
        <Button formButtonText={card.btn} />
      </a>
    </div>
  ));
  return (
    <div id="Цена" className={style.price}>
      <div className={style.price__container}>
        <div className={style.container__title}>{content.price[0].title}</div>
        <div className={style.container__subtitle}>{content.price[0].subtitle}</div>
        <div className={style.container__cards}>{cards}</div>
      </div>
    </div>
  );
}

export default Price;
