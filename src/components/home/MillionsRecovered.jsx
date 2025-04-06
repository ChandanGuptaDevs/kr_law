import React from "react";
import styled from "styled-components";
import lawyerImage from "../../assets/home_imgs/lawyer_img002.webp";
import KRLawLogo from "../../assets/home_imgs/kr_law_logo.png";

const SectionContainer = styled.section`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const TopSection = styled.div`
  display: flex;
  padding: 50px 0;
  position: relative;
  background-color: #f8f8f8;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 0;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  padding-right: 0;
  padding-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 0;

  @media (max-width: 768px) {
    padding: 0 20px;
    order: 2;
    margin-top: 30px;
  }
`;

const LogoContainer = styled.div`
  margin-bottom: 30px;
  width: 150px;

  @media (max-width: 768px) {
    margin: 0 auto 20px auto;
  }
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }
`;

const ConsultationButton = styled.a`
  display: inline-block;
  background-color: #ba0a02;
  color: white;
  font-weight: 600;
  padding: 15px 30px;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
  text-transform: uppercase;
  align-self: flex-start;

  &:hover {
    background-color: #990902;
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const ImageRight = styled.div`
  flex: 1.2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-height: 520px;

  @media (max-width: 768px) {
    order: 1;

    height: 350px;
    max-height: 350px;
  }
`;

const LawyerImage = styled.img`
  max-width: 95%;
  max-height: 500px;
  object-fit: cover;
  object-position: center top;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-height: 340px;
  }
`;

const BottomSection = styled.div`
  background-color: #111;
  color: white;
  padding: 50px 20px;
  text-align: center;
  position: relative;
`;

const PracticeAreasTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 40px 0;
  text-transform: uppercase;
  color: white;
  display: inline-block;
  background-color: #111;
  padding: 0 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const TitleLine = styled.div`
  position: absolute;
  top: 75px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #444;
  z-index: 1;
`;

const PracticeContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
`;

const MillionsRecovered = () => {
  return (
    <SectionContainer>
      <TopSection>
        <ContentLeft>
          <LogoContainer>
            <Logo src={KRLawLogo} alt="KR Law Group Logo" />
          </LogoContainer>

          <Title>MILLIONS RECOVERED</Title>

          <Description>
            KR Law Group has recovered millions of dollars for our clients. Let
            us help you get the compensation you deserve.
          </Description>

          <ConsultationButton href="#">FREE CONSULTATION</ConsultationButton>
        </ContentLeft>

        <ImageRight>
          <LawyerImage src={lawyerImage} alt="KR Law Group Attorneys" />
        </ImageRight>
      </TopSection>

      <BottomSection>
        <TitleLine />
        <PracticeAreasTitle>LAW PRACTICE AREAS</PracticeAreasTitle>

        <PracticeContent>
          We are a full-fledged Personal Injury & Accident law firm. Our main
          focus is on{" "}
          <Highlight>
            helping our clients receive the compensation they deserve
          </Highlight>
          . The attorneys at KR Law Group specialize in helping clients receive
          compensation for their personal injury claims.
        </PracticeContent>
      </BottomSection>
    </SectionContainer>
  );
};

export default MillionsRecovered;
