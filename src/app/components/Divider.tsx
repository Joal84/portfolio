import React from "react";
import _style from "./divider.module.css";

type Props = {
  title: string;
  infoText?: string;
  id: string;
};

export default function Divider({ title, infoText, id }: Props) {
  return (
    <>
      <section className={_style.container} id={id}>
        <h2 className={_style.title}>{title}</h2>
        <div className={_style.line}></div>
      </section>
      <p className={`${_style.container} ${_style.infoText}`}>{infoText}</p>
    </>
  );
}
