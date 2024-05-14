import React, { useEffect, useMemo, useState } from 'react'
import FolderIcon from '../../icon/folder'
import FileIcon from '../../icon/file'
import ContentCss from './Content.module.css'
import api from '@/api'
import { useParams } from 'react-router-dom'
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'
import ArrowLeftIcon from '../../icon/arrowLeft'
import Modal from '@/components/modal'
import Input from '@/components/ui/input'

const Item = (props) => {
    const onClickItem = () => {
        if (props.item.type === 'dir') {
            props.updatePath(props.item.name)
        }
    };

    const onClickDownload = (e, data, target) => {
        console.log(e, data, target);
    };

    const onClickDelete = () => {
        props.deleteItem(props.item.path);
    };

    return (
        <>
            <ContextMenuTrigger id={`yandex_item_${props.item.name}`}>
                <div className={`${ContentCss.contentItem} ${props.item.type === 'dir' ? ContentCss.contentItemFolder : ContentCss.contentItemFile}`} onClick={onClickItem}>
                    {props.item.type === 'dir' ? <FolderIcon /> : <FileIcon />}
                    <span className={ContentCss.contentItemTitle}>
                        {props.item.name}
                    </span>
                </div>
            </ContextMenuTrigger>
            <ContextMenu className={ContentCss.context} id={`yandex_item_${props.item.name}`}>
                {props.item.type === 'dir' && <MenuItem className={ContentCss.contextItem} onClick={onClickItem}>
                    Open
                </MenuItem>}
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}}>
                    Rename
                </MenuItem>
                <MenuItem className={`${ContentCss.contextItem} ${ContentCss.contextItemDelete}`} onClick={onClickDelete}>
                    Delete
                </MenuItem>
                {props.item.type !== 'dir' && 
                <MenuItem className={ContentCss.contextItem} onClick={onClickDownload}>
                    Download
                </MenuItem>}
            </ContextMenu>
        </>
    )
}
export default function Content() {
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [currentPath, setCurrentPath] = useState('/');
    const [isLoadingNewPath, setIsLoadingNewPath] = useState(false);
    const [isCreateFolderOpen, setIsCreateFolderOpen] = useState(false);
    const [createFolderInput, setCreateFolderInput] = useState('');

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

    const onClickDelete = (path) => {
        api.yandex.deleteResource(id, path)
            .then(() => {
                setIsLoadingNewPath(true);
            });
    };

    const updatePath = (newPath) => {
        if (!isLoadingNewPath) {
            setCurrentPath((prev) => `${prev}${newPath}/`);
        }
    }

    const handleUpdate = () => {
        setIsLoadingNewPath(true);
    }

    const handleDownload = (e, data, target) => {
        console.log(e, data, target);
    };

    const handleCreateFolder = () => {
        setIsCreateFolderOpen(true);
    };

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

    // Modal controls
    const onClickCancel = () => {
        setIsCreateFolderOpen(false);
        setCreateFolderInput('');
    };

    const onClickSubmitCreateFolder = () => {
        const newFolderPath = `${currentPath}${createFolderInput}`;
        const createFolderData = {
            path: newFolderPath,
        };

        api.yandex.putResource(id, createFolderData)
            .then(() => {
                setIsLoadingNewPath(true);
            })
            .then(() => {
                setIsCreateFolderOpen(false);
                setCreateFolderInput('');
            })
    }

    const onChangeCreateFolderInput = (value) => {
        setCreateFolderInput(value)
    };

    const elCreateFolderModal = useMemo(() => {
        if (isCreateFolderOpen) {
            return (
                <Modal onClickClose={onClickCancel} onClickSubmit={onClickSubmitCreateFolder}>
                    <h3>Create folder</h3>
                    <div>
                        <Input 
                            title={'Enter folder name'} 
                            placeholder={'New folder name'}
                            onChange={onChangeCreateFolderInput}
                            value={createFolderInput}
                        />
                    </div>
                </Modal>
            )
        }
    }, [isCreateFolderOpen, createFolderInput]);

    return (
        <div className={ContentCss.content}>
            {elCreateFolderModal}
            <div className={ContentCss.contentControls}>
                <div className={ContentCss.contentControlsIcon} onClick={onClickReturn}>
                    <ArrowLeftIcon />
                </div>
            </div>
            <ContextMenuTrigger id='yandex_container'>
                <div className={ContentCss.contentContainer}>
                    {items.map((item) => {
                        return <Item updatePath={updatePath} deleteItem={onClickDelete} key={item.resource_id} item={item} />
                    })}
                </div>
            </ContextMenuTrigger>
            <ContextMenu className={ContentCss.context} id='yandex_container'>
                <MenuItem className={ContentCss.contextItem} onClick={handleCreateFolder}>
                    Create
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleUpdate}>
                    Update
                </MenuItem>
            </ContextMenu>
        </div>
    )
}
