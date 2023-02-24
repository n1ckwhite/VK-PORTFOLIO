import styleHards from "./Hards.module.css";
import html from "../../icons/html.svg";
import css from "../../icons/css.svg";
import js from "../../icons/js.svg";
import react from "../../icons/react.svg";
import redux from "../../icons/redux.svg";
import next from "../../icons/nextjs.svg";
import node from "../../icons/nodejs.svg";
import express from "../../icons/express.svg";
import mongodb from "../../icons/mongodb.svg";
import typescript from "../../icons/typescript.svg";

export const HardsPage = () => {
  return (
    <div className={styleHards.div}>
      <ul className={styleHards.ul}>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={html} />
          <p className={styleHards.p}>HTML</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={css} />
          <p className={styleHards.p}>CSS</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={js} />
          <p className={styleHards.p}>JS</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={react} />
          <p className={styleHards.p}>React/Native</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={redux} />
          <p className={styleHards.p}>Redux/Toolkit/RQuery</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={next} />
          <p className={styleHards.p}>Next</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={node} />
          <p className={styleHards.p}>Node</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={express} />
          <p className={styleHards.p}>Express</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={mongodb} />
          <p className={styleHards.p}>MongoDB</p>
        </li>
        <li className={styleHards.li}>
          <img className={styleHards.img} src={typescript} />
          <p className={styleHards.p}>TypeScript</p>
        </li>
      </ul>
    </div>
  );
};
