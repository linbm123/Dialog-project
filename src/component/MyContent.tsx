// MyContent.tsx
import { ReactNode, useContext } from "react";
import Dialog from "./Dialog";
import { DialogContext } from "./DialogContext";

type MyContentProps = {
  children: ReactNode;
};

function MyContent({ children }: MyContentProps): JSX.Element {
  const { isOpen, open, close } = useContext(DialogContext);

  return (
    <>
      <div id="sectionContent">
       <button onClick={open}>Open Dialog</button>
      </div>
      <Dialog
        isOpen={isOpen}
        onClose={close}
        contentId="dialog-content"
        isModal={true}
      >
        {({ close }) => (
          <div>
            <div>{children}</div>
            <button onClick={close}>Close</button>
          </div>
        )}
      </Dialog>
    </>
  );
}

export default MyContent;
