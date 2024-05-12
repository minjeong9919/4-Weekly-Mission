import { useRef } from "react";
import styled from "styled-components";
import { BlueButton } from "../BlueButton";
import closeIcon from '@/public/assets/icons/closeModal.png';
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import useOutSideClick from "@/hooks/useOutSideClick";

export const AddFolderModal = () => {

  const modal = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseModal = () => {
    modal.closeModal();
  } 

  useOutSideClick({ ref: modalRef, callback: onCloseModal});
  
  return (
    <Background>
      <Modal ref={modalRef}>
        <Close onClick={onCloseModal}>
          <Image src={closeIcon} alt="닫기 아이콘" />
        </Close>
        <Title>폴더 추가</Title>
        <Input placeholder="내용 입력" />
        <BlueButton
          text="추가하기"
          width="280px"
          height="auto"
          margin="0px"
          padding="16px 20px"
          fontSize="16px"
          radius="8px"
        />
      </Modal>
    </Background>
  );
};

const Background = styled.div`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: visibility 0.3s ease;
`;

const Modal = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background-color: var(--White);
  transition: visibility 0.3s ease;
`;

const Close = styled.button`
  border: none;
  position: absolute;
  top: 16px;
  right: 16px;

  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: #373740;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Input = styled.input`
  width: 280px;
  padding: 18px 15px;
  border-radius: 8px;
  border: 1px solid var(--Grey_300);
  background: var(--White);
  color: var(--Linkbrary-gray100, #373740);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;

  &:focus {
    border: 1px solid var(--Primary);
  }
`;
