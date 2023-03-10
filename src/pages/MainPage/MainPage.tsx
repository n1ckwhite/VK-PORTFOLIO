import styleMain from "./MainPage.module.css";
import lct from "../../icons/hack_lct.png";
import hack from "../../icons/hack_dobra.png";
import timepad from "../../icons/timepad.png";
import tg from "../../icons/tg.svg";
import hh from "../../icons/hh.png";
import git from "../../icons/git.svg";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export const MainPage = () => {
  const imgs = [lct, hack, timepad];
  const [modalActive, setModalActive] = useState(false);
  const [srcImage, setSrcImage] = useState("");
  const handleModal = (e: Event) => {
    const target = e.target as HTMLImageElement;
    setModalActive(true);
    setSrcImage(target.src);
  };

  const closeModal = () => {
    setSrcImage("");
    setModalActive(false);
  };

  return (
    <div className={styleMain.main}>
      <div className={styleMain.profile}>
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/618c0b65424070a1017a7168ea1b6337/razer-wallpapers-page-hero-mobile.jpg"
          className={styleMain.bg}
        />
        <div className={styleMain.about}>
          <img
            className={styleMain.img}
            src="https://avatars.githubusercontent.com/u/100159537?v=4"
          />
          <div className={styleMain.text}>
            <p className={styleMain.name}>Ник Уайт</p>
            <p className={styleMain.descr}>Научился программировать на HTML</p>
            <div className={styleMain.flex}>
              <p className={styleMain.city}>Москва</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styleMain.bords}>
        <div className={styleMain.serts}>
          <p className={styleMain.sertsText}>Сертификаты</p>
          <ul className={styleMain.sertsFlex}>
            {imgs.map((image) => {
              return (
                <li className={styleMain.image} key={image}>
                  <img
                    onClick={(e: never) => handleModal(e)}
                    className={styleMain.icon}
                    src={image}
                  />
                  <Modal
                    image={srcImage}
                    closeModal={closeModal}
                    isActive={modalActive}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styleMain.links}>
          <p className={styleMain.link}>Ссылки</p>
          <ul className={styleMain.ul}>
            <li className={styleMain.li}>
              <a
                href="https://t.me/iamceob1tchnpm "
                target="_blank"
                className={styleMain.socialLink}
              >
                <img className={styleMain.liIcon} src={tg} />
                <p className={styleMain.social}>Telegram</p>
              </a>
            </li>
            <li className={styleMain.li}>
              <a
                href="https://hh.ru/resume/9f918089ff09d66fcb0039ed1f4a7777707874"
                target="_blank"
                className={styleMain.socialLink}
              >
                <img className={styleMain.liIcon} src={hh} />
                <p className={styleMain.social}>HH</p>
              </a>
            </li>
            <li className={styleMain.li}>
              <a
                href="https://github.com/n1ckwhite"
                target="_blank"
                className={styleMain.socialLink}
              >
                <img className={styleMain.liIcon} src={git} />
                <p className={styleMain.social}>GitHub</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styleMain.commentary}>
        <div className={styleMain.commentaryProf}>
          <img
            className={styleMain.profImg}
            src="https://avatars.githubusercontent.com/u/100159537?v=4"
          />
          <p className={styleMain.profName}>Ник Уайт</p>
        </div>
        <p className={styleMain.profDescr}>
          Старший студент Яндекс Практикума.
          <br />
          Вот мои последние проекты:
          <span className={styleMain.projectText}>
            <a
              className={styleMain.linkProject}
              href="https://github.com/n1ckwhite/React-Burger"
              target="_blank"
            >
              Звездный бургер
            </a>
          </span>
          <span className={styleMain.projectText}>
            <a
              className={styleMain.linkProject}
              href="https://github.com/n1ckwhite/service-for-customs"
              target="_blank"
            >
              Сервис по выявлению перспективных ниш для Правительства Москвы
            </a>
          </span>
          <span className={styleMain.projectText}>
            <a
              className={styleMain.linkProject}
              href="https://github.com/n1ckwhite/Liza-project"
              target="_blank"
            >
              НКО Лиза Алерт
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};
