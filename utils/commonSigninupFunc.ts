import { ERROR_MESSAGE } from "@/constants/errorMessage";
// import { pwdInput, pwdEyeIcon } from "../declaration.js";

// enter키 입력으로 로그인 실행
export function EnterLogin(key: string, func: () => void) {
  if (key === "Enter") {
    func();
  }
}

export const changeInputBorderColor = (status: string | undefined) => {
  switch (status) {
    case "default":
      return "var(--Grey_300)";
    case "writing":
      return "var(--Primary)";
    default:
      return "var(--Red)";
  }
};

// 에러 메세지 출력 함수
// export function errorMsg(errorCase: string) {
//   let newNode = document.createElement("div");

//   switch (errorCase) {
//     case "NoEmail":
//       inputAddNode({
//         type: "email",
//         message: ERROR_MESSAGE.email.empty,
//         errorCase: errorCase,
//       });
//       break;
//     case "wrongEmail":
//       inputAddNode({
//         type: "email",
//         message: ERROR_MESSAGE.email.invalid,
//         errorCase: errorCase,
//       });
//       break;
//     case "inUseEmail":
//       inputAddNode({
//         type: "email",
//         message: ERROR_MESSAGE.email.inUse,
//         errorCase: errorCase,
//       });
//       break;
//     case "NoPwd":
//       inputAddNode({
//         type: "password",
//         message: ERROR_MESSAGE.password.empty,
//         errorCase: errorCase,
//       });
//       break;
//     case "wrongPwd":
//       inputAddNode({
//         type: "password",
//         message: ERROR_MESSAGE.password.invalid,
//         errorCase: errorCase,
//       });
//       break;
//     case "noMatchPwd":
//       inputAddNode({
//         type: "password2",
//         message: ERROR_MESSAGE.password.recheck,
//         errorCase: errorCase,
//       });
//       break;
//     case "Other":
//       inputAddNode({
//         type: "email",
//         message: ERROR_MESSAGE.email.check,
//         errorCase: errorCase,
//       });
//       inputAddNode({
//         type: "password",
//         message: ERROR_MESSAGE.password.check,
//         errorCase: errorCase,
//       });
//       break;
//   }
// }

// // password input 눈모양 클릭 실행 함수
// export function EyePwd(EyeStatus: string) {}
