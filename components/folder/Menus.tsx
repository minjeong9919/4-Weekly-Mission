import { useState } from "react";
import { getFolderList } from "../../api/api";
import styled from "styled-components";
import Union from "@/assets/icons/Union.svg";
import { COLORS } from "../../constants/colors";
import { useGetPromise } from "@/hooks/useGetPromise";

type MenusPropsType = {
  changeTitle: any;
  changeID: any;
  setIsVisible: any;
};

const Menus = ({ changeTitle, changeID, setIsVisible }: MenusPropsType) => {
  const listsData: any = useGetPromise(getFolderList);
  const lists = listsData?.data ?? [];
  if (lists[0]) {
    lists[0].name === "전체" || lists.unshift({ id: 0, name: "전체" });
  }

  const initialButtonColors = lists.reduce((colors: any, list: any) => {
    colors[list.name] = COLORS.White;
    return colors;
  }, {});

  const [buttonColors, setButtonColors] = useState(initialButtonColors);

  const handleClick = async (name: string, id: number) => {
    changeTitle(name);
    changeID(id);
    setButtonColors((prevColors: any) => {
      return {
        ...initialButtonColors,
        [name]:
          prevColors[name] === COLORS.White ? COLORS.Primary : COLORS.White,
      };
    });
  };

  return (
    <Container>
      <ButtonDiv>
        {lists.map((val: any) => (
          <Button
            key={val.id}
            onClick={() => handleClick(val.name, val.id)}
            color={buttonColors[val.name]}
            id={val.name}
          >
            {val.name}
          </Button>
        ))}
      </ButtonDiv>
      <AddFolderDiv onClick={() => setIsVisible("폴더 추가")}>
        <AddFolder>폴더 추가</AddFolder>
        <Union />
      </AddFolderDiv>
    </Container>
  );
};

const Container = styled.div`
  width: 1080px;
  margin: 0px auto;
  display: flex;
  padding: 8px 12px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
    padding: 0px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  gap: 12px 8px;
`;

const Button = styled.button`
  min-width: max-content;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${COLORS.Primary};
  background-color: ${({ color }) => color || COLORS.White};
  color: ${({ color = COLORS.White }) =>
    color === COLORS.White ? "#000000" : "#FFFFFF"};
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
  }
`;

const AddFolderDiv = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 774px) {
    display: none;
  }
`;

const AddFolder = styled.span`
  color: #6d6afe;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;
  margin-right: 4px;
`;

export default Menus;
