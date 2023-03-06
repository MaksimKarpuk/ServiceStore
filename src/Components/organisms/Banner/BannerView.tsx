import React from "react";
import style from "./styles.module.scss";
import banner from "../../../assets/images/banner.png";
import Button from "../../atoms/Button/Button";

const BannerView = ({ formButtonText, advantages }: any) => {
  return (
    <nav className={style.banner}>
      <div className={style.banner__container}>
        <div className={style.container__info}>
          <div className={style.container__title}>Квартирные переезды </div>
          <div className={style.container__subtitle}>По Беларуси и СНГ</div>
          <a href="#Заказать">
            <Button formButtonText={formButtonText} />
          </a>
          <div className={style.container__advantages}>{advantages}</div>
        </div>
        <div className={style.container__img}>
          <img src={banner} alt="banner" />
        </div>
      </div>
    </nav>
  );
};

export default BannerView;
