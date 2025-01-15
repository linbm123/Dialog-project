import {createContext, RefObject} from "react";

type DialogContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    dialogRef: RefObject<HTMLDivElement>;
}

export const DialogContext = createContext<DialogContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  dialogRef: { current: null },
});
