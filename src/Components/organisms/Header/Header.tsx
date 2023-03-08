import React from "react";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import content from "../../../data/content.json";
interface ILink {
  id: string;
  link: string;
  href: string;
  to: string;
}

const Header = () => {
  const phone: string = content.headerInfo[0].phone;
  const logo: string = content.headerInfo[0].logo;
  return (
    <nav id="Главная" className={style.header}>
      <div className={style.header__container}>
        <Link to="/">
          <div className={style.container__logo}>{logo}</div>
        </Link>
        <div className={style.container__links}>
          {content.headerLinks.map((link: ILink) => (
            <div className={style.container__link} key={link.id}>
              <Link to={link.to}>{link.link}</Link>
            </div>
          ))}
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

export default Header;
