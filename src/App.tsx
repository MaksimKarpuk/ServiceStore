import React from "react";
import { Route, Routes } from "react-router-dom";
import style from "./styles.module.scss";
import Header from "./Components/organisms/Header/component";
import Footer from "./Components/organisms/Footer/component";
import HomePage from "./Components/pages/Home/component";
import OrderPage from "./Components/pages/Orders/component";
import FeedbackPage from "./Components/pages/Feedback/component";
import { SlArrowUp } from "react-icons/sl";

function App() {
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
}

export default App;
