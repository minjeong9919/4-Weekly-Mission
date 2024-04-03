import { ERROR_MESSAGE } from "./errorMessage";

const INPUT_STATUS = {
  noEmail: {
    errorName: "noEmail",
    type: "email",
    message: ERROR_MESSAGE.email.empty,
  },
  wrongEmail: {
    errorName: "wrongEmail",
    type: "email",
    message: ERROR_MESSAGE.email.invalid,
  },
  inUseEmail: {
    errorName: "inUseEmail",
    type: "email",
    message: ERROR_MESSAGE.email.inUse,
  },
  noPassword: {
    errorName: "noPassword",
    type: "password",
    message: ERROR_MESSAGE.password.empty,
  },
  wrongPassword: {
    errorName: "wrongPassword",
    type: "password",
    message: ERROR_MESSAGE.password.invalid,
  },
  noMatchPassword: {
    errorName: "noMatchPassword",
    type: "password",
    message: ERROR_MESSAGE.password.recheck,
  },
};
export default INPUT_STATUS;
