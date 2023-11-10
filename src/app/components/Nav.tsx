"use client";
import { useEffect, useState } from "react";
import _style from "./nav.module.css";

export default function Nav() {
  const [sticky, setSticky] = useState(false);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 200 ? setSticky(true) : setSticky(false);
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
            <h1 className={_style.logo}>João P.</h1>
            <div className={_style.greetings}>Good Afternoon</div>
          </div>
          <ul className={_style.linkContainer}>
            <li className={_style.link}>About</li>
            <li className={_style.link}>Projects</li>
            <li className={_style.link}>Tech Stack</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
