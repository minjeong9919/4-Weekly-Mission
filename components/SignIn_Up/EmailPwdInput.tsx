import styled from "styled-components";
import Image from "next/image";
import eyeoff from "@/assets/icons/eye-off.png";

type EmailPwdInputPropsType = {
  title: string;
  type: string;
  isEyeIcon?: boolean;
};

const EmailPwdInput = ({ title, type, isEyeIcon }: EmailPwdInputPropsType) => {
  return (
    <InputDiv>
      <p>{title}</p>
      <EmailPasswordInput type={type} />
      {isEyeIcon && (
        <EyeIconDiv>
          <Image src={eyeoff} alt="eye_off_icon"></Image>
        </EyeIconDiv>
      )}
    </InputDiv>
  );
};

const InputDiv = styled.div`
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
`;
const EmailPasswordInput = styled.input`
  width: 100%;
  padding: 18px 15px;
  border: 1px solid var(--Grey_300);
  border-radius: 8px;

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:focus {
    outline: none;
    border: 1px solid var(--Primary);
  }
`;

const EyeIconDiv = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 53px;
  right: 16px;
  cursor: pointer;
`;
export default EmailPwdInput;
