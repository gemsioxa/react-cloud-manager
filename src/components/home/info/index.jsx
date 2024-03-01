import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeInfoCss from './HomeInfo.module.css';

export default function HomeInfo(props) {
  return (
    <div className={[HomeCss.homeBlock, HomeInfoCss.container].join(' ')}>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockImage}>
          <img src="https://www.freeiconspng.com/uploads/faster-icon-png-1.png" />
        </div>
        <div className={HomeInfoCss.blockInfo}>
          Fast
        </div>
      </div>
      <div className={HomeInfoCss.block}>
        <div className={HomeInfoCss.blockInfo}>
          Secure
        </div>
        <div className={HomeInfoCss.blockImage}>
          <img src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png" />
        </div>
      </div>
    </div>
  );
}
