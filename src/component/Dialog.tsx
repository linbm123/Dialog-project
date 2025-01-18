import { createPortal } from "react-dom";
import { ReactNode, useContext, useEffect, useRef } from "react";
import useFocusTrap from "../hooks/useFocusTrap.tsx";
import { DialogContext } from "./DialogContext.tsx";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentId: string;
  isModal?: boolean;
  className?: string;
  backdropClassName?: string;
};

const Dialog = ({
  isOpen,
  onClose,
  children,
  contentId,
  isModal = false,
  className = "",
  backdropClassName = "",
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogMangment = useContext(DialogContext);

  useFocusTrap(dialogRef, isOpen);

  useEffect(() => {
    if (!dialogRef.current) {
      return;
    }

    const dialogElement = dialogRef.current;

    if (!isOpen) {
      dialogElement.close();
      return;
    }

    dialogElement.showModal();

    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleBackdropClick = (e: MouseEvent): void => {
      if (e.target === dialogElement) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    dialogElement.addEventListener("click", handleBackdropClick);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      dialogElement.removeEventListener("click", handleBackdropClick);
    };
  }, [isOpen]);

  const dialog = (
    <dialog
      ref={dialogRef}
      aria-modal={isModal}
      role="dialog"
      aria-labelledby={contentId}
      onClick={(e: React.MouseEvent): void => e.stopPropagation()}
      className={`${className} ${backdropClassName}`}
    >
      {children}
    </dialog>
  );

  return createPortal(
    dialog,
    dialogMangment?.dialogRef?.current || document.body
  );
};

export default Dialog;
