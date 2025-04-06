import React from "react";
import styled from "styled-components";
import KRLawLogo from "../../assets/home_imgs/kr_law_logo.webp";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #111;
  color: white;
  padding: 60px 20px;
  position: relative;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoBox = styled.div`
  background-color: #111;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  /* border: 1px solid #333; */
`;

const LogoImage = styled.img`
  max-height: 130px;
  width: auto;

  @media (max-width: 768px) {
    max-height: 80px;
  }
`;

const MainTitle = styled.h1`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin: 0 0 50px 0;
  padding: 0 20px;
  line-height: 1.4;
  border: 15px solid #333;
  padding: 30px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 40px 0;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#BA0A02" : "#555")};
`;

const ContentBlock = styled.div`
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
`;

const RedHighlight = styled.span`
  color: #ba0a02;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <InnerContainer>
        <LogoBox>
          <LogoImage src={KRLawLogo} alt="KR Law Logo" />
        </LogoBox>

        <MainTitle>
          SOUTHERN CALIFORNIA PERSONAL INJURY AND CAR ACCIDENT ATTORNEYS
        </MainTitle>

        <NavigationDots>
          <Dot active />
          <Dot />
          <Dot />
          <Dot />
        </NavigationDots>

        <ContentBlock>
          <Paragraph>
            At KR Law Group, we will{" "}
            <Highlight>
              fight to make sure you get the money that you deserve
            </Highlight>
            . Many law firms will simply hand your case off to a paralegal or a
            case manager,{" "}
            <RedHighlight>
              at KR Law you will work one-on-one with an attorney
            </RedHighlight>{" "}
            the entire time.
          </Paragraph>

          <Paragraph>
            Not every law firm is right for everyone. When hiring a law firm, it
            is important to know how many cases they have won, if they tend to
            "settle out of court every time" or go to trial if needed. At KR Law
            Group,{" "}
            <Highlight>
              we pride ourselves in doing what is best for our clients
            </Highlight>
            . And our numbers simply speak for themselves, so we though we would
            share them.
          </Paragraph>
        </ContentBlock>
      </InnerContainer>
    </FooterContainer>
  );
};

export default Footer;
