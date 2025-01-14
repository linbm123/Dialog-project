import {useEffect, useRef} from "react";

const useFocusHistory = (isOpen: boolean): void => {
    const previousFocusRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement;
        } else if (previousFocusRef.current) {
            previousFocusRef.current.focus();
        }
    }, [isOpen]);
};
export default useFocusHistory;