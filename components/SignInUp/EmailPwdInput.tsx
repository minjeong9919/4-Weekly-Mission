import { useState, useRef, useEffect, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/public/assets/icons/eye-off.png";
import eyeon from "@/public/assets/icons/eye-on.png";
import INPUT_ERROR_INFO from "@/type/inputErrorInfo";


type EmailPwdInputPropsType = {
  title: string;
  type: string;
  eventFunc: {
    onFocusOut: () => void;
    onChange: () => void;
  }
  inputErrorInfo: INPUT_ERROR_INFO;
  inputRef: React.RefObject<HTMLInputElement>
};


const EmailPwdInput = ({
  title,
  type,
  eventFunc,
  inputErrorInfo,
  inputRef
}: EmailPwdInputPropsType) => {

  const [inputStatus, setInputStatus] = useState("default");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const [isViewPassword, setIsViewPassword] = useState(false);


  useEffect(() => {
    if(inputErrorInfo !== "valid") {
      setInputErrorMessage(inputErrorInfo.message);
    } else {
      setInputErrorMessage('');
    }
    
  },[inputErrorInfo])

  // const setInputStatusAndErrorMessage = (status: "valid" | ErrorType) => {
  //   status === "valid"
  //     ? setInputStatus(INPUT_STATUS_VALUE.default)
  //     : (setInputStatus(INPUT_STATUS_VALUE.error),
  //       setInputErrorMessage(status.message));
  // };

  // const onInputFocusOutHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const inputValue = e.target.value;

  //   switch (type) {
  //     case "email":
  //       emailInputFocusOutHandler(inputValue);
  //       break;
  //     case "password": {
  //       passwordInputFocusOutHandler(inputValue);
  //       break;
  //     }
  //     case "password2":
  //       passwordConfirmInputFocusOutHandler(inputValue);
  //       break;
  //     default:
  //       null;
  //   }
  // };

  // const emailInputFocusOutHandler = async (email: string) => {
  //   const emailInputStatus = emailInputValidationcheck(email);
  //   setInputStatusAndErrorMessage(emailInputStatus);
  //   if (emailInputStatus === "valid") {
  //     setIsEmailValid?.(true);
  //     if (signInStatus) {
  //       const isDuplicateEmail = await emailDuplicationCheck(email);
  //       isDuplicateEmail &&
  //         setInputStatusAndErrorMessage(INPUT_STATUS.inUseEmail);
  //     }
  //   } else {
  //     setIsEmailValid?.(false);
  //   }
  // };

  // const passwordInputFocusOutHandler = async (password: string) => {
  //   let passwordInputStatus;
  //   if (loginStatus) {
  //     passwordInputStatus = loginPasswordInputValidationcheck(password);
  //   } else {
  //     passwordInputStatus = signInPasswordInputValidationcheck(password);
  //   }
  //   setInputStatusAndErrorMessage(passwordInputStatus);
  //   passwordInputStatus === "valid"
  //     ? setIsPasswordValid?.(true)
  //     : setIsPasswordValid?.(false);
  // };

  // const passwordConfirmInputFocusOutHandler = async (password2: string) => {
  //   const passwordInputStatus = signInPasswordInputValidationcheck(
  //     passwordValue,
  //     password2
  //   );
  //   setInputStatusAndErrorMessage(passwordInputStatus);
  //   passwordInputStatus === "valid"
  //     ? setIsPasswordConfirmValid?.(true)
  //     : setIsPasswordConfirmValid?.(false);
  // };

  // useEffect(() => {
  //   if (loginStatus === "fail") {
  //     valueType === "email"
  //       ? (setInputStatus(INPUT_STATUS_VALUE.error),
  //         setInputErrorMessage(ERROR_MESSAGE.email.check))
  //       : (setInputStatus(INPUT_STATUS_VALUE.error),
  //         setInputErrorMessage(ERROR_MESSAGE.password.check));
  //   }
  // }, [loginStatus]);

  // const onInputFocusHandler = () => {
  //   setInputStatus("writing");
  // };


  return (
    <InputDiv>
      <p>{title}</p>
      <EmailPasswordInput
        type={isViewPassword ? "text" : type}
        inputErrorInfo={inputErrorInfo}
        onChange={eventFunc.onChange}
        onBlur={eventFunc.onFocusOut}
        ref={inputRef}
      />
      {type==="password" && (
        <EyeIconDiv
          onClick={() => {
            setIsViewPassword(!isViewPassword);
          }}
        >
          <Image src={isViewPassword ? eyeon : eyeoff} alt="eye_off_icon" />
        </EyeIconDiv>
      )}
      {inputErrorMessage && (
        <ErrorMessageDiv>{inputErrorMessage}</ErrorMessageDiv>
      )}
    </InputDiv>
  );
};


const InputDiv = styled.div`
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`;
const EmailPasswordInput = styled.input<{ inputErrorInfo: INPUT_ERROR_INFO }>`
  width: 100%;
  padding: 18px 15px;
  border: ${({ inputErrorInfo }) =>
    `1px solid ${inputErrorInfo === "valid" ? "var(--Grey_300)" : "red"}`};
  border-radius: 8px;
  outline: none;
  margin-top: 12px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const EyeIconDiv = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 53px;
  right: 16px;
  cursor: pointer;
`;

const ErrorMessageDiv = styled.div`
  color: var(--Red);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 6px;
`;
export default EmailPwdInput;
