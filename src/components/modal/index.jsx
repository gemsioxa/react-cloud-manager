import React from 'react';
import ModalCss from './Modal.module.css';

const Modal = ({ children, onClickClose, onClickSubmit }) => {
  return (
    <div className={ModalCss.modal} onClick={onClickClose}>
        <div className={ModalCss.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={ModalCss.modalContentMain}>
                {children}
            </div>
            <div className={ModalCss.modalContentControls}>
                <button 
                    className={`${ModalCss.modalContentControlsButton} ${ModalCss.modalContentControlsButtonCancel}`}
                    onClick={onClickClose}
                >
                    Cancel
                </button>
                <button 
                    className={`${ModalCss.modalContentControlsButton} ${ModalCss.modalContentControlsButtonSubmit}`}
                    onClick={onClickSubmit}
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
  );
};

export default Modal;
