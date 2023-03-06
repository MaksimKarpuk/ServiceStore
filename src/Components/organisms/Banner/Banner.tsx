import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import img1 from "../../../assets/icons/banner__advantages-money.svg";
import img2 from "../../../assets/icons/banner__advantages-trigger.svg";
import img3 from "../../../assets/icons/banner__advantages-truck.svg";
import BannerView from "./BannerView";

const Banner = () => {
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
  return <BannerView formButtonText={formButtonText} advantages={advantages} />;
};

export default Banner;
