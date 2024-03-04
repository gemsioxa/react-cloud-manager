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
              <b>Fast</b>
            </div>
            Some text to inspire user using this app. Some text to inspire user
            using this app.
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
              <b>Secure</b>
            </div>
            Some text to inspire user using this app. Some text to inspire user
            using this app.
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
