// 이메일 유효성 검사
function emailCheck(email_address: string) {
  let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  return Boolean(email_regex.test(email_address));
}

// 비밀번호 유효성 검사
function passwordCheck(password: string) {
  let password_regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return password_regex.test(password);
}

// 비밀번호 중복 확인
export function isMatch(password1: string, password2: string) {
  return password1 === password2;
}

export { emailCheck, passwordCheck };
