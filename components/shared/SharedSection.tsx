import icon_smile from "@/public/assets/icons/icon_smile.png";
import styled from "styled-components";
import { OwnerProps } from "@/constants/commonTypes";

type useType = {
  folderName: string;
  owner: OwnerProps;
};
const SharedSection = ({ folderName, owner }: useType) => {
  const { profileImageSource, name } = owner;

  return (
    <Section className="codeit-mark-section">
      <OwnerProfile
        src={profileImageSource || icon_smile.toString()}
        alt="smile icon"
      />
      <span>{name}</span>
      <FolderNameDiv>
        <h1>{folderName}</h1>
      </FolderNameDiv>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--Grey_100);
  width: 100%;
  padding-top: 20px;
  padding-bottom: 60px;

  & > span {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const FolderNameDiv = styled.div`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
`;

const OwnerProfile = styled.img`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  align-items: center;
  border-radius: 47px;
  margin-bottom: 12px;
`;

export default SharedSection;
