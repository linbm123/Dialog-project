import { CSSProperties, ReactNode } from "react";
import Dialog from "./Dialog";
import DialogProvider from "./DialogProvider";

type CustomDialogProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  style?: CSSProperties;
  backdropStyle?: CSSProperties;
};

function CustomDialog({
  children,
  isOpen,
  handleClose,
  style,
  backdropStyle,
}: CustomDialogProps): JSX.Element {
  return (
    <DialogProvider>
      <Dialog
        isOpen={isOpen}
        onClose={handleClose}
        contentId="dialog-content"
        isModal={true}
        style={style}
        backdropStyle={backdropStyle}
      >
        {children}
      </Dialog>
    </DialogProvider>
  );
}

export default CustomDialog;
