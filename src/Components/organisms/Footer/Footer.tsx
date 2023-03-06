import React from "react";
import FooterView from "./FooterView";
import content from "../../../data/content.json";
import style from "./styles.module.scss";

interface IFooter {
  logo: string;
  politic: string;
  social: string;
  [key: string]: any;
}
interface ILink {
  id: string;
  link: string;
  href: string;
}
interface ILinks {
  [key: string]: string;
}

const Footer = () => {
  const footer: IFooter = content.footer[0];
  const links: ILinks = footer.footerLinks.map((link: ILink) => (
    <div className={style.nav__link} key={link.id}>
      <a href={link.href}>{link.link}</a>
    </div>
  ));
  return <FooterView links={links} footer={footer} />;
};

export default Footer;
