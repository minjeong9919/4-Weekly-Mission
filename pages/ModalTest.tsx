import React from 'react';
import { DeleteModal } from '@/components/common/modals/DeleteModal';
import { useModal } from '@/contexts/ModalContext';


const ModalTest = () => {

    const modal = useModal();

    const buttonHandler = () => {
        modal.openModal(<DeleteModal />);
    }

    return (
        <div>ModalTest
            <button onClick={buttonHandler}>모달 가져오기</button>
        </div>
    )
}

export default ModalTest;