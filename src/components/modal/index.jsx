import React from 'react';
import ModalCss from './Modal.module.css';
import UI from "@/components/ui";

const Modal = ({ children, onClickClose, onClickSubmit }) => {
  return (
    <div className={ModalCss.modal} onClick={onClickClose}>
        <div className={ModalCss.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={ModalCss.modalContentMain}>
                {children}
            </div>
            <div className={ModalCss.modalContentControls}>
                <UI.Button
                    onClick={onClickClose}
                    isSecondary
                >
                    Отменить
                </UI.Button>
                <UI.Button
                    onClick={onClickSubmit}
                >
                    Создать
                </UI.Button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
