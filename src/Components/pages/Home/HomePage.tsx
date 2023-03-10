import React from "react";
import Banner from "../../organisms/Banner/Banner";
import AutoPark from "../../organisms/AutoPark/AutoPark";
import Form from "../../organisms/Form/Form";
import Price from "../../organisms/Price/Price";
import RoadMap from "../../organisms/RoadMap/RoadMap";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RoadMap />
      <Price />
      <AutoPark />
      <Form />
    </div>
  );
};

export default HomePage;
