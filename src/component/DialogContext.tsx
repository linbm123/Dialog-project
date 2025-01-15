import { createContext, RefObject } from "react";

type DialogContextType = {
  dialogRef: RefObject<HTMLDivElement>;
};

export const DialogContext = createContext<DialogContextType>({
  dialogRef: { current: null },
});
