"use client";
import AnimatedCursor from "react-animated-cursor";
import { motion } from "framer-motion";
import _style from "./page.module.css";
import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Card from "./components/Card";
import TechStack from "./components/TechStack";
import LazyLoader from "./components/LazyLoader";
//import Info from "./components/Info";
import dynamic from "next/dynamic";

const Info = dynamic(() => import("./components/Info"), {
  loading: () => <p>Loading...</p>,
});

export default function Home() {
  return (
    <main>
      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color="241, 244, 70"
        outerAlpha={0.4}
        innerScale={2}
        outerScale={6}
        trailingSpeed={4}
        clickables={[
          "a",
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <div className={_style.line}></div>
      <Cta />
      <Divider title="About Me" id="about" />
      <div className={_style.image}></div>
      <div className={_style.backgroundAbout}>
        <div className={_style.aboutContainer}>
          <LazyLoader>
            <motion.div
              initial={{ x: "-40%" }}
              animate={{ x: "0%" }}
              transition={{ duration: 1.6, type: "spring" }}
            >
              <Info />
            </motion.div>
          </LazyLoader>
        </div>
      </div>

      <Divider
        title="Projects"
        infoText="Here are some selected projects that showcase my passion for web development, design and AI."
        id="projects"
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
        id="tech"
        title="Tech Stack"
        infoText="Includes programming languages, frameworks, libraries, databases, and tools I’m skilled in."
      />
      <TechStack />
    </main>
  );
}
