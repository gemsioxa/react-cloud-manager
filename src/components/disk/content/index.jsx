import React, { useEffect, useState } from 'react'
import FolderIcon from '../../icon/folder'
import FileIcon from '../../icon/file'
import ContentCss from './Content.module.css'
import api from '@/api'
import { useParams } from 'react-router-dom'
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import ArrowLeftIcon from '../../icon/arrowLeft'

const Item = (props) => {
    const onClickItem = () => {
        if (props.item.type === 'dir') {
            props.updatePath(props.item.name)
        }
    };

    return (
        <ContextMenuTrigger id='yandex_item'>
            <div className={`${ContentCss.contentItem} ${props.item.type === 'dir' ? ContentCss.contentItemFolder : ContentCss.contentItemFile}`} onClick={onClickItem}>
                {props.item.type === 'dir' ? <FolderIcon /> : <FileIcon />}
                <span className={ContentCss.contentItemTitle}>
                    {props.item.name}
                </span>
            </div>
        </ContextMenuTrigger>
    )
}
export default function Content(props) {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [currentPath, setCurrentPath] = useState('/');
    const [isLoadingNewPath, setIsLoadingNewPath] = useState(false);

    useEffect(() => {
        if (isLoadingNewPath) {
            api.yandex.getResource(id, currentPath)
                .then((resp) => {
                    setItems(resp.data._embedded.items);
                    setIsLoadingNewPath(false);
                })
                .catch(() => {
                    setIsLoadingNewPath(false);
                });
        }
    }, [isLoadingNewPath]);

    useEffect(() => {
        setIsLoadingNewPath(true);
    }, [currentPath]);

    useEffect(() => {
        if (currentPath === '/') {
            setIsLoadingNewPath(true);
        } else {
            setCurrentPath('/');
        }
    }, [id]);

    const updatePath = (newPath) => {
        if (!isLoadingNewPath) {
            setCurrentPath((prev) => `${prev}${newPath}/`);
        }
    }

    const handleDownload = (e, data, target) => {
        console.log(e, data, target);
    };

    const handleUpdate = () => {
        setIsLoadingNewPath(true);
    }

    const onClickReturn = () => {
        if (!isLoadingNewPath) {
            const newPath = currentPath.split('/');
            const pathLength = newPath.length;

            if (pathLength <= 3) {
                setCurrentPath('/');
            }
            if (pathLength >= 4) {
                newPath.pop();
                newPath.pop();
                setCurrentPath(newPath.join('/') + '/');
            }
        }
    };

    return (
        <div className={ContentCss.content}>
            <div className={ContentCss.contentControls}>
                <div className={ContentCss.contentControlsIcon} onClick={onClickReturn}>
                    <ArrowLeftIcon />
                </div>
            </div>
            <ContextMenuTrigger id='yandex_container'>
                <div className={ContentCss.contentContainer}>
                    {items.map((item) => {
                        return <Item updatePath={updatePath} key={item.resource_id} item={item} />
                    })}
                </div>
            </ContextMenuTrigger>
            <ContextMenu className={ContentCss.context} id='yandex_item'>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Open
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Rename
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Get info
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Delete
                </MenuItem>
            </ContextMenu>
            <ContextMenu className={ContentCss.context} id='yandex_container'>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Create folder
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleUpdate}>
                    Update
                </MenuItem>
                <MenuItem divider />
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleDownload}>
                    Get info
                </MenuItem>
            </ContextMenu>
        </div>
    )
}
