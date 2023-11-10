import React from "react";
import _style from "./contacts.module.css";
import Github from "../../../public/contacts/github.svg";
import Linkedin from "../../../public/contacts/linkedin.svg";
import Instagram from "../../../public/contacts/instagram.svg";
import Email from "../../../public/contacts/email.svg";
import Download from "../../../public/contacts/download.svg";
export default function Contacts() {
  return (
    <div className={_style.contactContainer}>
      <div className={_style.singleContainer}>
        <Github className={_style.icon} />
        <h3>GitHub</h3>
      </div>
      <div className={_style.singleContainer}>
        <Linkedin className={_style.icon} />
        <h3>Linkedin</h3>
      </div>
      <div className={_style.singleContainer}>
        <Instagram className={_style.icon} />
        <h3>Instagram</h3>
      </div>
      <div className={_style.singleContainer}>
        <Email className={_style.icon} />
        <h3>Email</h3>
      </div>
      <div className={_style.download}>
        <Download className={_style.icon} />
        <h3>Download CV</h3>
      </div>
    </div>
  );
}
