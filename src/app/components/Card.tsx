import { useState } from "react";
import Image from "next/image";
import _style from "./card.module.css";
import SubTitle from "./SubTitle";
import Github from "../../../public/contacts/github.svg";
import Www from "../../../public/www.svg";

type Props = {
  image: string;
  title: string;
  description: string;
  git: string;
  www?: string;
  altColor: boolean;
  handleMouseLeave: React.MouseEventHandler<HTMLDivElement>;
  handleMouseEnter: React.MouseEventHandler<HTMLDivElement>;
  isBlur: boolean;
  isHover: number | null;
};

export default function Card({
  image,
  title,
  description,
  git,
  www,
  altColor,
  handleMouseLeave,
  handleMouseEnter,
  isBlur,
  isHover,
}: Props) {
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${isBlur && isHover ? _style.blur : _style.empty}`}
    >
      <article
        className={`${_style.cardContainer} ${
          altColor ? _style.altColorContainer : ""
        }`}
      >
        <Image
          className={_style.image}
          src={image}
          width={430}
          height={500}
          alt={`${title} image`}
        />
        <div className={_style.title}>
          <SubTitle title={title} />
        </div>
        <summary className={_style.description}>{description}</summary>
        <div className={_style.links}>
          {git ? (
            <a href={git} target="_blank" className={_style.icon_container}>
              <Github aria-label="github icon" className={_style.icons} />
              <h3>Github</h3>
            </a>
          ) : (
            ""
          )}

          {www ? (
            <a href={www} target="_blank" className={_style.icon_container}>
              <Www
                aria-label="World wide web icon"
                className={_style.iconWww}
              />
              <h3>Live Demo</h3>
            </a>
          ) : (
            ""
          )}
        </div>
      </article>
    </div>
  );
}
