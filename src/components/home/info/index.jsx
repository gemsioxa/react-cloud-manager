import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeInfoCss from "./HomeInfo.module.css";
import UI from "../../ui";

export default function HomeInfo(props) {
  return (
    <div className={[HomeCss.homeBlock, HomeInfoCss.container].join(" ")}>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockImage}>
          <img src="https://www.freeiconspng.com/uploads/faster-icon-png-1.png" />
        </div>
        <div className={HomeInfoCss.blockInfo}>
          <div className={HomeInfoCss.blockInfoText}>
            Some text to inspire user using this app. Some text to inspire user
            using this app.
          </div>
          <div className={HomeInfoCss.blockInfoButton}>
            <UI.Button
              title={"Узнать больше"}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockInfo}>
          <div>
            Some text to inspire user using this app. Some text to inspire user
            using this app.
          </div>
          <div className={HomeInfoCss.blockInfoButton}>
            <UI.Button
              title={"Узнать больше"}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
        <div className={HomeInfoCss.blockImage}>
          <img src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png" />
        </div>
      </div>
    </div>
  );
}
