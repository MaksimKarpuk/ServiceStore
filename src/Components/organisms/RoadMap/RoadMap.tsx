import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
interface IRoadmapCard {
  id: string;
  title: string;
  info: string;
}

const RoadMapView = () => {
  return (
    <div className={style.roadmap}>
      <div className={style.price__container}>
        <div className={style.container__title}>{content.roadMap[0].title}</div>
        <div className={style.container__cards}>
          {content.roadMap[0].cards.map((card: IRoadmapCard) => (
            <div className={style.card__content} key={card.id}>
              <div className={style.content__number}>{card.id}</div>
              <div className={style.content__info}>
                <div className={style.info__title}>{card.title}</div>
                <div className={style.info__content}>{card.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMapView;
