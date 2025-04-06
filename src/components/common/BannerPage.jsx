import React from "react";
import styled from "styled-components";
import bannerImage from "../../assets/images/banner_img05.jpg";

const BannerWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  padding-left: 60px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url(${bannerImage}) center/cover no-repeat;

  @media (max-width: 1024px) {
    height: 240px;
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding-left: 20px;
  }

  @media (max-width: 480px) {
    height: 180px;
    padding-left: 15px;
  }
`;

const Content = styled.div`
  max-width: 60%;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.2;
    font-family: "Spartan", sans-serif;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1rem;
    margin-top: 8px;
    line-height: 1.4;
  }

  @media (max-width: 1024px) {
    max-width: 70%;
    h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 85%;
    h1 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 90%;
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;

const InfoText = styled.div`
  text-align: center;

  margin: 30px auto 15px;
  padding: 0 20px;
  max-width: 1000px;
  font-family: "Spartan", sans-serif;

  @media (max-width: 768px) {
    margin: 25px auto 12px;
  }

  @media (max-width: 480px) {
    margin: 20px auto 10px;
  }
`;

const MainText = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #222;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const OtherText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #444;

  margin-top: 6px;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const HorizontalLine = styled.div`
  width: 85%;
  max-width: 1000px;
  height: 1px;
  background-color: #ddd;
  margin: 20px auto 30px;

  @media (max-width: 1024px) {
    width: 88%;
    margin: 18px auto 25px;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 15px auto 20px;
  }

  @media (max-width: 480px) {
    width: 92%;
    margin: 12px auto 18px;
  }
`;

const BannerPage = (props) => {
  return (
    <>
      <BannerWrapper>
        <Content>
          <h1>{props?.text}</h1>
        </Content>
      </BannerWrapper>

      <InfoText>
        <MainText>{props?.mainText}</MainText>
        <OtherText>{props?.otherText}</OtherText>
      </InfoText>

      <HorizontalLine />
    </>
  );
};
export default BannerPage;
