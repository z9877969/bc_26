import { useEffect } from "react";
import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalContainer = document.getElementById("modal");

const Modal = ({ title, url, toggleModal }) => {

  const handleCloseModal = (e) => {
    e.target === e.currentTarget && toggleModal();
  };

  useEffect(() => {
    const handleClose = (e) => {
      if (e.code === "Escape") {
        toggleModal();
      }
    };
    window.addEventListener("keydown", handleClose);

    return () => {
      window.removeEventListener("keydown", handleClose);
    };
  }, [toggleModal]);

  return createPortal(
    <div className={s.backdrop} onClick={handleCloseModal}>
      <h1 className={s.title}>
        <a href={url} target="_blank" rel="noreferrer">
          {title}
        </a>
      </h1>
    </div>,
    modalContainer
  );
};

export default Modal;
