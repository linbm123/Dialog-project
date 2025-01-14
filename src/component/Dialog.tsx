import {createPortal} from "react-dom";
import {ReactNode, RefObject, useEffect, useRef} from "react";
import useFocusTrap from "../hooks/useFocusTrap.tsx";
import useFocusHistory from "../hooks/useFocusHistory.tsx";
type DialogProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    contentId: string;
    isModal?: boolean;
    initialFocusRef?: RefObject<HTMLElement>;
    customClasses?: string;
}

const Dialog = ({
                    isOpen,
                    onClose,
                    children,
                    contentId,
                    isModal = false,
                    initialFocusRef,
                }: DialogProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    useFocusTrap(dialogRef, isOpen);
    useFocusHistory(isOpen);

    useEffect(() => {
        if (!isOpen) return;

        const focusTimer = requestAnimationFrame(() => {
            if (initialFocusRef?.current) {
                initialFocusRef.current.focus();
            } else if (dialogRef.current) {
                const firstFocusable = dialogRef.current.querySelector<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                firstFocusable?.focus();
            }
        });
        const handleEscape = (e: KeyboardEvent): void => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape as unknown as EventListener);

        return () => {
            cancelAnimationFrame(focusTimer);
            document.removeEventListener('keydown', handleEscape as unknown as EventListener);
        };
    }, [isOpen, onClose, initialFocusRef]);

    if (!isOpen) return null;

    const dialog = (
        <>
            <div
                onClick={onClose}
                style={{
                    position: isModal ? 'fixed' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0, 0, 0, 0.1)',
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
                    position: isModal ? 'fixed' : 'absolute',
                }}
            >
                {children}
            </dialog>
        </>
    );

    return createPortal(dialog, document.body);
};

export default Dialog;