import {useContext} from "react";
import {DialogContext} from "../component/DialogContext.tsx";

type DialogContextType = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

export const useDialog = (): DialogContextType => {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error('useDialog must be used within a DialogProvider');
    }
    return context;
};
export default useDialog;