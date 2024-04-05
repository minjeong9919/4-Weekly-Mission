import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import login_logo from "@/assets/login_logo.png";
import icon_google from "@/assets/icons/icon_google.png";
import icon_kakao from "@/assets/icons/icon_kakao.png";
import { BlueButton } from "@/components/common/BlueButton";
import EmailPwdInput from "@/components/SignInUp/EmailPwdInput";

export default function Signup() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState<string | undefined>("");

  return (
    <BackgroundDiv>
      <ContainerDiv>
        <TitleDiv>
          <Link href="./">
            <Image src={login_logo} alt="login log" />
          </Link>
          <p>
            이미 회원이신가요?{" "}
            <Link href="./Signin" id="header-link">
              <span>로그인 하기</span>
            </Link>
          </p>
        </TitleDiv>
        <InputBoxDiv>
          <EmailPwdInput
            title="이메일"
            type="email"
            setEmailValue={setEmailValue}
            emailValue={emailValue}
          />
          <EmailPwdInput
            title="비밀번호"
            type="password"
            isEyeIcon={true}
            setPasswordValue={setPasswordValue}
            passwordValue={passwordValue}
          />
          <EmailPwdInput
            title="비밀번호 확인"
            type="password2"
            isEyeIcon={true}
          />
        </InputBoxDiv>
        <BlueButton
          text="회원가입"
          width="100%"
          margin="0px 0px 32px"
          padding="16px 20px"
          radius="8px"
          fontSize="18px"
        />
        <SocialLoginDiv>
          <span>다른 방식으로 가입하기</span>
          <SocialIconDiv>
            <div id="googleIconBackGround">
              <Link href="https://www.google.com/">
                <Image
                  width={22}
                  height={22}
                  src={icon_google}
                  id="icon"
                  alt="google_icon"
                />
              </Link>
            </div>
            <div id="kakaoIconBackGround">
              <Link href="https://www.google.com/">
                <Image
                  width={22}
                  height={22}
                  src={icon_kakao}
                  id="icon"
                  alt="google_icon"
                />
              </Link>
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
