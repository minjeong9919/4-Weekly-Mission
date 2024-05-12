import styled from "styled-components";
import Share from "@/public/assets/icons/share.svg";
import Pen from "@/public/assets/icons/pen.svg";
import Trash from "@/public/assets/icons/trash.svg";
import { useModal } from "@/contexts/ModalContext";
import { SharedModal } from "../common/modals/SharedModal";
import { EditNameModal } from "../common/modals/EditNameModal";
import { DeleteModal } from "../common/modals/DeleteModal";

type FolderTitlePropsType = {
  titleName: string;
};

const FolderTitle = ({ titleName }: FolderTitlePropsType) => {
  const modal = useModal();

  const titles = [
    {
      name: "공유",
      svg: <Share />,
      callback: () => {
        modal.openModal(<SharedModal />)
      }
    },
    {
      name: "이름 변경",
      svg: <Pen />,
      callback: () => {
        modal.openModal(<EditNameModal />)
      }
    },
    {
      name: "삭제",
      svg: <Trash />,
      callback: () => {
        modal.openModal(<DeleteModal />)
      }
    },
  ];

  return (
    <Container>
      <Title>{titleName}</Title>
      {titleName !== "전체" && (
        <OptionBox>
          {titles.map((title) => (
            <Option
              key={title.name}
              onClick={title.callback}
            >
              {title.svg}
              <OptionText>{title.name}</OptionText>
            </Option>
          ))}
        </OptionBox>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin: 28px auto 20px;
  }
`;

const Title = styled.span`
  color: #000;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.2px;
`;

const OptionBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;

  &:hover {
    cursor: pointer;
  }
`;

const OptionText = styled.span`
  color: #9fa6b2;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default FolderTitle;
