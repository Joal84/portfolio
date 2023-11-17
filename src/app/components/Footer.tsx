"use client";
import React from "react";
import _style from "./footer.module.css";
import Contacts from "./Contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={_style.background}>
      <div className={_style.container}>
        <div className={_style.copy}>
          {`© ${year} by João Alvim P. All rights reserved.`}
        </div>
        <Contacts footer={true} />
      </div>
    </div>
  );
}
