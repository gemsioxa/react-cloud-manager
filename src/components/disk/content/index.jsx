import React, { useEffect, useState } from 'react'
import FolderIcon from '../../icon/folder'
import FileIcon from '../../icon/file'
import ContentCss from './Content.module.css'
import api from '@/api'
import { useParams } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className={ContentCss.contentItem}>
            {props.item.type === 'dir' ? <FolderIcon /> : <FileIcon />}
            {props.item.name}
        </div>
    )
}
export default function Content(props) {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    useEffect(() => {
        api.yandex.getResource(id, '/')
            .then((resp) => {
                setItems(resp.data._embedded.items);
            })
    }, [id])
  return (
    <div className={ContentCss.content}>
        {items.map((item) => {
            return <Item key={item.resource_id} item={item} />
        })}
    </div>
  )
}
