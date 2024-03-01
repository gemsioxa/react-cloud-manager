import React from "react";
import HomeCss from "@/routes/home/Home.module.css";
import HomeFAQCss from './HomeFAQ.module.css';

export default function HomeFAQ(props) {
  return (
    <div className={HomeCss.homeBlock}>
      FAQ
      <div>
        <div>Что такое?</div>
        <div>
          Это универсальный менеджер облачных файлов, который позволяет Вам с
          удивительной простотой взаимодействовать с облачными дисками
        </div>
      </div>
      <div>
        <div>Как начать?</div>
        <div>
          Работает без использования баз данных, поэтому для того, чтобы начать,
          Вам необходимо подключить облачные хранилища
        </div>
      </div>
      <div>
        <div>Это безопасно?</div>
        <div>
          Работает полностью локально на Вашем устройстве, не собирает и не
          использует никакие данные в личных целях
        </div>
      </div>
    </div>
  );
}
