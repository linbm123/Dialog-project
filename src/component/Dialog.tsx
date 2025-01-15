import { createPortal } from "react-dom";
import { CSSProperties, ReactNode, useContext, useEffect, useRef } from "react";
import useFocusTrap from "../hooks/useFocusTrap.tsx";
import { DialogContext } from "./DialogContext.tsx";
import useFocusHistory from "../hooks/useFocusHistory.tsx";

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentId: string;
  isModal?: boolean;
  style?: CSSProperties;
  backdropStyle?: CSSProperties; 
};

const Dialog = ({
  isOpen,
  onClose,
  children,
  contentId,
  isModal = false,
  style = {},
  backdropStyle = {},
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogMangment = useContext(DialogContext);

  useFocusTrap(dialogRef, isOpen);
  useFocusHistory(isOpen, dialogRef);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  if (!isOpen) return null;

  const dialog = (
    <>
      <div
        onClick={onClose}
        style={{
          position: isModal ? "fixed" : "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.1)",
          ...backdropStyle,
        }}
      />
      <dialog
        ref={dialogRef}
        open
        aria-modal={isModal}
        role="dialog"
        aria-labelledby={contentId}
        onClick={(e: React.MouseEvent): void => e.stopPropagation()}
        style={{
          position: isModal ? "fixed" : "absolute",
          ...style,
        }}
      >
        {children}
      </dialog>
    </>
  );

  return createPortal(
    dialog,
    dialogMangment?.dialogRef?.current || document.body
  );
};

export default Dialog;
