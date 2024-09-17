import { useRef, useEffect } from "react";
import { Button } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { InfoModal } from "./InfoModal";
import { ModalProps } from "./Modal.types";
import styles from "./Modal.module.css";

export const Modal = (props: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const size = props.size || "m";

  const handleOnClose = () => {
    modalRef.current?.close();
    props.onClose();
  };

  useEffect(() => {
    props.isOpen ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [props.isOpen]);

  return (
    <dialog
      ref={modalRef}
      className={`${styles.container} ${styles[`container--size-${size}`]}`}
    >
      <Button
        type="button"
        variant="ghost"
        size="xs"
        onClick={handleOnClose}
        className={styles.close_button}
      >
        <Icon name="close" size={16} />
      </Button>

      {props.variant === "info" && <InfoModal {...props} />}
      {typeof props.variant === "undefined" && props.children}
    </dialog>
  );
};
