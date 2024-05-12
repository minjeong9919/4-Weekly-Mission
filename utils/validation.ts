import INPUT_STATUS from "@/constants/inputStatus";
import { postCheckDuplicationEmail } from "@/api/api";

// 이메일 유효성 검사
function emailCheck(email_address: string) {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return Boolean(email_regex.test(email_address));
}

type ErrorValid =
  // error
    {
      errorName: string;
      type: string;
      message: string;
    }
  | "valid";

// 이메일 에러 검사
export const emailInputValidationcheck = (email: string): ErrorValid => {
  let emailValid: ErrorValid;
  if (!email) {
    emailValid = INPUT_STATUS.noEmail;
  } else if (!emailCheck(email)) {
    emailValid = INPUT_STATUS.wrongEmail;
  } else {
    emailValid = "valid";
  }
  return emailValid;
};

// 이메일 중복 검사
export const emailDuplicationCheck = async (email: string) => {
  const postJsonEmail = { email };
  const checkDuplication = await postCheckDuplicationEmail(postJsonEmail);
  if (checkDuplication.error) {
    return true;
  } else return false;
};

// 로그인할 때 비밀번호 에러 검사
export const loginPasswordInputValidationcheck = (
  password: string | undefined
): ErrorValid => {
  let status: ErrorValid;
  if (!password) {
    status = INPUT_STATUS.noPassword;
  } else {
    status = "valid";
  }
  return status;
};

// 회원가입할 때 비밀번호 에러 검사
export const signUpPasswordInputValidationcheck = (
  password: string | undefined,
  password2?: string | undefined
): ErrorValid => {
  let status: ErrorValid;
  if (!password) {
    status = INPUT_STATUS.noPassword;
  } else if (!passwordCheck(password)) {
    console.log(password);
    status = INPUT_STATUS.wrongPassword;
  } else if (password2 && password !== password2) {
    status = INPUT_STATUS.noMatchPassword;
  } else {
    status = "valid";
  }
  return status;
};

// 비밀번호 유효성 검사
function passwordCheck(password: string): boolean {
  let password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return password_regex.test(password);
}

export { emailCheck, passwordCheck };
