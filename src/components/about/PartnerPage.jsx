import React from "react";
import styled from "styled-components";
import lawyerImage from "../../assets/home_imgs/lawyer_img003.webp";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: "Spartan", sans-serif;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  width: 40%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: auto;
    display: block;

    object-fit: contain;
    transition: transform 0.5s ease;

    object-position: top center;
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: 992px) {
    width: 70%;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Overlay = styled.div`
  position: absolute;

  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 0.4) 60%,
    transparent
  );
  color: white;
  text-align: center;

  padding: 20px;
  transition: opacity 0.3s ease;
`;

const Name = styled.h2`
  margin: 0;

  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Role = styled.p`
  margin: 8px 0 0;
  font-size: 1rem;
  font-weight: 500;
  color: #ba0a02;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const TextContainer = styled.div`
  width: 55%;
  padding: 10px 0;

  @media (max-width: 992px) {
    width: 100%;

    padding: 20px 0;
  }
`;

const Description = styled.div`
  color: #333;
  line-height: 1.8;
  p {
    margin-bottom: 1.2rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      font-size: 0.95rem;
    }
  }

  strong {
    color: #111;
    font-weight: 600;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;

  background-color: #ddd;
  margin: 40px 0;
`;

const PartnerPage = () => {
  return (
    <Container>
      <CardContainer>
        <ImageWrapper>
          <img src={lawyerImage} alt="Kathy Rabii - Founding Partner" />
          <Overlay>
            <Name>Kathy Rabii</Name>
            <Role>Founding Partner</Role>
          </Overlay>
        </ImageWrapper>

        <TextContainer>
          <Description>
            <p>
              The Founder of KR Law, APC, a law firm narrowly focused on
              representing plaintiffs in personal injury claims. Ms. Kathy
              Rabii, a renowned legal expert with a proven track record of
              success that helped thousands of people get the justice they
              deserve, our firm specializes in personal injury cases, including
              auto accidents, motorcycle accidents, dog bites, slips and falls,
              & other forms of negligence.
            </p>

            <p>But our expertise doesn't stop there.</p>

            <p>
              Before founding KR Law, APC, Kathy honed her skills at a
              prestigious corporate law firm in San Diego, where she gained
              invaluable experience in the cannabis and plant-based medicine
              industry. As an associate and department head, she worked on
              complex regulatory and compliance matters, land-use entitlements,
              and commercial and industrial real estate investments and
              acquisitions.
            </p>

            <p>
              Kathy's extensive knowledge of cannabis licensing and compliance
              even led to her serving on the California Cannabis Industry
              Association's policy board.
            </p>

            <p>
              With a <strong>Magna Cum Laude</strong> degree from the Thomas
              Jefferson School of Law and numerous awards for her legal writing
              and research, Kathy brings a level of sophistication and expertise
              to every case she handles.
            </p>

            <p>
              At KR Law, APC, we are passionate about helping our clients
              navigate the legal system and achieve the best possible outcomes
              for their cases. Don't let an injury or accident hold you back.
            </p>

            <p>
              Contact KR Law firm today to schedule your free consultation and
              learn how we can help you get the justice and compensation you
              deserve.
            </p>
          </Description>
        </TextContainer>
      </CardContainer>
      <HorizontalLine />
    </Container>
  );
};
export default PartnerPage;
