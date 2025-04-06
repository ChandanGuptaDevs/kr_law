import React from "react";
import styled from "styled-components";
import KRLawLogo from "../../assets/home_imgs/kr_law_logo.png";

const SectionContainer = styled.section`
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AchievementsContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #ffffff;
  flex-wrap: wrap;
`;

const AchievementCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  text-align: center;
  flex: 1 0 18%;
  margin: 5px;
  min-height: 150px;
  background-color: #ffffff;
  transition: all 0.5s ease;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    transform: scale(0.95);
    background-color: #000000;
  }

  &:hover h3 {
    color: #e94235;
  }

  &:hover p {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex: 1 0 40%;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    flex: 1 0 100%;
  }
`;

const AmountText = styled.h3`
  color: #ba0a02;
  font-size: 28px;
  font-weight: 700;
  margin: 0 0 10px 0;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const CaseType = styled.p`
  font-size: 18px;
  color: #555;
  margin: 0 0 10px 0;
  line-height: 1.4;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DetailText = styled.p`
  font-size: 14px;
  color: #777;
  margin: 0;
  transition: color 0.5s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const SubTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 20px 0;
`;

const MainTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #ba0a02;
  margin: 0 0 10px 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Description = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin: 0 0 30px 0;
  text-transform: uppercase;
`;

const Logo = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  background-color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0) 30%,
      rgba(0, 0, 0, 0.1) 100%
    );
  }
`;

const LogoImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  z-index: 1;
`;

const PromiseText = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 20px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
  color: #444;
`;

const NavigationDots = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#BA0A02" : "#ccc")};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 80%;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 15px 40px;
  background-color: #ba0a02;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #990902;
  }
`;

const WhyChooseUs = () => {
  return (
    <SectionContainer>
      <AchievementsContainer>
        <AchievementCard>
          <AmountText>$1,000,000</AmountText>
          <CaseType>Auto Accident</CaseType>
          <DetailText>Total amount awarded</DetailText>
        </AchievementCard>

        <AchievementCard>
          <AmountText>$1,850,000</AmountText>
          <CaseType>Motorvehicle Accident</CaseType>
          <DetailText>Total amount awarded</DetailText>
        </AchievementCard>

        <AchievementCard>
          <AmountText>$1,000,000</AmountText>
          <CaseType>Auto Accident</CaseType>
          <DetailText>Total amount awarded</DetailText>
        </AchievementCard>

        <AchievementCard>
          <AmountText>$1,000,000</AmountText>
          <CaseType>Auto Accident Win</CaseType>
          <DetailText>Total amount awarded</DetailText>
        </AchievementCard>

        <AchievementCard>
          <AmountText>$1,200,000</AmountText>
          <CaseType>Motorvehicle Accident</CaseType>
          <DetailText>Total amount awarded</DetailText>
        </AchievementCard>
      </AchievementsContainer>

      <ContentContainer>
        <TitleSection>
          <SubTitle>WHY YOU SHOULD CHOOSE</SubTitle>
          <MainTitle>KR LAW GROUP</MainTitle>
          <Description>PERSONAL INJURY ATTORNEYS</Description>
        </TitleSection>

        <Logo>
          <LogoImage src={KRLawLogo} alt="KR Law Group Logo" />
        </Logo>

        <NavigationDots>
          <Dot active />
          <Dot />
          <Dot />
          <Dot />
        </NavigationDots>

        <PromiseText>
          At KR Law Group,{" "}
          <Highlight>
            we will fight to make sure you get the money that you deserve.
          </Highlight>{" "}
          Many law firms will simply hand your case off to a paralegal or a case
          manager, at KR Law you will work one-on-one with an attorney the
          entire time.
        </PromiseText>

        <ButtonsContainer>
          <Button href="tel:8664231527">CALL NOW</Button>
          <Button>SETUP CONSULTATION</Button>
        </ButtonsContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default WhyChooseUs;
