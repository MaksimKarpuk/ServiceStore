import React from "react";
import content from "../../../data/content.json";
import style from "./styles.module.scss";
import { Link } from "react-router-dom";
import HeaderView from "./HeaderView";

interface IHeader {
  [key: string]: any;
}
interface ILink {
  id: string;
  link: string;
  href: string;
  to: string;
}
const Header = () => {
  const phone: string = content.headerInfo[0].phone;
  const logo: string = content.headerInfo[0].logo;
  const links: any = content.headerLinks.map((link: ILink) => (
    <div className={style.container__link} key={link.id}>
      <Link to={link.to}>{link.link}</Link>
    </div>
  ));
  return <HeaderView phone={phone} logo={logo} links={links} />;
};

export default Header;
