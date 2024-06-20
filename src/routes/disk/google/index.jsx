import React from 'react'
import { useParams } from 'react-router-dom'
import DiskCss from './Disk.module.css'
import DiskGoogleUI from '@/components/disk/google';
import { useSelector } from 'react-redux';

export default function DiskGoogle() {
  const { id } = useParams();
  const googleAccounts = useSelector((store) => store.accounts.accounts.google);
  const currentEmail = googleAccounts.find((item) => item.token === id).email.split('@')[0];

  return (
    <div className={DiskCss.disk}>
      <DiskGoogleUI.Controls title={currentEmail} />
      <DiskGoogleUI.Content />
    </div>
  )
}
