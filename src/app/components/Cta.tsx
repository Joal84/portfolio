import React from "react";
import _style from "./cta.module.css";
import { onClickHandler } from "./Nav";
import ArrowSVG from "../../../public/arrow.svg";
import Link from "next/link";

export default function Cta() {
  return (
    <div className={_style.container}>
      <header className={_style.headerTitle}>
        An adaptable web developer with a proven track record in both creative
        and technical domains.
      </header>
      <Link
        className={_style.arrow}
        href="/#about"
        aria-label="Start"
        onClick={(e) => {
          onClickHandler(e, "about");
        }}
      >
        <ArrowSVG className={_style.arrow} />
      </Link>
    </div>
  );
}
