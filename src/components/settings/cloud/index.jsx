import React, { useMemo, useState } from "react";
import UI from "@/components/ui";
import CloudCss from "./Cloud.module.css";
import PlusIcon from "@/components/icon/plus";
import MinusIcon from "@/components/icon/minus";
import DeleteModal from "../modal/delete";
import { useSelector } from "react-redux";

const CloudDiskPlug = () => {
  const onClickYandexAuth = () => {
    window.ipcRenderer.send('open-external-link', 'http://localhost:3000/auth-with-yandex');
  }

  return (
    <div className={CloudCss.cloudDiskPlug}>
      <div
        className={[CloudCss.cloudDiskPlugTitle, CloudCss.cloudSubHeader].join(
          " "
        )}
      >
        Подключение дисков
      </div>
      <div className={CloudCss.cloudDiskPlugList}>
        <div className={CloudCss.cloudDiskPlugListItem}>
          Google (development)
          <PlusIcon className={`${CloudCss.cloudDiskPlugListItemIcon} ${CloudCss.cloudDiskManageListItemIconDisabled}`} />
        </div>
        <div className={CloudCss.cloudDiskPlugListItem}>
          Yandex
          <PlusIcon onClick={onClickYandexAuth} className={CloudCss.cloudDiskPlugListItemIcon} />
        </div>
      </div>
    </div>
  );
};

const CloudDiskManageItem = (props) => {
  return (
    <div className={CloudCss.cloudDiskManageListItem}>
      {props.type} ({props.disk.email})
      <MinusIcon
        onClick={() => props.onClickDelete(props.disk.token)}
        className={CloudCss.cloudDiskManageListItemIcon}
      />
    </div>

  )
}
const CloudDiskManage = (props) => {
  const accounts = useSelector((store) => store.accounts);

  return (
    <>
      <div className={CloudCss.cloudDiskManage}>
        <div
          className={[
            CloudCss.cloudDiskManageTitle,
            CloudCss.cloudSubHeader,
          ].join(" ")}
        >
          Удаление дисков
        </div>
        <div className={CloudCss.cloudDiskManageList}>
          {accounts.accounts.yandex.map((item) => {
            return (
              <CloudDiskManageItem key={item.token} type={'Yandex'} disk={item} onClickDelete={props.onClickDelete} />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default function Cloud() {
  const [deleteItem, setDeleteItem] = useState(null);

  const onClickDelete = (token) => {
    setDeleteItem(token);
  };

  const onClickClose = () => {
    setDeleteItem(null);
  };

  const elDeleteModal = useMemo(() => {
    if (deleteItem) {
      return <DeleteModal id={deleteItem} token={deleteItem} onClickClose={onClickClose} />;
    }
  }, [deleteItem]);

  return (
    <>
      {elDeleteModal}
      <UI.Container className={CloudCss.container}>
        <div className={CloudCss.cloud}>
          <div className={CloudCss.cloudHeader}>Управление дисками</div>
          <div className={CloudCss.cloudContent}>
            <CloudDiskPlug />
            <CloudDiskManage
              onClickDelete={onClickDelete}
              onClickClose={onClickClose}
              deleteItem={deleteItem}
              setDeleteItem={setDeleteItem}
            />
          </div>
        </div>
      </UI.Container>
    </>
  );
}
