import React from 'react'
import { useParams } from 'react-router-dom'
import DiskCss from './Disk.module.css'
import DiskYandexUI from '@/components/disk/yandex';
import { useSelector } from 'react-redux';

export default function Disk() {
  const { id } = useParams();
  const yandexAccounts = useSelector((store) => store.accounts.accounts.yandex);
  const currentEmail = yandexAccounts.find((item) => item.token === id).email;

  return (
    <div className={DiskCss.disk}>
      <DiskYandexUI.Controls title={currentEmail} />
      <DiskYandexUI.Content />
    </div>
  )
}
