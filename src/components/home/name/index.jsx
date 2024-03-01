import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeNameCss from './HomeName.module.css';

export default function HomeName(props) {
  return (
    <div className={[HomeCss.homeBlock, HomeNameCss.name].join(' ')}>
        <div className={HomeNameCss.nameTitle}>
          Cloud manager
        </div>
        <div className={HomeNameCss.nameImage}>
          <img className={HomeNameCss.nameImageItem} src="https://cdn-icons-png.flaticon.com/512/1000/1000953.png" />
        </div>
    </div>
  );
}
