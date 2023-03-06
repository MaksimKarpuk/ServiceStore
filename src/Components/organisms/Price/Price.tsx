import React from "react";
import PriceView from "./PriceView";
import Button from "../../atoms/Button/Button";
import content from "../../../data/content.json";
import style from "./styles.module.scss";

const Price = () => {
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
  return <PriceView cards={cards} />;
};

export default Price;
