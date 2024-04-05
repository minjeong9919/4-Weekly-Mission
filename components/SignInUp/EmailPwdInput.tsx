import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/assets/icons/eye-off.png";
import { changeInputBorderColor } from "@/utils/commonSigninupFunc";
import {
  emailInputValidationcheck,
  passwordInputValidationcheck,
} from "@/utils/validation";

type EmailPwdInputPropsType = {
  title: string;
  type: string;
  isEyeIcon?: boolean;
  setEmailValue?: React.Dispatch<React.SetStateAction<string>>;
  emailValue?: string | "";
  setPasswordValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  passwordValue?: string | undefined;
};

const EmailPwdInput = ({
  title,
  type,
  isEyeIcon,
  setEmailValue,
  emailValue,
  setPasswordValue,
  passwordValue,
}: EmailPwdInputPropsType) => {
  const [inputStatus, setInputStatus] = useState("default");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  const onInputFocusOutHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (type === "email") {
      const emailInputStatus = emailInputValidationcheck(inputValue);
      setInputStatusAndErrorMessage(emailInputStatus);
      setEmailValue?.(inputValue);
    } else if (type === "password") {
      const passwordInputStatus = passwordInputValidationcheck(inputValue);
      setInputStatusAndErrorMessage(passwordInputStatus);
      setPasswordValue?.(inputValue);
    } else if (type === "password2") {
      const passwordInputStatus = passwordInputValidationcheck(
        passwordValue,
        inputValue
      );
      setInputStatusAndErrorMessage(passwordInputStatus);
      setPasswordValue?.(inputValue);
    }
  };

  const setInputStatusAndErrorMessage = (status: "normal" | ErrorType) => {
    status === "normal"
      ? setInputStatus("default")
      : (setInputStatus("error"), setInputErrorMessage(status.message));
  };

  const onInputFocusHandler = () => {
    setInputStatus("writing");
  };

  return (
    <InputDiv>
      <p>{title}</p>
      <EmailPasswordInput
        type={type}
        status={inputStatus}
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
  | "normal";

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
