import React from "react";
import _style from "./subtitle.module.css";

type Params = {
  title: string;
};

export default function SubTitle({ title }: Params) {
  return <h2 className={_style.title}>{title}</h2>;
}
