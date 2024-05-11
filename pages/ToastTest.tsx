import React, { useEffect, useState } from 'react';
import { useToast } from '@/contexts/ToastContext';

const ToastTest = () => {

    const { setText, setViewToast } = useToast();

    useEffect(() => {
        setText('ddddd');
    })


    return (
        <div>
            <button onClick={() => setViewToast(true)}>토스트 열기</button>
            <button onClick={() => setViewToast(false)}>토스트 끄기</button>
        </div>
    )
}

export default ToastTest