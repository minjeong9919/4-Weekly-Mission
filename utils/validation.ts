import INPUT_STATUS from "@/constants/inputStatus";

// 이메일 유효성 검사
function emailCheck(email_address: string) {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return Boolean(email_regex.test(email_address));
}

type ErrorType =
  | {
      errorName: string;
      type: string;
      message: string;
    }
  | "valid";

export const emailInputValidationcheck = (email: string): ErrorType => {
  let status: ErrorType;
  if (!email) {
    status = INPUT_STATUS.noEmail;
  } else if (!emailCheck(email)) {
    status = INPUT_STATUS.wrongEmail;
  } else {
    status = "valid";
  }
  return status;
};

export const loginPasswordInputValidationcheck = (
  password: string | undefined
): ErrorType => {
  let status: ErrorType;
  if (!password) {
    status = INPUT_STATUS.noPassword;
  } else {
    status = "valid";
  }
  return status;
};

export const signInPasswordInputValidationcheck = (
  password: string | undefined,
  password2?: string | undefined
): ErrorType => {
  let status: ErrorType;
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

// 비밀번호 중복 확인
export function isMatch(password1: string, password2: string) {
  return password1 === password2;
}

export { emailCheck, passwordCheck };
