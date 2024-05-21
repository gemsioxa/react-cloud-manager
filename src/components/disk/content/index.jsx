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
    const [isDrag, setIsDrag] = useState(false);

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

    const dragOverHandler = (e) => {
        e.preventDefault();
        setIsDrag(true);
    };

    const dragStartHandler = (e, item) => {
        setIsDrag(true);
        props.onCreateCurrentPath(item.path);
    };

    const dragLeaveHandler = (e) => {
    };

    const dragEndHandler = (e) => {
        setIsDrag(false);
        console.log('dragend')
    };

    const onDropHandler = (e, item) => {
        e.preventDefault();
        if (item.type === 'dir') {
            props.onEndDrop(item.path);
        }
    };

    return (
        <>
            <ContextMenuTrigger id={`yandex_item_${props.item.name}`}>
                <div 
                    className={`${ContentCss.contentItem} ${props.item.type === 'dir' ? ContentCss.contentItemFolder : ContentCss.contentItemFile} draggable-zone-item`} 
                    onClick={onClickItem}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDragLeave={(e) => dragLeaveHandler(e)}
                    onDragStart={(e) => dragStartHandler(e, props.item)}
                    onDragEnd={(e) => dragEndHandler(e)}
                    onDrop={(e) => onDropHandler(e, props.item)}
                    draggable={true}
                >
                    {props.item.type === 'dir' ? <FolderIcon /> : <FileIcon />}
                    <span className={ContentCss.contentItemTitle}>
                        {props.item.name}
                    </span>
                </div>
            </ContextMenuTrigger>
            <ContextMenu style={isDrag ? {display: 'none'} : ''} className={ContentCss.context} id={`yandex_item_${props.item.name}`}>
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
    const [currentItemPath, setCurrentItemPath] = useState('');

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

    const onCreateCurrentPath = (value) => {
        setCurrentItemPath(value);
    };

    const onEndDrop = (value) => {
        // TODO: send request to yandex server
        const from_folder = currentItemPath;
        const to_folder = value;

        if (from_folder === to_folder) {
            return;
        }


        function getCommonPath(str1, str2) {
            let commonPath = '';
            const minLength = Math.min(str1.length, str2.length);
            for (let i = 0; i < minLength; i++) {
                if (str1[i] === str2[i]) {
                    commonPath += str1[i];
                } else {
                    break;
                }
            }
            return commonPath;
        }

        const commonPath = getCommonPath(from_folder, to_folder);

        const remainingPath = from_folder.substring(commonPath.length);
        const endingPath = to_folder + '/' + remainingPath;

        const data = {
            from: from_folder,
            path: endingPath
        };

        api.yandex.replaceResource(id, data)
            .then(() => {
                setIsLoadingNewPath(true);
            })
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
        <div 
            className={ContentCss.content}
        >
            {elCreateFolderModal}
            <div className={ContentCss.contentControls}>
                <div className={ContentCss.contentControlsIcon} onClick={onClickReturn}>
                    <ArrowLeftIcon />
                </div>
            </div>
            <ContextMenuTrigger id='yandex_container' className={ContentCss.contentContext}>
                <div className={ContentCss.contentContainer}>
                    {items.map((item) => {
                        return (
                            <Item 
                                key={item.resource_id} 
                                item={item} 
                                updatePath={updatePath} 
                                deleteItem={onClickDelete}
                                onCreateCurrentPath={onCreateCurrentPath}
                                onEndDrop={onEndDrop}
                            />
                        )
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
