import styled from "styled-components";
import logo from "@/assets/Linkbrary.png";
import profile from "@/assets/icons/icon_myprofile.png";
import { getUserInfo } from "../../api/api";
import { useGetPromise } from "@/hooks/useGetPromise";
import Image from "next/image";

interface propTypes {
  $positionval: string;
}

function HeaderElement({ $positionval }: propTypes) {
  const user: any = useGetPromise(getUserInfo);
  const email = user?.email;
  const profileImageSource = user?.profileImageSource;

  return (
    <HeaderDiv $positionval={$positionval}>
      <Image src={logo} alt="logo" />
      <MyProfileDiv>
        {user ? (
          <MyProfileNameDiv>
            <MyProfileImageContainerDiv>
              {profileImageSource ? (
                <Image
                  width={28}
                  height={28}
                  src={profileImageSource}
                  alt="myProfile-img"
                ></Image>
              ) : (
                <Image
                  width={18}
                  height={18}
                  src={profile}
                  alt="myProfile-img"
                ></Image>
              )}
            </MyProfileImageContainerDiv>
            <span id="myEmail">{email}</span>
          </MyProfileNameDiv>
        ) : (
          <a href="/signup.html">
            <LoginButton type="button">로그인</LoginButton>
          </a>
        )}
      </MyProfileDiv>
    </HeaderDiv>
  );
}

const HeaderDiv = styled.div<propTypes>`
  background-color: var(--Grey_100);
  padding: 20px 200px;
  position: ${({ $positionval }) => ($positionval ? $positionval : "sticky")};
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    padding: 32px;
  }
  @media (max-width: 774px) {
    padding: 18px 32px;
  }
`;

const MyProfileDiv = styled.div`
  background-color: var(--Grey_100);
  padding: 20px 0px;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MyProfileNameDiv = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  @media (max-width: 1199px) {
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 767px) {
    & > #myEmail {
      display: none;
    }
  }
`;

const MyProfileImageContainerDiv = styled.div`
  width: 28px;
  height: 28px;
  background-color: var(--Primary);
  margin-right: 6px;
  overflow: hidden;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginButton = styled.button`
  display: block;
  width: 128px;
  padding: 16px 20px;
  border: 0px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;

  font-size: 14px;
  font-weight: 600;
  line-height: 21.6px;
  color: #f5f5f5;
`;

export default HeaderElement;
