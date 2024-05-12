import { useRef } from "react";
import styled from "styled-components";
import closeIcon from "@/public/assets/icons/closeModal.png";
import Image from "next/image";
import { useModal } from "@/contexts/ModalContext";
import useOutSideClick from "@/hooks/useOutSideClick";
import { SOCIAL_ICONS } from "@/constants/socialIcon";

export const SharedModal = () => {

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
          <Image src={closeIcon} alt="closeIcon" />
        </Close>
        <Title>
          <h3>폴더 공유</h3>
          <p>폴더명</p>
        </Title>
        <Icons>
          {SOCIAL_ICONS.map((icon) => (
            <Icon key={icon.name}>
              <IconImg $backgroundColor={icon.backgroundColor}>
                <Image src={icon.imgUrl} alt={icon.name} />
              </IconImg>
              <span>{icon.name}</span>
            </Icon>
          ))}
        </Icons>
      </Modal>
    </Background>
  );
};

type BackgroundPropsType = {
  $isVisible?: string;
  $backgroundColor?: string;
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
  top: 30%;
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
  & > h3 {
    color: #373740;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 8px;
  }

  & > p {
    color: var(--Grey-400);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  padding: 0px 32px;
`;

const Icon = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  & > span {
    color: #373740;
    text-align: center;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 15px;
  }
`;

const IconImg = styled.div<BackgroundPropsType>`
  width: 42px;
  height: 42px;
  background-color: ${({ $backgroundColor }) => $backgroundColor ?? null};
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 18px;
    height: 18px;
  }
`;
