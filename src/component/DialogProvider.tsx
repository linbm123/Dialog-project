import { ReactNode, useRef, useState } from "react";
import { DialogContext } from "./DialogContext";

type DialogProviderProps = {
  children: ReactNode;
};

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  const open = (): void => setIsOpen(true);
  const close = (): void => setIsOpen(false);

  return (
    <DialogContext.Provider value={{ isOpen, open, close, dialogRef }}>
      <div id="sectionContent" aria-hidden={isOpen}>{children}</div>
      <div ref={dialogRef} />
    </DialogContext.Provider>
  );
};
export default DialogProvider;
