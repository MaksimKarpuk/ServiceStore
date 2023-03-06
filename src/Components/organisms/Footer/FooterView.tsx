import React from "react";
import style from "./styles.module.scss";
import vk from "../../../assets/icons/vk.svg";
import fb from "../../../assets/icons/fb.svg";
import insta from "../../../assets/icons/insta.svg";
import youtoob from "../../../assets/icons/youtoob.svg";

const FooterView = ({ links, footer }: any) => {
  return (
    <div className={style.footer}>
      <div className={style.footer__container}>
        <div className={style.footer__info}>
          <div className={style.info__logo}>
            <a href="#Главная">{footer.logo}</a>
          </div>
          <div className={style.info__politic}>{footer.politic}</div>
          <div className={style.info__social}>{footer.social}</div>
        </div>
        <nav className={style.footer__nav}>{links}</nav>
        <div className={style.footer__social}>
          <a
            href="tel:8 (029)-999-12-13"
            id="Контакты"
            className={style.social__btn}
          >
            Обратный звонок
          </a>
          <div className={style.social__number}>
            <a href="tel:8 (029)-999-12-13"> 8 (029)-999-12-13</a>
          </div>
          <div className={style.social__medias}>
            <div className={style.social__media}>
              <a href="https://vk.com/" target="_blank" rel="noreferrer">
                <img src={vk} alt="vk" />
              </a>
            </div>
            <div className={style.social__media}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={fb} alt="fb" />
              </a>
            </div>
            <div className={style.social__media}>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={insta} alt="insta" />
              </a>
            </div>
            <div className={style.social__media}>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtoob} alt="youtoob" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterView;
