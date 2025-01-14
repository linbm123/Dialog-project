import {useEffect, useRef} from "react";

const useFocusHistory = (isOpen: boolean): void => {
    const previousFocusRef = useRef<HTMLElement | null>(null);
    console.log("previousFocusRef",previousFocusRef)
    useEffect(() => {
        if (isOpen) {
            previousFocusRef.current = document.activeElement as HTMLElement;
    
        } else if (previousFocusRef.current) {
            console.log("previousFocusRef.current",previousFocusRef.current)
            previousFocusRef.current.focus();
        }
    }, [isOpen,previousFocusRef]);
};
export default useFocusHistory;