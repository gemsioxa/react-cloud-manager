import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeInfoCss from "./HomeInfo.module.css";
import UI from "../../ui";
import RocketIcon from "@/components/icon/rocket";
import LockIcon from "@/components/icon/lock";

export default function HomeInfo(props) {
  return (
    <div className={[HomeCss.homeBlock, HomeInfoCss.container].join(" ")}>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockImage}>
          <RocketIcon />
        </div>
        <div className={HomeInfoCss.blockInfo}>
          <div className={HomeInfoCss.blockInfoText}>
            <div>
              <b>Быстрый</b>
            </div>
            Быстрая работа приложения основана на том, что используется прямое взаимодействие с удаленным сервером хранилища без посредников.
          </div>
          <div className={HomeInfoCss.blockInfoButton}>
            <a href="#faq">
              <UI.Button
                title={"Узнать больше"}
                onClick={() => console.log("clicked")}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockInfo}>
          <div className={HomeInfoCss.blockInfoText}>
            <div>
              <b>Безопасность</b>
            </div>
            Приложение не собирает никакие данные пользователя, а все операции с файлами и диском происходят напрямую с облачным хранилищем.
          </div>
          <div className={HomeInfoCss.blockInfoButton}>
            <a href="#faq">
              <UI.Button
                title={"Узнать больше"}
                onClick={() => console.log("clicked")}
              />
            </a>
          </div>
        </div>
        <div className={HomeInfoCss.blockImage}>
          <LockIcon />
        </div>
      </div>
    </div>
  );
}
