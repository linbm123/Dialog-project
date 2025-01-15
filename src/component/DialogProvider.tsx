import { ReactNode, useRef } from "react";
import { DialogContext } from "./DialogContext";

type DialogProviderProps = {
  children: ReactNode;
};

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  return (
    <DialogContext.Provider value={{ dialogRef }}>
      <div ref={dialogRef}>{children}</div>
    </DialogContext.Provider>
  );
};

export default DialogProvider;
