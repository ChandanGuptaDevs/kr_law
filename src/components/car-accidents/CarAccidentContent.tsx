// src/components/car-accidents/CarAccidentContent.tsx
"use client";
import styled from "styled-components";
import PracticeAreaContactForm from "../common/PracticeAreaContactForm";

const ContentSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: -100px; /* Negative margin to make the form overlap with hero */
  /* padding-bottom: 80px; */

  @media (min-width: 1025px) {
    margin-top: -120px; /* Increased overlap on desktop for better visual effect */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: -80px;
    /* Removed padding-bottom: 60px; */
  }

  @media (max-width: 768px) {
    margin-top: -60px;
    /* Removed padding-bottom: 50px; */
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  position: relative;

  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    flex-direction: column;
    align-items: center;
  }
`;

const TextContent = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 220px;

  @media (min-width: 1025px) {
    margin-right: 70px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    margin-top: 100px; /* Reduced from 250px */
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 530px;
    margin-top: 80px; /* Reduced from 310px */
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 25px;

  strong {
    font-weight: 600;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
    text-align: left;
  }
`;

const SubHeading = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin: 40px 0 25px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin: 35px 0 20px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    margin: 30px 0 20px;
    text-align: left;
  }
`;

const FormContainer = styled.div`
  /* Desktop version remains absolutely positioned */
  position: absolute;
  right: 0;
  top: 80px;
  z-index: 10;

  /* Hide desktop version on mobile and tablet */
  @media (max-width: 1024px) {
    display: none;
  }
`;

// New component for mobile and tablet form placement
const MobileFormContainer = styled.div`
  display: none; /* Hidden by default (on desktop) */

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    margin: 40px auto;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 600px;
  }

  @media (max-width: 768px) {
    max-width: 500px;
  }
`;

const FullWidthParagraph = styled(Paragraph)`
  @media (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
  }
`;

export default function CarAccidentContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Reporting car Accidents In California</SubHeading>

            <Paragraph>
              If you're driving around California and are involved in a car
              accident, you have a lot on your "to-do" list. In California,
              drivers are required by law to report a car accident to the
              California Highway Patrol or local police within 24 hours if it
              involves bodily injury or death.
            </Paragraph>

            <Paragraph>
              If the accident resulted in property damage exceeding $1,000, or
              injury or death, the accident must be reported to the Department
              of Motor Vehicles (DMV) within 10 days. Failure to report
              accidents within the specified time frames can result in
              penalties, such as fines, license revocation, or even jail time.
            </Paragraph>

            <Paragraph>
              While reporting accidents to insurance companies is not mandatory,
              some insurance providers may require it. Police reports are not
              automatically shared with insurance companies, and drivers can
              obtain copies of police reports by contacting the local police
              station.
            </Paragraph>

            <FullWidthParagraph>
              It is also advisable to seek the services of an attorney after any
              car accident, regardless of the situation.
            </FullWidthParagraph>
          </TextContent>

          {/* Desktop version of the form - positioned absolutely */}
          <FormContainer>
            <PracticeAreaContactForm />
          </FormContainer>
        </ContentWrapper>
      </ContentSection>

      {/* Mobile and tablet version of the form - appears at the bottom */}
      <MobileFormContainer>
        <PracticeAreaContactForm />
      </MobileFormContainer>
    </>
  );
}
