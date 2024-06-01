import React from "react";
import DeleteCss from "./DeleteModal.module.css";
import UI from "@/components/ui";
import { useDispatch } from "react-redux";
import { deleteDiskItem } from "../../../../store/accountsSlice";

export default function DeleteModal(props) {
  const dispatch = useDispatch();
  const onClickSubmit = () => {
    console.log("onClickSubmit");
    dispatch(deleteDiskItem(props.token));
    props.onClickClose();
  };

  const onClickBackground = (e) => {
    if (e.currentTarget === e.target) {
      props.onClickClose();
    }
  };

  return (
    <div className={DeleteCss.background} onClick={onClickBackground}>
      <UI.Container className={DeleteCss.delete}>
        <div className={DeleteCss.deleteHeader}>Удаление диска</div>
        <div className={DeleteCss.deleteMain}>
          Вы уверены, что хотите удалить диск из списка добавленных? Данное
          действие <span>невозможно</span> будет отменить.
        </div>
        <div className={DeleteCss.deleteControls}>
          <UI.Button onClick={props.onClickClose} isSecondary>Отмена</UI.Button>
          <UI.Button onClick={onClickSubmit}>Удалить</UI.Button>
        </div>
      </UI.Container>
    </div>
  );
}
