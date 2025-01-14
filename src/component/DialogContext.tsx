import {createContext} from "react";

interface DialogContextType {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const DialogContext = createContext<DialogContextType>({
    isOpen: false,
    open: () => {},
    close: () => {},
});
