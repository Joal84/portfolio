"use client";
import _style from "./page.module.css";
import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Info from "./components/Info";
import Card from "./components/Card";

export default function Home() {
  return (
    <main>
      <Cta />
      <Divider title="About Me" />
      <div className={_style.image}></div>
      <div className={_style.backgroundAbout}>
        <div className={_style.aboutContainer}>
          <Info />
        </div>
      </div>
      <Divider
        title="Projects"
        infoText="Here are some selected projects that showcase my passion for web development, design and AI."
      />
      <div className={_style.projectsContainer}>
        <Card
          image="/tick.webp"
          title="Tick-Done"
          description="tick-done is a simple and efficient grocery list progressive web application designed with a primary focus on speed, accessibility, and user-friendliness."
          git="https://github.com/Joal84/tick-done"
          www="https://tick-done.netlify.app/"
          altColor={false}
        />
        <Card
          image="/audio.webp"
          title="AUDIO CLASSIFIER"
          description="This application is designed for environmental audio classification and aims to assist individuals who are deaf or have severe hearing loss by focusing on environmental and urban sounds."
          git="https://github.com/Joal84/audio-class"
          altColor={true}
        />
        <Card
          image="/movie.webp"
          title="MOVIE RECOMMENDER"
          description="A movie recommendation website powered by an unsupervised learning non-negative matrix factorization algorithm. This project provides users with personalized movie recommendations based on their viewing history and preferences."
          git="https://github.com/Joal84/movie-recommender"
          www="https://movie-recommender-joqt.onrender.com/"
          altColor={false}
        />
      </div>
      <Divider
        title="Tech Stack"
        infoText="Includes programming languages, frameworks, libraries, databases, and tools I’m skilled in."
      />
    </main>
  );
}
