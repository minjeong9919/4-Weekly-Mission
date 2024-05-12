import { useState, useEffect } from "react";
import { getFolderList } from "../../api/api";
import styled from "styled-components";
import Union from "@/public/assets/icons/Union.svg";
import { COLORS } from "../../constants/colors";
import { useGetPromise } from "@/hooks/useGetPromise";
import { useModal } from "@/contexts/ModalContext";
import { AddFolderModal } from "../common/modals/AddFolderModal";

type MenusPropsType = {
  changeTitle: any;
  changeID: any;
};

const Menus = ({ changeTitle, changeID }: MenusPropsType) => {
  const [buttonColors, setButtonColors] = useState([]);
  const fetchedMenuData: any = useGetPromise(getFolderList);
  const menulists = fetchedMenuData?.data ?? [];
  const modal = useModal();

  useEffect(() => {
    const initialButtonColors = setAllWhiteButtonColor();
    setButtonColors(initialButtonColors);
  }, [menulists]);

  const setAllWhiteButtonColor = () => {
    if (menulists[0] && menulists[0].name !== "전체") {
      menulists.unshift({ id: 0, name: "전체" });
    }
    const initialButtonColors = menulists.reduce((colors: any, list: any) => {
      colors[list.name] = COLORS.White;
      return colors;
    }, {});
    return initialButtonColors;
  };

  const changeButtonColor = (name: string) => {
    let allWhiteButtonColorArray = setAllWhiteButtonColor();
    setButtonColors((prevColors: any) => {
      return {
        ...allWhiteButtonColorArray,
        [name]:
          prevColors[name] === COLORS.White ? COLORS.Primary : COLORS.White,
      };
    });
  };

  const onMenuButtonClick = (name: string, id: number) => {
    changeTitle(name);
    changeID(id);
    changeButtonColor(name);
  };

  const addFolderClickHandler = () => {
    modal.openModal(<AddFolderModal />)
  }

  return (
    <Container>
      <ButtonDiv>
        {menulists.map((val: any) => (
          <Button
            key={val.id}
            onClick={() => onMenuButtonClick(val.name, val.id)}
            color={buttonColors[val.name]}
            id={val.name}
          >
            {val.name}
          </Button>
        ))}
      </ButtonDiv>
      <AddFolderDiv onClick={addFolderClickHandler}>
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
