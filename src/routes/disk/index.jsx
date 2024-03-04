import React from 'react'
import { useParams } from 'react-router-dom'
import DiskCss from './Disk.module.css'
import DiskUI from '@/components/disk';

export default function Disk() {
  const { id } = useParams();
  return (
    <div className={DiskCss.disk}>
      <DiskUI.Controls title={id} />
      <DiskUI.Content />
    </div>
  )
}
