import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";

function RoadMap() {
  const RoadmapContent: any = content.roadMap[0].cards;
  const cards = RoadmapContent.map((card: any, index: number) => (
    <div className={style.card__content} key={card.id}>
      <div className={style.content__number}>{card.id}</div>
      <div className={style.content__info}>
        {" "}
        <div className={style.info__title}>{card.title}</div>
        <div className={style.info__content}>{card.info}</div>
      </div>
    </div>
  ));
  return (
    <div className={style.roadmap}>
      <div className={style.price__container}>
        <div className={style.container__title}>{content.roadMap[0].title}</div>
        <div className={style.container__cards}>{cards}</div>
      </div>
    </div>
  );
}

export default RoadMap;
