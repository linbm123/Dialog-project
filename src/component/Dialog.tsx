import { createPortal } from "react-dom";
import { ReactNode, RefObject, useContext, useEffect, useRef } from "react";
import useFocusTrap from "../hooks/useFocusTrap.tsx";
import { DialogContext } from "./DialogContext.tsx";
import useFocusHistory from "../hooks/useFocusHistory.tsx";
type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  contentId: string;
  isModal?: boolean;
  initialFocusRef?: RefObject<HTMLElement>;
  customClasses?: string;
};

const Dialog = ({
  isOpen,
  onClose,
  children,
  contentId,
  isModal = false,
  initialFocusRef,
}: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogMangment = useContext(DialogContext);
  useFocusTrap(dialogRef, isOpen);
  useFocusHistory(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      const firstFocusable = dialogRef.current?.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      firstFocusable?.focus();
    }

    document.addEventListener(
      "keydown",
      handleEscape as unknown as EventListener
    );
    return () =>
      document.removeEventListener(
        "keydown",
        handleEscape as unknown as EventListener
      );
  }, [isOpen, onClose, initialFocusRef]);

  if (!isOpen) return null;

  const dialog = (
    <>
      <div
        onClick={onClose}
        // className={cn(
        //     "inset-0 bg-black/50", // Added opacity with /50
        //     isModal ? 'fixed' : 'absolute',
        //     "z-50", // Ensure it's above other content
        //     customClasses
        // )}
        style={{
          position: isModal ? "fixed" : "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.1)",
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
        }}
      >
        {children}
      </dialog>
    </>
  );

  return createPortal(dialog, dialogMangment.dialogRef.current);
};
export default Dialog;
