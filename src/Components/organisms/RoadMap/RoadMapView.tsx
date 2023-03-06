import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";

interface IRoadMapView {
  [key: string]: string;
}

function RoadMapView({ cards }: IRoadMapView) {
  return (
    <div className={style.roadmap}>
      <div className={style.price__container}>
        <div className={style.container__title}>{content.roadMap[0].title}</div>
        <div className={style.container__cards}>{cards}</div>
      </div>
    </div>
  );
}

export default RoadMapView;
