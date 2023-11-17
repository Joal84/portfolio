import React from "react";
import _style from "./contacts.module.css";
import Github from "../../../public/contacts/github.svg";
import Linkedin from "../../../public/contacts/linkedin.svg";
import Instagram from "../../../public/contacts/instagram.svg";
import Email from "../../../public/contacts/email.svg";
import Download from "../../../public/contacts/download.svg";

type Props = {
  footer: boolean;
};

export default function Contacts({ footer }: Props) {
  return (
    <div className={_style.contactContainer}>
      <a href="https://github.com/Joal84" target="_blank">
        <div className={_style.singleContainer}>
          <Github className={`${_style.icon} ${footer && _style.icon_small}`} />
          {footer || <h3>GitHub</h3>}
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-pinheiro-50a169210/"
        target="_blank"
      >
        <div className={_style.singleContainer}>
          <Linkedin
            className={`${_style.icon} ${footer && _style.icon_small}`}
          />
          {footer || <h3>Linkedin</h3>}
        </div>
      </a>
      <a href="https://www.instagram.com/joal_insta/" target="_blank">
        <div className={_style.singleContainer}>
          <Instagram
            className={`${_style.icon} ${footer && _style.icon_small}`}
          />
          {footer || <h3>Instagram</h3>}
        </div>
      </a>
      <a href="mailto: joalmonog@gmail.com" target="_blank">
        <div className={_style.singleContainer}>
          <Email className={`${_style.icon} ${footer && _style.icon_small}`} />
          {footer || <h3>Email</h3>}
        </div>
      </a>
      {footer ? (
        ""
      ) : (
        <a
          href="https://1drv.ms/b/s!Ai-njtIr98M2gvw-fG4tE0JZ2qHiSA?e=CfzWi9"
          target="_blank"
        >
          <div className={_style.download}>
            <Download className={_style.icon} />
            <h3>Download CV</h3>
          </div>
        </a>
      )}
    </div>
  );
}
