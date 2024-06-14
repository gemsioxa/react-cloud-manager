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
        props.onClickDownload(data);
    };

    const onClickRename = (e, data, target) => {
        props.onClickRename(data);
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
                    Открыть
                </MenuItem>}
                <MenuItem className={ContentCss.contextItem} data={{ path: props.item.path }} onClick={onClickRename}>
                    Переименовать
                </MenuItem>
                <MenuItem className={`${ContentCss.contextItem} ${ContentCss.contextItemDelete}`} onClick={onClickDelete}>
                    Удалить
                </MenuItem>
                {props.item.type !== 'dir' && 
                <MenuItem className={ContentCss.contextItem} data={{ path: props.item.path }} onClick={onClickDownload}>
                    Скачать
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
    const [isRenameOpen, setIsRenameOpen] = useState(false);
    const [renameInput, setRenameInput] = useState('');
    const [currentRenamePath, setCurrentRenamePath] = useState('');
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
    };

    const handleUpdate = () => {
        setIsLoadingNewPath(true);
    };

    const onClickRename = (data) => {
        setCurrentRenamePath(data.path);
        setRenameInput(String(data.path).split('/').pop());
        setIsRenameOpen(true);
    };

    const onChangeRenameInput = (value) => {
        setRenameInput(value)
    };

    const onClickSubmitRename = () => {
        const newNamePath = `${currentPath}${renameInput}`;
        const renameData = {
            from: currentRenamePath,
            path: newNamePath,
        };

        api.yandex.replaceResource(id, renameData)
            .then(() => {
                setIsLoadingNewPath(true);
            })
            .then(() => {
                setIsRenameOpen(false);
                setRenameInput('');
            })
    }

    const onClickDownload = (data) => {
        api.yandex.getResourceDownload(id, data.path)
            .then((resp) => {
                console.log(resp);
                // const href = URL.createObjectURL(resp.data.href);

                const link = document.createElement('a');
                link.href = resp.data.href;
                link.setAttribute('download', `${data.path.split('/').pop()}`);
                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
                // URL.revokeObjectURL(href);

            });
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
        setIsRenameOpen(false);
        setCurrentRenamePath('');
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
                    <h3>Создание новой папки</h3>
                    <div>
                        <Input 
                            title={'Введение название'} 
                            placeholder={'Новая папки...'}
                            onChange={onChangeCreateFolderInput}
                            value={createFolderInput}
                        />
                    </div>
                </Modal>
            )
        }
    }, [isCreateFolderOpen, createFolderInput]);

    const elRenameModal = useMemo(() => {
        if (isRenameOpen) {
            return (
                <Modal onClickClose={onClickCancel} onClickSubmit={onClickSubmitRename}>
                    <h3>Переименование</h3>
                    <div>
                        <Input 
                            title={'Введение новое название'} 
                            placeholder={'Новая папки...'}
                            onChange={onChangeRenameInput}
                            value={renameInput}
                        />
                    </div>
                </Modal>
            )
        }
    }, [isRenameOpen, currentRenamePath, renameInput]);

    return (
        <div 
            className={ContentCss.content}
        >
            {elRenameModal}
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
                                onClickRename={onClickRename}
                                onClickDownload={onClickDownload}
                            />
                        )
                    })}
                </div>
            </ContextMenuTrigger>
            <ContextMenu className={ContentCss.context} id='yandex_container'>
                <MenuItem className={ContentCss.contextItem} onClick={handleCreateFolder}>
                    Создать
                </MenuItem>
                <MenuItem className={ContentCss.contextItem} data={{foo: 'some'}} onClick={handleUpdate}>
                    Обновить
                </MenuItem>
            </ContextMenu>
        </div>
    )
}
