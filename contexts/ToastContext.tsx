import { createContext, useContext, useState } from 'react';
import Toast from '@/components/common/Toast';
import ToastPortalContent from '@/components/common/ToastPortalContent';

type ToastContextType = {
    setText: (message: string) => void;
    setViewToast: (value: boolean) => void;
}

const ToastContext = createContext<ToastContextType | undefined >(undefined);

export const useToast = () =>{ 
    const context = useContext(ToastContext);
    if(!context) throw new Error("toast error");
    return context;
}

export const ToastProvider = ({children}: {children: any}) => {

    const [toastText, setToastText] = useState('');
    const [isToastView, setIsToastView] = useState(false);

    const setText = (message: string) => {
        setToastText(message);
    }

    const setViewToast = (value : boolean) => {
        setIsToastView(value);
    }

    const contextValue: ToastContextType = {
        setText,
        setViewToast
    }

    return (
        <ToastContext.Provider value={contextValue}>
            {children}
            <ToastPortalContent >
                <Toast errorMessage={toastText} isToastView={isToastView} setIsToastView={setIsToastView}/>
            </ToastPortalContent>
        </ToastContext.Provider>    
    )
}