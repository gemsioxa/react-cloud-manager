import React from 'react'
import { useParams } from 'react-router-dom'
import DiskCss from './Disk.module.css'
import DiskUI from '@/components/disk';
import { useSelector } from 'react-redux';

export default function Disk() {
  const { id } = useParams();
  const yandexAccounts = useSelector((store) => store.accounts.accounts.yandex);
  const currentEmail = yandexAccounts.find((item) => item.token === id).email;

  return (
    <div className={DiskCss.disk}>
      <DiskUI.Controls title={currentEmail} />
      <DiskUI.Content />
    </div>
  )
}
