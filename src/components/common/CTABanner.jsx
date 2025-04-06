import React from "react";
import styled from "styled-components";
import KRLawLogo from "../../assets/home_imgs/kr_law_logo.png";

const BannerContainer = styled.section`
  width: 100%;
  background-color: #ffffff;
  padding: 60px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 15px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0)
    );
  }
`;

const MainTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #ba0a02;
  margin: 0 0 20px 0;
  text-transform: uppercase;
  max-width: 800px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h3`
  font-size: 28px;
  font-weight: 400;
  color: #999;
  margin: 0 0 30px 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

const PhonePrefix = styled.span`
  font-size: 32px;
  color: #777;
  margin-right: 10px;

  @media (max-width: 768px) {
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const PhoneNumber = styled.a`
  font-size: 40px;
  font-weight: 700;
  color: #ba0a02;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const LogoContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(200, 200, 200, 0),
    rgba(200, 200, 200, 1) 10%,
    rgba(200, 200, 200, 1) 90%,
    rgba(200, 200, 200, 0)
  );
  margin-top: 20px;
`;

const CTABanner = () => {
  return (
    <BannerContainer>
      <MainTitle>HAVE YOUR PERSONAL INJURY QUESTIONS ANSWERED</MainTitle>
      <Subtitle>CONSULT WITH AN ATTORNEY FOR FREE</Subtitle>

      <PhoneContainer>
        <PhonePrefix>24/7 @</PhonePrefix>
        <PhoneNumber href="tel:+12138338361">+1 213-833-8361</PhoneNumber>
      </PhoneContainer>

      <LogoContainer>
        <Logo src={KRLawLogo} alt="KR Law Logo" />
      </LogoContainer>

      <Divider />
    </BannerContainer>
  );
};

export default CTABanner;
