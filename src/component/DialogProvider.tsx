import {ReactNode, useEffect, useRef, useState} from "react";
import {DialogContext} from "./DialogContext";

type DialogProviderProps = {
    children: ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const open = (): void => setIsOpen(true);
    const close = (): void => setIsOpen(false);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.setAttribute('aria-hidden', isOpen ? 'true' : 'false');
        }
    }, [isOpen]);

    return (
        <DialogContext.Provider value={{ isOpen, open, close }}>
            <div ref={contentRef}>
                {children}
            </div>
        </DialogContext.Provider>
    );
};
export default DialogProvider;