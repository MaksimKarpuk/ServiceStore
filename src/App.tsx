import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import style from "./styles.module.scss";
import Header from "./Components/organisms/Header/Header";
import Footer from "./Components/organisms/Footer/Footer";
import HomePage from "./Components/pages/Home/HomePage";
import OrderPage from "./Components/pages/Orders/OrderPage";
import FeedbackPage from "./Components/pages/Feedback/FeedBackPage";
import { SlArrowUp } from "react-icons/sl";

const App: FC = () => {
  return (
    <div className={style.app}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
      <a href="#Главная" className={style.go__up}>
        <SlArrowUp />
      </a>
      <Footer />
    </div>
  );
};

export default App;
