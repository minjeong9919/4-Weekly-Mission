import { createContext, useContext, useState } from "react";

type ModalProvider = {
    isOpen: boolean;
    openModal: (modal: React.ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<ModalProvider | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);
    if(!context) throw new Error ("modal error");
    return context;
};

export const ModalProvider = ({children}: {children: any}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState<React.ReactNode | null >(null)
    const [modalStack, setModalStack] = useState<React.ReactNode[]>([]);

    const openModal = (modal: React.ReactNode) => {
        setIsOpen(true);
        setModalComponent(modal);
        setModalStack((prevStack) => [...prevStack, modal]);
    }
    const closeModal = () => {
        setIsOpen(false);
        const prevStack = [...modalStack];
        prevStack.pop();
        const prevModal = prevStack[prevStack.length-1];
        setModalStack(prevStack);
        setModalComponent(prevModal);
        
    }

    return (
        <ModalContext.Provider value={{isOpen, openModal, closeModal}}>
            {children}
            {modalComponent}
        </ModalContext.Provider>
    )
}