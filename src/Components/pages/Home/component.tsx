import React from "react";
import style from "./styles.module.scss";
import Banner from "../../organisms/Banner/Banner";
import AutoPark from "../../organisms/AutoPark/AutoPark";
import NewForm from "../../organisms/NewForm/component";
import Price from "../../organisms/Price/component";
import RoadMap from "../../organisms/RoadMap/component";

function HomePage() {
  return (
    <div className={style.homePage}>
      <Banner />
      <RoadMap />
      <Price />
      <AutoPark />
      <NewForm />
    </div>
  );
}

export default HomePage;
