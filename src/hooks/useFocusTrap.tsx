import {useEffect} from "react";

const useFocusTrap = (
    dialogRef: React.RefObject<HTMLDialogElement>,
    isOpen: boolean
): void => {
    useEffect(() => {
        if (!isOpen || !dialogRef.current) return;

        const dialog = dialogRef.current;
        const focusableElements = dialog.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];
        
        const handleTabKey = (e: KeyboardEvent): void => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    e.preventDefault();
                    lastFocusableElement?.focus();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    e.preventDefault();
                    firstFocusableElement?.focus();
                }
            }
        };
        const handleKeyDown = (e: KeyboardEvent): void => {
            handleTabKey(e);
        };

        dialog.addEventListener('keydown', handleKeyDown  as EventListener);
        return () => dialog.removeEventListener('keydown', handleKeyDown as EventListener);
    }, [isOpen, dialogRef]);
};
export default useFocusTrap;