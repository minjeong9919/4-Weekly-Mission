import styled from "styled-components";
import { DeleteModal } from "@/components/common/modals/DeleteModal";
import { AddToFolder } from "@/components/common/modals/AddToFolder";
import { useEffect, useRef } from "react";

type PopOverPropTypes = {
  $isPopOverVisible: boolean;
  setIsPopOverVisible: any;
  popOverInfo: {
    option: string;
    callback: () => void;
  } [];
  $top: string;
  $right: string;
};

export const PopOver = ({
  $isPopOverVisible,
  setIsPopOverVisible,
  popOverInfo,
  $top,
  $right,
}: PopOverPropTypes) => {

  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect (() => {
    const handleClick = (e: MouseEvent) => {
      if(popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsPopOverVisible(false);
      }
    }

    window.addEventListener('mousedown', handleClick);

    return ()=> window.removeEventListener('mousedown', handleClick);
  })



  return (
    <>
      <MenuOptions $isVisible={$isPopOverVisible} $top={$top} $right={$right} ref={popoverRef}>
        {popOverInfo.map((option) => (
          <Option
            key={option.option}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              option.callback();
            }}
          >
            {option.option}
          </Option>
        ))}
      </MenuOptions>
    </>
  );
};

interface PropsType {
  $right: string;
  $top: string;
  $isVisible: boolean;
}

const MenuOptions = styled.div<PropsType>`
  width: 100px;
  position: absolute;
  right: ${({ $right }) => $right ?? 0};
  top: ${({ $top }) => $top ?? 0};
  border: 1px;
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  background-color: #fff;
  z-index: 1;
  box-shadow: 3px 8px 15px -4px rgba(0,0,0,0.38);
`;

const Option = styled.p`
  padding: 7px 12px;
  background-color: #fff;
  color: #333236;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: var(--Primary);
    background-color: var(--Grey_100);
  }
`;
