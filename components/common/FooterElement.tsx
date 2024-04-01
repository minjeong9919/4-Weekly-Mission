import styled from "styled-components";
import Image from "next/image";
import { FOOTER_ICONS } from "@/constants/footerIcons";

function FooterElement() {
  return (
    <FooterContainerFooter>
      <FooterFrameDiv>
        <div id="footer-codeit">
          <p>@codeit - 2023</p>
        </div>
        <NoticeDiv>
          <a href="privacy.html">
            <p>Privacy Policy</p>
          </a>
          <a href="faq.html">
            <p>FAQ</p>
          </a>
        </NoticeDiv>
        <IconsDiv>
          {FOOTER_ICONS.map((icon) => {
            return (
              <a
                key={icon.id}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image width={20} height={20} src={icon.src} alt="icon" />
              </a>
            );
          })}
        </IconsDiv>
      </FooterFrameDiv>
    </FooterContainerFooter>
  );
}

const FooterContainerFooter = styled.footer`
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.02);

  @media (max-width: 767px) {
    height: 200px;
  }
`;

const FooterFrameDiv = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  padding: 32px 104px 64px 104px;
  justify-content: space-between;
  background-color: var(--Black);

  @media (max-width: 767px) {
    padding: 32px 32px 64px 32px;
    position: relative;
    gap: auto;

    & > #footer-codeit {
      position: absolute;
      top: 110px;
      left: 32px;
      color: #676767;
    }
  }

  p,
  a {
    font-size: 16px;
    font-weight: 400;
    text-decoration-line: none;
    color: #cfcfcf;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  gap: 12px;
`;

const NoticeDiv = styled(IconsDiv)`
  @media (max-width: 767px) {
    gap: 30px;
  }
`;

export default FooterElement;
