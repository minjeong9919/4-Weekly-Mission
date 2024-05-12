import React, {useEffect} from 'react';

type UseOutSideClickType = {
    ref: React.RefObject<HTMLDivElement>;
    callback: Function;
}

const useOutSideClick = ({ref, callback} : UseOutSideClickType) => {
    const handleClick = (e: MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node)) {
            callback?.();
        }
    };
    
    useEffect(() => {
        window.addEventListener('mousedown', handleClick);
        
        return () => window.removeEventListener('mousedown', handleClick);
    })
}

export default useOutSideClick;