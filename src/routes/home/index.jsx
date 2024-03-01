import React from "react";
import HomeCss from "./Home.module.css";
import HomeUI from '@/components/home';
export default function Home() {
  return (
    <div className={HomeCss.home}>
      <HomeUI.HomeName />
      <HomeUI.HomeInfo />
      <HomeUI.HomeFAQ />
    </div>
  );
}
