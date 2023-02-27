import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import img1 from "../../../assets/icons/banner__advantages-money.svg";
import img2 from "../../../assets/icons/banner__advantages-trigger.svg";
import img3 from "../../../assets/icons/banner__advantages-truck.svg";
import banner from "../../../assets/images/banner.png";
import Button from "../../atoms/Button/component";

function Banner() {
  const advantages: any = content.bannerAdvantages.map((adv) => (
    <div className={style.container__advantage} key={adv.id}>
      <div className={style.container__advantage__image}>
        <img
          src={
            adv.text === "Фиксированная цена"
              ? img1
              : adv.text === "Более 800 переездов"
              ? img3
              : img2
          }
          alt="img"
        />
      </div>
      <div className={style.container__advantage__text}>{adv.text}</div>
    </div>
  ));
  const formButtonText: string = "Заказать";
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
}

export default Banner;
