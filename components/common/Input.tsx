import { KeyboardEvent } from "react";
import styled from "styled-components";
import searchIcon from "@/public/assets/icons/icon_search.png";
import Delete from "@/public/assets/icons/delete.svg";
import Image from "next/image";

type InputPropsType = {
  setInputValue: any;
  inputValue: string;
  onEnterButtonHandle: () => void;
};

const Input = ({
  setInputValue,
  inputValue,
  onEnterButtonHandle,
}: InputPropsType) => {
  const onClickDeleteButtonHandle = () => {
    setInputValue("");
  };

  const onKeyPressHandle = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onEnterButtonHandle();
    }
  };

  return (
    <InputContainerDiv>
      <Image width={16} height={16} src={searchIcon} alt="searchIcon" />
      <InputBar
        type="text"
        placeholder="링크를 검색해 보세요."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={onKeyPressHandle}
      />
      <DeleteAllButton onClick={() => onClickDeleteButtonHandle()}>
        <Delete />
      </DeleteAllButton>
    </InputContainerDiv>
  );
};

const InputContainerDiv = styled.div`
  width: 1060px;
  padding: 15px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 40px;
  margin: 40px auto;

  @media (max-width: 1124px) {
    width: 704px;
  }
  @media (max-width: 774px) {
    width: 325px;
    margin: 20px auto 32px;
  }
`;

const InputBar = styled.input`
  width: 100%;
  margin-right: 16px;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  border: none;
  background-color: transparent;
  margin-left: 10px;

  &:focus {
    outline: none;
  }
`;

const DeleteAllButton = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 999px;
  border: none;
  background-color: #ccd5e3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 29px;
    height: 25px;
  }
`;

export default Input;
