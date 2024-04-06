import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/assets/icons/eye-off.png";
import eyeon from "@/assets/icons/eye-on.png";
import { changeInputBorderColor } from "@/utils/commonSigninupFunc";
import {
  emailInputValidationcheck,
  loginPasswordInputValidationcheck,
  signInPasswordInputValidationcheck,
  emailDuplicationCheck,
} from "@/utils/validation";
import { ERROR_MESSAGE } from "@/constants/errorMessage";
import INPUT_STATUS from "@/constants/inputStatus";

type EmailPwdInputPropsType = {
  title: string;
  type: string;
  valueType: string;
  isEyeIcon?: boolean;
  setEmailValue?: React.Dispatch<React.SetStateAction<string>>;
  emailValue?: string | "";
  setPasswordValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  passwordValue?: string | undefined;
  onEnterButtonClick: () => void;
  loginStatus?: string;
  signInStatus?: string;
  setIsEmailValid?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordValid?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsPasswordConfirmValid?: React.Dispatch<React.SetStateAction<boolean>>;
};

const EmailPwdInput = ({
  title,
  type,
  valueType,
  isEyeIcon,
  setEmailValue,
  emailValue,
  setPasswordValue,
  passwordValue,
  onEnterButtonClick,
  loginStatus,
  signInStatus,
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

  const [isViewPassword, setIsViewPassword] = useState(false);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (valueType === "email") {
      setEmailValue?.(inputValue);
    } else if (valueType === "password") {
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

    switch (valueType) {
      case "email":
        emailInputFocusOutHandler(inputValue);
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

  const emailInputFocusOutHandler = async (email: string) => {
    const emailInputStatus = emailInputValidationcheck(email);
    setInputStatusAndErrorMessage(emailInputStatus);
    if (emailInputStatus === "valid") {
      setIsEmailValid?.(true);
      if (signInStatus) {
        const isDuplicateEmail = await emailDuplicationCheck(email);
        isDuplicateEmail &&
          setInputStatusAndErrorMessage(INPUT_STATUS.inUseEmail);
      }
    } else {
      setIsEmailValid?.(false);
    }
  };

  useEffect(() => {
    if (loginStatus === "fail") {
      valueType === "email"
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
    }
  };

  return (
    <InputDiv>
      <p>{title}</p>
      <EmailPasswordInput
        type={isViewPassword ? "text" : type}
        status={inputStatus}
        onKeyDown={KeyEventHandler}
        onChange={onInputChangeHandler}
        onBlur={onInputFocusOutHandler}
        onFocus={onInputFocusHandler}
      />
      {isEyeIcon && (
        <EyeIconDiv
          onClick={() => {
            setIsViewPassword(!isViewPassword);
          }}
        >
          <Image src={isViewPassword ? eyeon : eyeoff} alt="eye_off_icon" />
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
