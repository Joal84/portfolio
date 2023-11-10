"use client";
import _styles from "./page.module.css";
import Cta from "./components/Cta";
import Divider from "./components/Divider";
import Info from "./components/Info";
export default function Home() {
  return (
    <main>
      <Cta />
      <Divider title="About Me" />
      <div className={_styles.image}></div>
      <div className={_styles.backgroundAbout}>
        <div className={_styles.aboutContainer}>
          <Info />
        </div>
      </div>
      <Divider title="Projects" />
      <Divider title="Tech Stack" />
    </main>
  );
}
