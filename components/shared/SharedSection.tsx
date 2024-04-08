import icon_smile from "@/assets/icons/icon_smile.png";
import styled from "styled-components";
import { OwnerProps } from "@/constants/commonTypes";

type useType = {
  folderName: string;
  owner: OwnerProps;
};
const SharedSection = ({ folderName, owner }: useType) => {
  const { profileImageSource, name } = owner;

  return (
    <section className="codeit-mark-section">
      <OwnerProfile
        src={profileImageSource || icon_smile.toString()}
        alt="smile icon"
      />
      <span>{name}</span>
      <div id="favorites">
        <h1>{folderName}</h1>
      </div>
    </section>
  );
};

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
