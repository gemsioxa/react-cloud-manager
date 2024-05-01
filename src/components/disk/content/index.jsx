import React, { useEffect, useState } from 'react'
import FolderIcon from '../../icon/folder'
import ContentCss from './Content.module.css'
import api from '@/api'
import { useParams } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className={ContentCss.contentItem}>
            <FolderIcon />
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
    }, [])
  return (
    <div className={ContentCss.content}>
        {items.map((item) => {
            return <Item item={item} />
        })}
    </div>
  )
}
