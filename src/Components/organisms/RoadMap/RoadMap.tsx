import React from "react";
import RoadMapView from "./RoadMapView";
import style from "./styles.module.scss";
import content from "../../../data/content.json";

interface IRoadMap {
  [key: string]: string;
}
interface ICard {
  id: string;
  title: string;
  info: string;
}

const RoadMap = () => {
  const RoadmapContent: any = content.roadMap[0].cards;
  const cards = RoadmapContent.map((card: ICard, index: number) => (
    <div className={style.card__content} key={card.id}>
      <div className={style.content__number}>{card.id}</div>
      <div className={style.content__info}>
        {" "}
        <div className={style.info__title}>{card.title}</div>
        <div className={style.info__content}>{card.info}</div>
      </div>
    </div>
  ));
  return <RoadMapView cards={cards} />;
};

export default RoadMap;
