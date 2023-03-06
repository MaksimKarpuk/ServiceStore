import React from "react";
import style from "./styles.module.scss";
import Banner from "../../organisms/Banner/Banner";
import AutoPark from "../../organisms/AutoPark/AutoPark";
import Form from "../../organisms/Form/Form";
import Price from "../../organisms/Price/Price";
import RoadMap from "../../organisms/RoadMap/RoadMap";

function HomePage() {
  return (
    <div className={style.homePage}>
      <Banner />
      <RoadMap />
      <Price />
      <AutoPark />
      <Form />
    </div>
  );
}

export default HomePage;
