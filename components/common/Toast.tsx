import React, { useEffect } from 'react';
import styled from 'styled-components';
import closeIcon from '@/public/assets/icons/close.png';
import Image from 'next/image';

type ToastType = {
    errorMessage?:string | null;
    isToastView: boolean,
    setIsToastView: React.Dispatch<React.SetStateAction<boolean>>;
}
const Toast = ({errorMessage, isToastView, setIsToastView}:ToastType) => {

    const onClickCloseIconHandler = () => {
        setIsToastView(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setIsToastView(false);
        }, 3000);
    },[isToastView]);

    return (
        <ToastContainer isToastView={isToastView}>
            <ErrorMessageDiv>
                {errorMessage}
            </ErrorMessageDiv>
            <CloseIconDiv onClick={onClickCloseIconHandler}>
                <Image src={closeIcon} alt='closeIcon'/>
            </CloseIconDiv>
        </ToastContainer>
    )
}

export default Toast;

const ToastContainer = styled.div<{ isToastView: boolean } >`
    width: 50%;
    padding: 10px 20px;
    background-color: #dfcbff;
    border: 1px solid var(--Primary);
    border-radius: 10px;;
    position: fixed;
    top: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
    z-index: 9999;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 10px 29px -14px rgba(0,0,0,1);
    visibility: ${({isToastView}) => isToastView ? "visible" : "hidden"};
`;

const ErrorMessageDiv = styled.div`
    display: flex;
    align-items: center;
    color: #4600b8;
    padding-top: 3px;
`;

const CloseIconDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
`;
