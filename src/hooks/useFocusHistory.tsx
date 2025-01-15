import { useEffect, useRef } from "react";

const useFocusHistory = (
  isOpen: boolean,
  dialogRef: React.RefObject<HTMLDialogElement>
): void => {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Save the previously focused element before opening the dialog
      if (document.activeElement instanceof HTMLElement) {
        previousFocusRef.current = document.activeElement;
      }

      // Focus the dialog element or the first focusable child
      requestAnimationFrame(() => {
        if (dialogRef.current) {
          const firstFocusable = dialogRef.current.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );

          if (firstFocusable) {
            firstFocusable.focus();
          } else {
            dialogRef.current.focus(); // Fallback to the dialog element
          }
        }
      });
    } else if (previousFocusRef.current) {
      // Restore focus to the previously focused element when the dialog closes
      previousFocusRef.current.focus();
    }
  }, [isOpen, dialogRef]);
};

export default useFocusHistory;
