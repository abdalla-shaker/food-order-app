import { useRef, useImperativeHandle, forwardRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modal.current.showModal();
      },

      close() {
        modal.current.close();
      },
    };
  });

  return createPortal(
    <dialog ref={modal} className="modal">
      {children}
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
