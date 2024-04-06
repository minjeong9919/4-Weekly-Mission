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
  failLoginEmail: {
    errorName: "failLoginEmail",
    type: "email",
    message: ERROR_MESSAGE.email.check,
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
  failLoginPassword: {
    errorName: "failLoginPassword",
    type: "password",
    message: ERROR_MESSAGE.password.check,
  },
};
export default INPUT_STATUS;
