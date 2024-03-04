import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeFAQCss from "./HomeFAQ.module.css";
import UI from "../../ui";

const options = [
  {
    title: "Что такое?",
    text: "Это универсальный менеджер облачных файлов, который позволяет Вам с удивительной простотой взаимодействовать с облачными дисками",
  },
  {
    title: "Как начать?",
    text: "Работает без использования баз данных, поэтому для того, чтобы начать, Вам необходимо подключить облачные хранилища на странице настроек",
  },
  {
    title: "Это безопасно?",
    text: "Работает полностью локально на Вашем устройстве, не собирает и не использует никакие данные в личных целях",
  },
];

export default function HomeFAQ() {
  return (
    <div id="faq" className={[HomeCss.homeBlock, HomeFAQCss.faq].join(' ')}>
      <div className={HomeFAQCss.faqTitle}>
        FAQ
      </div>
      <UI.Accordion options={options} />
    </div>
  );
}
