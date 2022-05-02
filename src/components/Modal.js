import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, closeModal }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed back-drop-modal w-screen z-50 top-0 left-0 h-screen justify-center items-center flex align-middle"
      onClick={closeModal}
    >
      <div className="z-10">{children}</div>
    </div>,
    document.querySelector("#backdrop-modal-root")
  );
};

export default Modal;
