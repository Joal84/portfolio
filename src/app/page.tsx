"use client";
import AnimatedCursor from "react-animated-cursor";
import { useEffect, useState } from "react";
import _style from "./page.module.css";
import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Card from "./components/Card";
import TechStack from "./components/TechStack";
import Info from "./components/Info";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Home() {
  const [isHover, setIsHover] = useState<number | null>(null);
  const isDesktop = useMediaQuery({ query: "(min-width: 1100px)" });

  const handleMouseEnter = (number: number) => {
    setIsHover(number);
  };
  const handleMouseLeave = () => {
    setIsHover(null);
  };

  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: false,
  });
  // Define your animation variants
  const variants = (xValue: number) => {
    return {
      hidden: { opacity: 0, x: xValue },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 50, damping: 12, delay: 0.1 },
      },
    };
  };

  useEffect(() => {
    if (inView) controls.start("visible");
    if (inView2) controls2.start("visible");
    if (inView3) controls3.start("visible");
  }, [controls, controls2, controls3, inView, inView2, inView3]);

  return (
    <main>
      {isDesktop && (
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
      )}
      <Nav inView={inView} inView2={inView2} inView3={inView3} />
      <div className={_style.line}></div>
      <Cta />
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants(-200)}
        id="about"
      >
        <div className={_style.outterWrapper}>
          <Divider title="About Me" />

          <div className={_style.aboutContainer}>
            <Info />
          </div>
          <Divider />
        </div>
      </motion.div>
      <motion.div
        ref={ref2}
        animate={controls2}
        initial="hidden"
        variants={variants(200)}
        id="projects"
      >
        <div className={_style.outterWrapper}>
          <Divider title="Projects" />

          <div className={_style.wrapperProject}>
            <p className={_style.subtext}>
              Here are some selected projects that showcase my passion for web
              development, design and AI.
            </p>

            <div className={_style.projectsContainer}>
              <Card
                image="/tick.webp"
                title="Tick-Done"
                description="tick-done is a simple and efficient grocery list progressive web application designed with a primary focus on speed, accessibility, and user-friendliness."
                git="https://github.com/Joal84/tick-done"
                www="https://tick-done.netlify.app/"
                altColor={false}
                handleMouseEnter={() => handleMouseEnter(1)}
                handleMouseLeave={handleMouseLeave}
                isBlur={isHover !== 1}
                isHover={isHover}
              />
              <Card
                image="/audio.webp"
                title="AUDIO CLASSIFIER"
                description="This application is designed for environmental audio classification and aims to assist individuals who are deaf or have severe hearing loss by focusing on environmental and urban sounds."
                git="https://github.com/Joal84/audio-class"
                altColor={true}
                handleMouseEnter={() => handleMouseEnter(2)}
                handleMouseLeave={handleMouseLeave}
                isBlur={isHover !== 2}
                isHover={isHover}
              />
              <Card
                image="/movie.webp"
                title="MOVIE RECOMMENDER"
                description="A movie recommendation website powered by an unsupervised learning non-negative matrix factorization algorithm. Provides users with personalized movie recommendations based on their viewing history and preferences."
                git="https://github.com/Joal84/movie-recommender"
                www="https://movie-recommender-joqt.onrender.com/"
                altColor={false}
                handleMouseEnter={() => handleMouseEnter(3)}
                handleMouseLeave={handleMouseLeave}
                isBlur={isHover !== 3}
                isHover={isHover}
              />
            </div>
          </div>
          <Divider />
        </div>
      </motion.div>
      <motion.div
        ref={ref3}
        animate={controls3}
        initial="hidden"
        variants={variants(-200)}
        id="tech"
      >
        <div className={_style.outterWrapperLast}>
          <Divider title="Tech Stack" />
          <div className={_style.wrapper}>
            <p className={_style.subtext}>
              Includes programming languages, frameworks, libraries, databases,
              and tools I&apos;m skilled in.
            </p>
            <TechStack />
          </div>
          <Divider />
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}
