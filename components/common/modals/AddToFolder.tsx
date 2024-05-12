import { useRef } from "react";
import styled from "styled-components";
import closeIcon from "@/public/assets/icons/closeModal.png";
import { BlueButton } from "../BlueButton";
import Image from "next/image";
import useOutSideClick from "@/hooks/useOutSideClick";
import { useModal } from "@/contexts/ModalContext";

export const AddToFolder = () => {

  const modal = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const onCloseModal = () => {
    modal.closeModal();
  } 

  useOutSideClick({ ref: modalRef, callback: onCloseModal});

  return (
    <Background>
      <Modal ref={modalRef}>
        <Close onClick={onCloseModal} >
          <Image src={closeIcon} alt="closeIcon" />
        </Close>
        <Title>
          <h3>폴더에 추가</h3>
          <p>링크 주소</p>
        </Title>
        <Folders>
          <Folder>
            코딩팁 <p>7개 링크</p>
          </Folder>
          <Folder>
            채용 사이트 <p>12개 링크</p>
          </Folder>
          <Folder>
            유용한 글 <p>30개 링크</p>
          </Folder>
          <Folder>
            나만의 장소 <p>3개 링크</p>
          </Folder>
        </Folders>
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

  &:hover {
    cursor: default;
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 32px 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  border-radius: 15px;
  background: var(--White);
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
  text-align: center;
  font-family: Pretendard;
  font-style: normal;

  & > h3 {
    color: #373740;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }

  & > p {
    color: var(--Grey_400);
    font-size: 14px;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

const Folders = styled.div`
  width: 264px;
`;

const Folder = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  color: #373740;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-right: 8px;

  &:hover {
    cursor: pointer;
    background: var(Grey_100);
    color: var(--Primary);
  }

  & > p {
    color: var(--Grey_400);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
