import React from "react";
import style from "./styles.module.scss";
import content from "../../../data/content.json";
import { Link } from "react-router-dom";

const phone: string = content.headerInfo[0].phone;
const logo: string = content.headerInfo[0].logo;
const links: any = content.headerLinks.map((link) => (
  <div className={style.container__link} key={link.id}>
    <Link to={link.to}>{link.link}</Link>
  </div>
));

function Header() {
  return (
    <nav id="Главная" className={style.header}>
      <div className={style.header__container}>
        <Link to="/">
          <div className={style.container__logo}>{logo}</div>
        </Link>
        <div className={style.container__links}>{links}</div>
        <div className={style.container__phohe}>
          <a href="tel:8 (029)-999-12-13"> {phone}</a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
