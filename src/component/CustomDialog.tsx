import { ReactNode } from "react";
import Dialog from "./Dialog";
import DialogProvider from "./DialogProvider";

type CustomDialogProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  className?: string;
  backdropClassName?: string;
};

function CustomDialog({
  children,
  isOpen,
  handleClose,
  className = "",
  backdropClassName = "",
}: CustomDialogProps): JSX.Element {
  return (
    <DialogProvider>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        contentId="dialog-content"
        isModal={true}
        className={className}
        backdropClassName={backdropClassName}
      >
        {children}
      </Dialog>
    </DialogProvider>
  );
}

export default CustomDialog;
