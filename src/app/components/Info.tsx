import React from "react";
import _style from "./info.module.css";
import SubTitle from "./SubTitle";
import Contacts from "./Contacts";
import Spotify from "./Spotify";
import Goodreads from "./Goodreads";
export default function Info() {
  return (
    <section className={_style.container}>
      <div className={_style.info}>
        <p>
          Greetings, I&apos;m João Pinheiro, a seasoned web developer with roots
          in the Azores, Portugal, and a decade of residence in the dynamic city
          of Berlin.
        </p>
        <br />
        <p>
          In a previous chapter of my life, I was immersed in the world of
          electronic music, taking on roles as an accomplished audio engineer,
          music educator, DJ, producer, and live performer. However, my inherent
          passion for arts, design, and technology led me to a pivotal decision
          in 2020 — to embark on a programming career.
        </p>
        <br />
        <p>
          What sets me apart is my analytical acumen and a strong aptitude for
          critical thinking. I excel in the dissection of intricate challenges,
          wielding a discerning eye to transform chaos into order.
        </p>
        <br />
        <p>
          Beyond my professional pursuits, my interests encompass: IoT, A.I,
          photography, movies, manga, philosophy, comedy and video games.
        </p>
        <div className={_style.contactContainer}>
          <SubTitle title="Contacts & Downloads" />
          <Contacts />
        </div>
      </div>
      <div className={_style.mediaContainer}>
        <div className={_style.spotify}>
          <SubTitle title="What I’m Listening" />
          <Spotify />
        </div>
        <div className={_style.goodread}>
          <SubTitle title="What I’m Reading" />
          <Goodreads />
        </div>
      </div>
    </section>
  );
}
