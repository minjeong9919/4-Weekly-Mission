import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/assets/icons/eye-off.png";
import { changeInputBorderColor } from "@/utils/commonSigninupFunc";
import {
  emailInputValidationcheck,
  loginPasswordInputValidationcheck,
  signInPasswordInputValidationcheck,
} from "@/utils/validation";
import { ERROR_MESSAGE } from "@/constants/errorMessage";

type EmailPwdInputPropsType = {
  title: string;
  type: string;
  isEyeIcon?: boolean;
  setEmailValue?: React.Dispatch<React.SetStateAction<string>>;
  emailValue?: string | "";
  setPasswordValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  passwordValue?: string | undefined;
  onEnterButtonClick: () => void;
  loginStatus?: string;
  setIsEmailValid?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordValid?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordConfirmValid?: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmailPwdInput = ({
  title,
  type,
  isEyeIcon,
  setEmailValue,
  emailValue,
  setPasswordValue,
  passwordValue,
  onEnterButtonClick,
  loginStatus,
  setIsEmailValid,
  setIsPasswordValid,
  setIsPasswordConfirmValid,
}: EmailPwdInputPropsType) => {
  const INPUT_STATUS_VALUE = {
    default: "default",
    error: "error",
  };
  const [inputStatus, setInputStatus] = useState("default");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (type === "email") {
      setEmailValue?.(inputValue);
    } else if (type === "password") {
      setPasswordValue?.(inputValue);
    }
  };

  const setInputStatusAndErrorMessage = (status: "valid" | ErrorType) => {
    status === "valid"
      ? setInputStatus(INPUT_STATUS_VALUE.default)
      : (setInputStatus(INPUT_STATUS_VALUE.error),
        setInputErrorMessage(status.message));
  };

  const onInputFocusOutHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    switch (type) {
      case "email":
        const emailInputStatus = emailInputValidationcheck(inputValue);
        setInputStatusAndErrorMessage(emailInputStatus);
        emailInputStatus === "valid"
          ? setIsEmailValid?.(true)
          : setIsEmailValid?.(false);
        break;
      case "password": {
        let passwordInputStatus;
        if (loginStatus) {
          passwordInputStatus = loginPasswordInputValidationcheck(inputValue);
        } else {
          passwordInputStatus = signInPasswordInputValidationcheck(inputValue);
        }
        setInputStatusAndErrorMessage(passwordInputStatus);
        passwordInputStatus === "valid"
          ? setIsPasswordValid?.(true)
          : setIsPasswordValid?.(false);
        break;
      }
      case "password2":
        const passwordInputStatus = signInPasswordInputValidationcheck(
          passwordValue,
          inputValue
        );
        setInputStatusAndErrorMessage(passwordInputStatus);
        passwordInputStatus === "valid"
          ? setIsPasswordConfirmValid?.(true)
          : setIsPasswordConfirmValid?.(false);
        break;
      default:
        null;
    }
  };

  useEffect(() => {
    if (loginStatus === "fail") {
      type === "email"
        ? (setInputStatus(INPUT_STATUS_VALUE.error),
          setInputErrorMessage(ERROR_MESSAGE.email.check))
        : (setInputStatus(INPUT_STATUS_VALUE.error),
          setInputErrorMessage(ERROR_MESSAGE.password.check));
    }
  }, [loginStatus]);

  const onInputFocusHandler = () => {
    setInputStatus("writing");
  };

  const KeyEventHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const inputElement = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      onEnterButtonClick();
      inputElement.blur();
      console.log("dd");
    }
  };

  return (
    <InputDiv>
      <p>{title}</p>
      <EmailPasswordInput
        type={type}
        status={inputStatus}
        onKeyDown={KeyEventHandler}
        onChange={onInputChangeHandler}
        onBlur={onInputFocusOutHandler}
        onFocus={onInputFocusHandler}
      />
      {isEyeIcon && (
        <EyeIconDiv>
          <Image src={eyeoff} alt="eye_off_icon" />
        </EyeIconDiv>
      )}
      {inputStatus === "error" && (
        <ErrorMessageDiv>{inputErrorMessage}</ErrorMessageDiv>
      )}
    </InputDiv>
  );
};

type ErrorType =
  | {
      errorName: string;
      type: string;
      message: string;
    }
  | "valid";

const InputDiv = styled.div`
  width: 100%;
  margin-bottom: 24px;
  position: relative;
`;
const EmailPasswordInput = styled.input<{ status: string }>`
  width: 100%;
  padding: 18px 15px;
  border: ${({ status }) =>
    `1px solid ${changeInputBorderColor(status) ?? "var(--Grey_300)"}`};
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
