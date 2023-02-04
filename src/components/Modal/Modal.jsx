import React, { useRef } from "react";
import './modal.css';

export const Modal = ({ modal, setModal, children, modalTitle }) => {
    const overlayRef = useRef();

    const handleOverlay = (evt) => {
        if (evt.target === overlayRef.current) {
            setModal(false)
        }
    }

    return (
        <div className={`overlay ${modal ? 'open' : ''}`} ref={overlayRef} onClick={(evt) => handleOverlay(evt)}>
            <div className="modal-inner">
                <button onClick={() => setModal(false)} className="btn btn-dark close-modal">&times;</button>
                <div className="modal-header">
                    <h3>{modalTitle}</h3>
                </div>
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    )
}