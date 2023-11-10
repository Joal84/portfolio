import React from "react";
import _style from "./divider.module.css";

type Props = {
  title: string;
};

export default function Divider({ title }: Props) {
  return (
    <section className={_style.container}>
      <h2 className={_style.title}>{title}</h2>
      <div className={_style.line}></div>
    </section>
  );
}
