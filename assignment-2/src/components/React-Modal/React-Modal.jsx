import React from "react";
import ReactModal from "react-modal";
import styles from "./React-Modal.module.css";

// Bind modal to app element
ReactModal.setAppElement("#root");

const Modal = ({ isOpen, onClose, title, children, footer }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={title}
      className={styles.modalContent}
      overlayClassName={styles.modalOverlay}
    >
      <div className={styles.header}>
        <h2>{title}</h2>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
      </div>
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </ReactModal>
  );
};

export default Modal;
