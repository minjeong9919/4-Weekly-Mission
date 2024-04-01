import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import login_logo from "@/assets/login_logo.png";
import icon_google from "@/assets/icons/icon_google.png";
import icon_kakao from "@/assets/icons/icon_kakao.png";
import { BlueButton } from "@/components/common/BlueButton";
import eyeoff from "@/assets/icons/eye-off.png";

export default function LogIn() {
  return (
    <BackgroundDiv>
      <ContainerDiv>
        <TitleDiv>
          <Link href="./">
            <Image src={login_logo} alt="login log" />
          </Link>
          <p>
            회원이 아니신가요?{" "}
            <Link href="./" id="header-link">
              <span>회원 가입하기</span>
            </Link>
          </p>
        </TitleDiv>
        <InputBoxDiv>
          <InputDiv>
            <p>이메일</p>
            <EmailPasswordInput type="email" />
          </InputDiv>
          <InputDiv>
            <p>비밀번호</p>
            <EmailPasswordInput type="password" />
            <EyeIconDiv>
              <Image src={eyeoff} alt="eye_off_icon"></Image>
            </EyeIconDiv>
          </InputDiv>
        </InputBoxDiv>
        <BlueButton
          text="로그인"
          width="100%"
          margin="0px 0px 32px"
          padding="16px 20px"
          radius="8px"
          fontSize="18px"
        />
        <SocialLoginDiv>
          <span>소셜 로그인</span>
          <SocialIconDiv>
            <div id="googleIconBackGround">
              <a href="https://www.google.com/">
                <Image
                  width={22}
                  height={22}
                  src={icon_google}
                  id="icon"
                  alt="google_icon"
                />
              </a>
            </div>
            <div id="kakaoIconBackGround">
              <a href="https://www.google.com/">
                <Image
                  width={22}
                  height={22}
                  src={icon_kakao}
                  id="icon"
                  alt="google_icon"
                />
              </a>
            </div>
          </SocialIconDiv>
        </SocialLoginDiv>
      </ContainerDiv>
    </BackgroundDiv>
  );
}

const BackgroundDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--Grey_100);
  display: flex;
  align-items: center;
`;

const ContainerDiv = styled.div`
  background-color: var(--Grey_100);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: auto;
`;

const TitleDiv = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > p {
    font-size: 16px;
    font-weight: 400;
    margin: 0px;
    margin-top: 16px;
  }

  & > #header-link {
    color: var(--Primary);
    text-decoration-color: var(--Primary);
  }
`;

const InputBoxDiv = styled.div`
  width: 100%;
  margin: 30px auto;
`;

const InputDiv = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;
const EmailPasswordInput = styled.input`
  width: 100%;
  padding: 18px 15px;
  border: 1px solid var(--Grey_300);
  border-radius: 8px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    outline: none;
    border: 1px solid var(--Primary);
  }
`;

const SocialLoginDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: var(--Grey_200);
  border-radius: 8px;
  border: 1px solid var(--Grey_300);

  & > span {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
    color: #373740;
  }
`;

const SocialIconDiv = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  & > div {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3px;
  }
  & > #googleIconBackGround {
    background-color: white;
  }

  & > #kakaoIconBackGround {
    background-color: #f5e14b;
  }
`;

const EyeIconDiv = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 53px;
  right: 16px;
  cursor: pointer;
`;
