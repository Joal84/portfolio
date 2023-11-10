import React from "react";
import _styles from "./cta.module.css";

import ArrowSVG from "../../../public/arrow.svg";

export default function Cta() {
  return (
    <div className={_styles.container}>
      <header className={_styles.headerTitle}>
        An adaptable web developer with a proven track record in both creative
        and technical domains.
      </header>

      <ArrowSVG className={_styles.arrow} />
    </div>
  );
}
