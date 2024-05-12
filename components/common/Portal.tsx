import React from 'react';
import { createPortal } from 'react-dom';

type PortalProps = {
    children: React.ReactNode;
}

const Portal = ({
    children
}: PortalProps) => {

    const modalRoot = typeof document !== 'undefined' ? document.getElementById('modal-root') : null;

    if(!modalRoot) return;

    return createPortal(children, modalRoot)
}

export default Portal