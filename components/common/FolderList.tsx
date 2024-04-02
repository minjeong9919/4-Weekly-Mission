import styled from "styled-components";
import FolderItem from "./FolderItem";
import { CommonFolderInfoProps } from "@/constants/commonTypes";

type FolderPropsType = {
  items: any;
  $isModalVisible: any;
  setIsModalVisible: any;
};

function FolderList({
  items,
  $isModalVisible,
  setIsModalVisible,
}: FolderPropsType) {
  return (
    <FolderListContainerDiv>
      <FolderListGridBoxDiv>
        {items.map((item: CommonFolderInfoProps) => {
          {
            return (
              <FolderItem
                item={item}
                key={item.id}
                $isModalVisible={$isModalVisible}
                setIsModalVisible={setIsModalVisible}
              />
            );
          }
        })}
      </FolderListGridBoxDiv>
    </FolderListContainerDiv>
  );
}

const FolderListContainerDiv = styled.div`
  margin: 40px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1124px) {
    margin: 0px;
    padding: 40px 35px;
  }

  @media (max-width: 774px) {
    margin: 0px;
    padding: 40px 35px;
  }
`;

const FolderListGridBoxDiv = styled.div`
  width: 1060px;
  display: grid;
  grid-template: 360px 360px 360px / 340px 340px 340px;
  gap: 25px 20px;

  @media (max-width: 1124px) {
    width: auto;
    grid-template: 360px 360px / 340px 340px;
    gap: 25px 24px;
  }

  @media (max-width: 774px) {
    width: auto;
    grid-template: 360px / 325px;
    gap: 25px 24px;
  }
`;

export default FolderList;
