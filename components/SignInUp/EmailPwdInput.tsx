import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/assets/icons/eye-off.png";
import { changeInputBorderColor } from "@/utils/commonSigninupFunc";
import { emailCheck, passwordCheck } from "@/utils/validation";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import INPUT_STATUS from "@/constants/inputStatus";

type EmailPwdInputPropsType = {
  title: string;
  type: string;
  isEyeIcon?: boolean;
  setEmailValue?: React.Dispatch<React.SetStateAction<string>>;
  emailValue?: string | "";
  setPasswordValue?: React.Dispatch<React.SetStateAction<string>>;
  passwordValue?: string | "";
  setPassword2Value?: React.Dispatch<React.SetStateAction<string>>;
  password2Value?: string | "";
};

const EmailPwdInput = ({
  title,
  type,
  isEyeIcon,
  setEmailValue,
  emailValue,
  setPasswordValue,
  passwordValue,
  setPassword2Value,
  password2Value,
}: EmailPwdInputPropsType) => {
  const [inputStatus, setInputStatus] = useState("default");
  const [inputErrorMessage, setInputErrorMessage] = useState("");

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {};

  const onInputFocusOutHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (type === "email") {
      const emailInputStatus = emailInputcheck(inputValue);
      setInputStatusAndErrorMessage(emailInputStatus);
    } else if (type === "password") {
      const passwordInputStatus = passwordInputcheck(inputValue);
      setInputStatusAndErrorMessage(passwordInputStatus);
    } else if (type === "password2") {
      console.log(passwordValue);
    }
  };

  const emailInputcheck = (email: string): ErrorType => {
    let status: ErrorType;
    if (!email) {
      status = INPUT_STATUS.noEmail;
    } else if (!emailCheck(email)) {
      status = INPUT_STATUS.wrongEmail;
    } else {
      status = "normal";
    }
    setEmailValue?.(email);
    return status;
  };

  const passwordInputcheck = (
    password: string,
    password2?: string
  ): ErrorType => {
    let status: ErrorType;
    if (!password) {
      status = INPUT_STATUS.noPassword;
    } else if (password2 && password !== password2) {
      status = INPUT_STATUS.noMatchPassword;
    } else {
      status = "normal";
    }
    setPasswordValue?.(password);
    return status;
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
