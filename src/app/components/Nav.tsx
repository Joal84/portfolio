"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import _style from "./nav.module.css";
import Greetings from "./Greetings";

export const onClickHandler = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  e.preventDefault();
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  } else if (id === "beginning") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

export default function Nav() {
  const [sticky, setSticky] = useState(false);
  const [currentSection, setCurrentSection] = useState<string | null>(null);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setSticky(true) : setSticky(false);
      if (windowHeight < 700) {
        setCurrentSection("none");
      }
      if (windowHeight > 700 && windowHeight < 2000) {
        setCurrentSection("about");
      }
      if (windowHeight > 2000 && windowHeight < 3000) {
        setCurrentSection("projects");
      }
      if (windowHeight > 3800) {
        setCurrentSection("tech");
      }
    }
  };

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
