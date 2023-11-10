import React from "react";
import Image from "next/image";
import _style from "./goodreads.module.css";
export default function Goodreads() {
  return (
    <div>
      <div id="gr_custom_widget_1699617444">
        <div className={_style.gr_custom_container_1699617444}>
          <div className={_style.gr_custom_each_container_1699617444}>
            <div className={_style.gr_custom_book_container_1699617444}>
              <a
                title="The Name of the Wind (The Kingkiller Chronicle, #1)"
                rel="nofollow"
                href="https://www.goodreads.com/review/show/5905636243?utm_medium=api&amp;utm_source=custom_widget"
              >
                <Image
                  width={80}
                  height={120}
                  alt="The Name of the Wind"
                  src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1270352123l/186074._SX50_.jpg"
                />
              </a>
            </div>
            <div className={_style.gr_custom_title_1699617444}>
              <a
                rel="nofollow"
                href="https://www.goodreads.com/review/show/5905636243?utm_medium=api&amp;utm_source=custom_widget"
              >
                The Name of the Wind
              </a>
            </div>
            <div className={_style.gr_custom_author_1699617444}>
              by{" "}
              <a
                rel="nofollow"
                href="https://www.goodreads.com/author/show/108424.Patrick_Rothfuss"
              >
                Patrick Rothfuss
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
