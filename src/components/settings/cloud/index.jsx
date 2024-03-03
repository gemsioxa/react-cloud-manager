import React, { useMemo, useState } from "react";
import UI from "@/components/ui";
import CloudCss from "./Cloud.module.css";
import PlusIcon from "@/components/icon/plus";
import MinusIcon from "@/components/icon/minus";
import DeleteModal from "../modal/delete";

const CloudDiskPlug = () => {
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
          Google
          <PlusIcon className={CloudCss.cloudDiskPlugListItemIcon} />
        </div>
        <div className={CloudCss.cloudDiskPlugListItem}>
          Yandex
          <PlusIcon className={CloudCss.cloudDiskPlugListItemIcon} />
        </div>
      </div>
    </div>
  );
};

const CloudDiskManage = (props) => {
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
          <div className={CloudCss.cloudDiskManageListItem}>
            Google (googleacc)
            <MinusIcon
              onClick={() => props.onClickDelete(1)}
              className={CloudCss.cloudDiskManageListItemIcon}
            />
          </div>
          <div className={CloudCss.cloudDiskManageListItem}>
            Yandex (testacc)
            <MinusIcon
              onClick={() => props.onClickDelete(2)}
              className={CloudCss.cloudDiskManageListItemIcon}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default function Cloud() {
  const [deleteItem, setDeleteItem] = useState(null);

  const onClickDelete = (id) => {
    setDeleteItem(id);
  };

  const onClickClose = () => {
    setDeleteItem(null);
  };

  const elDeleteModal = useMemo(() => {
    if (deleteItem) {
      return <DeleteModal id={deleteItem} onClickClose={onClickClose} />;
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
