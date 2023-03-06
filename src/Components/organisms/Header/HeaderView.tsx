import React from "react";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";

interface IHeaderView {
  logo: string;
  phone: string;
  [key: string]: string;
}

const HeaderView = ({ logo, phone, links }: IHeaderView) => {
  return (
    <nav id="Главная" className={style.header}>
      <div className={style.header__container}>
        <Link to="/">
          <div className={style.container__logo}>{logo}</div>
        </Link>
        <div className={style.container__links}>
          {links}
          <a href="#Автопарк">Автопарк</a>
          <a href="#Контакты">Контакты</a>
          <a href="#Цена">Цена</a>
        </div>
        <div className={style.container__phohe}>
          <a href="tel:8 (029)-999-12-13"> {phone}</a>
        </div>
      </div>
    </nav>
  );
};

export default HeaderView;
