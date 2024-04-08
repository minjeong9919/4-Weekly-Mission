import styled from "styled-components";
import { useState } from "react";
import { CalcTime } from "@/utils/calculator";
import Star from "@/assets/icons/card_star.svg";
import Kebab from "@/assets/icons/kebab.svg";
import logo from "@/assets/icons/logo.png";
import { PopOver } from "./modals/PopOver";
import Image from "next/image";
import styles from "@/styles/shared.module.css";
import { CommonFolderInfoProps } from "@/constants/commonTypes";

interface FolderItemProps {
  item: CommonFolderInfoProps;
  $isModalVisible: string;
  setIsModalVisible: any;
}

function FolderItem({
  item,
  $isModalVisible,
  setIsModalVisible,
}: FolderItemProps) {
  const { imageSource, createdAt, description, url, id } = item;
  const { created_at, favorite, image_source } = item;
  const [isPopOverVisible, setIsPopOverVisible] = useState(false);
  const createdAtTime: string = String(createdAt ?? created_at);

  const time = CalcTime(createdAtTime);
  const img_src = image_source || imageSource;

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <Folder>
        <ImageContainer>
          {img_src ? (
            <Image fill src={img_src} alt="이미지" id="folderImage" />
          ) : (
            <DefaultImage>
              <Image src={logo} alt="logo" id="defaultImage" />
            </DefaultImage>
          )}
          <Star className={styles.star} fill={favorite ? "purple" : "black"} />
        </ImageContainer>
        <TextBox>
          <TimeContainer>
            <TimeText>{time}</TimeText>
            <Kebab
              onClick={(e: Event) => {
                e.preventDefault();
                setIsPopOverVisible(!isPopOverVisible);
              }}
            />
            <PopOver
              $isPopOverVisible={isPopOverVisible}
              setIsPopOverVisible={setIsPopOverVisible}
              $options={["삭제하기", "폴더에 추가"]}
              $modalType={["삭제", "폴더에 추가"]}
              $top="20px"
              $right="0px"
              $isModalVisible={$isModalVisible}
              setIsModalVisible={setIsModalVisible}
            />
          </TimeContainer>
          <Description>{description}</Description>

          <DateText>2023. 3. 15</DateText>
        </TextBox>{" "}
        *
      </Folder>
    </a>
  );
}

const Folder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  position: relative;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  margin: 0px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  & > #folderImage {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.3);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const DefaultImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #dddfff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 100%;
  height: 135px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 0px 0px 15px 15px;
`;

const Description = styled.div`
  width: 100%;
  height: 49px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin: 0px;
  color: #000;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const TimeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
`;

const TimeText = styled.span`
  font-size: 13px;
  font-weight: 400;
  color: #666;
  margin: 0px;
`;

const DateText = styled.span`
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0px;
`;

export default FolderItem;
