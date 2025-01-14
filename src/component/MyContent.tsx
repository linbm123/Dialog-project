import {useRef} from "react";
import useDialog from "../hooks/useDialog.tsx";
import Dialog from "./Dialog.tsx";

function MyContent(): JSX.Element {
    const { isOpen, open, close } = useDialog();
    const initialFocusRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <button onClick={open}>Open Dialog</button>
            <Dialog
                isOpen={isOpen}
                onClose={close}
                contentId="dialog-content"
                isModal={true}
                initialFocusRef={initialFocusRef}
            >
                <div id="dialog-content">
                    <button ref={initialFocusRef}>Focus me first</button>
                    <button>Another button</button>
                    <button onClick={close}>Close</button>
                </div>
            </Dialog>
        </>
    );
}

export default MyContent;