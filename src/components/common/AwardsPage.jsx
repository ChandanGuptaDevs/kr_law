import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000;
  padding: 40px 30px;
  width: 100%;
  flex-wrap: wrap;
  gap: 60px;

  @media (max-width: 1200px) {
    gap: 40px;
    padding: 35px 25px;
  }

  @media (max-width: 1024px) {
    padding: 30px 20px;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 25px 15px;
    flex-direction: column;
    gap: 25px;
  }
`;

const Card = styled.div`
  color: white;
  text-align: center;
  padding: 20px;
  width: 240px;
  background-color: #111111;
  transition: all 0.3s ease;
  cursor: pointer;
  border-left: 3px solid #ba0a02;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    background-color: #1a1a1a;
    box-shadow: 0 8px 20px rgba(186, 10, 2, 0.3);
  }

  h3 {
    font-size: 15px;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  p {
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 12px 0;
    color: #ba0a02;
  }

  span {
    font-size: 12px;
    color: #888888;
    display: block;
    position: relative;
    padding-bottom: 10px;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 2px;
      background-color: #ba0a02;
    }
  }

  @media (max-width: 1024px) {
    width: 220px;
    padding: 18px;

    h3 {
      font-size: 14px;
    }

    p {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    padding: 20px;

    h3 {
      font-size: 16px;
    }

    p {
      font-size: 26px;
    }
  }
`;

const ButtonLink = styled(Link)`
  background: #ba0a02;
  color: white;
  border: none;

  padding: 16px 36px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease;
  border-radius: 3px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #990902;
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 1024px) {
    padding: 14px 30px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    padding: 16px 34px;
    margin-top: 15px;
    width: 100%;
    max-width: 320px;
    text-align: center;
  }
`;

const AwardsPage = () => {
  return (
    <Container>
      <Card>
        <h3>Government Claim</h3>
        <p>$6,250,000</p>
        <span>Total amount awarded</span>
      </Card>
      <Card>
        <h3>Premises Liability</h3>
        <p>$1,175,000</p>
        <span>Total amount awarded</span>
      </Card>
      <Card>
        <h3>Auto Accident</h3>
        <p>$950,000</p>
        <span>Total amount awarded</span>
      </Card>
      <ButtonLink to="/contact">Free Consultation</ButtonLink>
    </Container>
  );
};

export default AwardsPage;
