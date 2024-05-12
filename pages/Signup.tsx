import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import login_logo from "@/public/assets/login_logo.png";
import icon_google from "@/public/assets/icons/icon_google.png";
import icon_kakao from "@/public/assets/icons/icon_kakao.png";
import { BlueButton } from "@/components/common/BlueButton";
import EmailPwdInput from "@/components/SignInUp/EmailPwdInput";
import { postSignUp } from "@/api/api";
import { emailInputValidationcheck, signUpPasswordInputValidationcheck } from "@/utils/validation";
import INPUT_ERROR_INFO from "@/type/inputErrorInfo";
import { useToast } from "@/contexts/ToastContext";

export default function Signup() {
  const [emailValue, setEmailValue] = useState("");
  const [emailErrorInfo, setEmailErrorInfo] = useState<INPUT_ERROR_INFO>("valid");
  const emailInputRef = useRef<HTMLInputElement>(null);

  const [passwordValue, setPasswordValue] = useState("");
  const [passwordErrorInfo, setPasswordErrorInfo] = useState<INPUT_ERROR_INFO>("valid");
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [passwordCheckValue, setPasswordCheckValue] = useState("");
  const [passwordCheckErrorInfo, setPasswordCheckErrorInfo] = useState<INPUT_ERROR_INFO>("valid");
  const passwordCheckInputRef = useRef<HTMLInputElement>(null);

  const toast = useToast();
  
  const trySignup = async () => {
    if(emailErrorInfo === "valid" && passwordErrorInfo === "valid" && passwordCheckErrorInfo === "valid") {
      const postJsonValue = { email: emailValue, password: passwordValue };
      let result;
      try {
        result = await postSignUp(postJsonValue);
      } catch (error) {
        console.error(error);
      }

      if(result.error) {
        toast.setText("회원가입에 실패하였습니다.");
        toast.setViewToast(true);
      }
    }
  };

  const onEnterKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      emailInputRef.current?.blur();
      passwordInputRef.current?.blur();
      passwordCheckInputRef.current?.blur();
      trySignup();
    }
  }

  const emailChangeHandler = () => {
    if(emailInputRef.current) {
      setEmailValue(emailInputRef.current.value);
    }
  }
  const emailFocusoutHandler = () => {
    const emailErrorInfo = emailInputValidationcheck(emailValue);
    setEmailErrorInfo(emailErrorInfo);
  }

  const passwordChangeHandler = () => {
    if(passwordInputRef.current) {
      setPasswordValue(passwordInputRef.current.value);
    }
  }

  const passwordFocusoutHandler = () => {
    const passwordErrorInfo = signUpPasswordInputValidationcheck(passwordValue);
    setPasswordErrorInfo(passwordErrorInfo);
  }

  const passwordCheckChangeHandler = () => {
    if(passwordCheckInputRef.current) {
      setPasswordCheckValue(passwordCheckInputRef.current.value);
    }
  }
  
  const passwordCheckFocusoutHandler = () => {
    const passwordCheckErrorInfo = signUpPasswordInputValidationcheck(passwordValue, passwordCheckValue);
    setPasswordCheckErrorInfo(passwordCheckErrorInfo);
  }

  const emailEventFunc = {
    onChange: emailChangeHandler,
    onFocusOut: emailFocusoutHandler,
    onKeydown: onEnterKeyHandler,
  }

  const passwordEventFunc = {
    onChange: passwordChangeHandler,
    onFocusOut: passwordFocusoutHandler,
    onKeydown: onEnterKeyHandler,
  }

  const passwordCheckEventFunc = {
    onChange: passwordCheckChangeHandler,
    onFocusOut: passwordCheckFocusoutHandler,
    onKeydown: onEnterKeyHandler,
  }

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
            eventFunc={emailEventFunc}
            inputErrorInfo={emailErrorInfo}
            inputRef={emailInputRef}

          />
          <EmailPwdInput
            title="비밀번호"
            type="password"
            eventFunc={passwordEventFunc}
            inputErrorInfo={passwordErrorInfo}
            inputRef={passwordInputRef}
          />
          <EmailPwdInput
            title="비밀번호 확인"
            type="password"
            eventFunc={passwordCheckEventFunc}
            inputErrorInfo={passwordCheckErrorInfo}
            inputRef={passwordCheckInputRef}
          />
        </InputBoxDiv>
        <BlueButton
          text="회원가입"
          width="100%"
          margin="0px 0px 32px"
          padding="16px 20px"
          radius="8px"
          fontSize="18px"
          onBtnHandle={trySignup}
        />
        <SocialLoginDiv>
          <span>소셜 로그인</span>
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
