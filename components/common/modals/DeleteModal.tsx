import styled from "styled-components";
import closeIcon from "@/assets/icons/closeModal.png";
import Image from "next/image";
import { RedButton } from "../../../components/common/RedButton";
import { CommonModalProps } from "@/constants/commonTypes";

export const DeleteModal = ({
  isModalVisible,
  setIsModalVisible,
}: CommonModalProps) => {
  const handleCloseBtn = () => {
    setIsModalVisible("");
  };

  return (
    <Background $isVisible={isModalVisible}>
      <Modal>
        <Close
          onClick={(e) => {
            e.preventDefault();
            handleCloseBtn();
          }}
        >
          <Image src={closeIcon} alt="closeIcon" />
        </Close>
        <Title>
          <h3>폴더 삭제</h3>
          <p>폴더명</p>
        </Title>
        <RedButton
          text="삭제하기"
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

const Background = styled.div<{ $isVisible: string }>`
  display: ${({ $isVisible }) => ($isVisible === "삭제" ? "block" : "none")};
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
    color: var(--Grey_400);
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 157.143% */
  }
`;
