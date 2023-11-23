"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import _style from "./nav.module.css";

export const onClickHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    const targetScroll = element.offsetTop - 73;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }
  if (id === "beginning") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

const Greetings = dynamic(() => import("./Greetings"), {
  loading: () => <p>Loading...</p>,
});
export default function Nav({
  inViewAbout,
  inViewProjects,
  inViewTech,
}: {
  inViewAbout: boolean;
  inViewProjects: boolean;
  inViewTech: boolean;
}) {
  const [sticky, setSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const stickNavbar = useCallback(() => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 250 ? setSticky(true) : setSticky(false);
    }
  }, []);
  useEffect(() => {
    inViewAbout && setCurrentSection("about");
    inViewProjects && setCurrentSection("projects");
    inViewTech && setCurrentSection("tech");
    !inViewAbout && !inViewProjects && !inViewTech && setCurrentSection("none");
  }, [inViewAbout, inViewProjects, inViewTech, currentSection]);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  return (
    <>
      {sticky ? <div className={_style.compDiv}></div> : ""}
      <nav className={`${_style.fullNav} ${sticky && _style.sticky}`}>
        <div className={_style.background}></div>
        <div className={_style.container}>
          <div className={_style.logoContainer}>
            <Link
              href="#beginning"
              onClick={(e) => {
                onClickHandler(e, "beginning");
              }}
            >
              <h1 className={_style.logo}>João P.</h1>{" "}
            </Link>
            <div className={_style.greetings}>
              <Greetings />
            </div>
          </div>
          <ul className={_style.linkContainer}>
            <Link
              className={`${_style.link} ${
                currentSection === "about" ? _style.active : ""
              }`}
              href="#about"
              onClick={(e) => {
                onClickHandler(e, "about");
              }}
            >
              About
            </Link>
            <Link
              className={`${_style.link} ${
                currentSection === "projects" ? _style.active : ""
              }`}
              href="#projects"
              onClick={(e) => {
                onClickHandler(e, "projects");
              }}
            >
              Projects
            </Link>
            <Link
              className={`${_style.link} ${
                currentSection === "tech" ? _style.active : ""
              }`}
              href="#tech"
              onClick={(e) => {
                onClickHandler(e, "tech");
              }}
            >
              Tech Stack
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
