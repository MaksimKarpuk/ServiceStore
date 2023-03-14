import React from "react";
import Banner from "../../organisms/Banner/Banner";
import AutoPark from "../../organisms/AutoPark/AutoPark";
import Form from "../../organisms/Form/Form";
import Price from "../../organisms/Price/Price";
import RoadMap from "../../organisms/RoadMap/RoadMap";
import FormikComponent from "../../organisms/Formik/Formik";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <RoadMap />
      <Price />
      <AutoPark />
      <FormikComponent/>
      <Form />
    </div>
  );
};

export default HomePage;
