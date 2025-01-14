import {createContext,Ref} from "react";

type DialogContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    dialogRef: Ref<HTMLDivElement>
}

export const DialogContext = createContext<DialogContextType>({
    isOpen: false,
    open: () => {},
    close: () => {},
    dialogRef: null
});
