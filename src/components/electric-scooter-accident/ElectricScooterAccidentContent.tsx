// src/components/electric-scooter-accident/ElectricScooterAccidentContent.tsx
"use client";
import styled from "styled-components";
import Image from "next/image";
import PracticeAreaContactForm from "../common/PracticeAreaContactForm";
import ElectricScooterAccidentInfoSection from "./ElectricScooterAccidentInfoSection";

const ContentSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: -100px; /* Negative margin to make the form overlap with hero */
  z-index: 2; /* Add z-index to ensure content is above background image */

  @media (min-width: 1025px) {
    margin-top: -120px; /* Increased overlap on desktop for better visual effect */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    margin-top: -60px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  position: relative;
  z-index: 2; /* Add z-index to ensure content is above background image */

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
  position: relative;
  z-index: 3; /* Add z-index to ensure text is above background image */

  @media (min-width: 1025px) {
    margin-right: 70px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 100%;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 530px;
    margin-top: 80px;
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
  position: relative; /* Add position relative to make z-index work */
  z-index: 3; /* Add z-index to ensure text is above background image */

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
  position: relative; /* Add position relative to make z-index work */
  z-index: 3; /* Add z-index to ensure heading is above background image */

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
  position: relative;
  z-index: 3; /* Add z-index to ensure form is above background image */

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
  position: relative; /* Add position relative to make z-index work */
  z-index: 5; /* Higher z-index for the last paragraph to ensure it's above everything */

  @media (min-width: 1025px) {
    max-width: 100%;
    width: 100%;
  }
`;

// Background image container with overlay - positioned at bottom
const BackgroundImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 969px;
  left: 0;
  margin-top: -100px; /* Negative margin to pull it up */
  background-image: url("/images/common-causes-of-electric-scooter-accidents.png");
  background-size: cover;
  background-position: center;
  z-index: 1; /* Lower z-index to ensure it's behind the content */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.85); /* White overlay with 85% opacity */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 800px;
    margin-top: -80px; /* Adjusted for tablet */
  }

  @media (max-width: 768px) {
    height: 700px;
    margin-top: -70px; /* Adjusted for mobile */
  }
`;

// Add causes section on top of the background image
const CausesContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
  margin-top: -800px; /* Position it over the background image */
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: -725px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    margin-top: -650px;
    padding: 0 16px;
  }
`;

const CausesContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CausesTextContent = styled.div`
  width: 100%; /* Take full width since we've removed the image */
  max-width: 1000px; /* Increased max-width now that we have more space */
  margin: 0 auto; /* Center the content */

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

const CausesSectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 30px;
    max-width: 341px;
  }
`;

const PointContainer = styled.div`
  display: flex;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ArrowContainer = styled.div`
  margin-right: 25px;
  margin-top: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    margin-right: 15px;
    margin-top: 8px;
    width: 30px;
    margin-left: -10px;
  }
`;

const ArrowImage = styled(Image)`
  display: block;

  @media (max-width: 768px) {
    width: 45px !important;
    height: 6px !important;
  }
`;

const PointText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;
  flex: 1;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    text-align: left;
  }

  strong {
    font-weight: 600;
  }
`;

// Container for the Info Section
const InfoSectionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  z-index: 3;
  margin-top: 40px; /* Position it after the causes section */

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-top: 50px;
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 0 16px;
  }
`;

export default function ElectricScooterAccidentContent() {
  return (
    <>
      <ContentSection>
        <ContentWrapper>
          <TextContent>
            <SubHeading>Electric Scooter Accident Attorney</SubHeading>

            <Paragraph>
              Electric scooters have become increasingly popular in urban areas
              as a convenient and eco-friendly transportation option. However,
              with their rising popularity, there has been a corresponding
              increase in electric scooter accidents and injuries. These
              accidents can result in serious injuries due to the exposed nature
              of the rider and the potential for high-speed collisions.
            </Paragraph>

            <Paragraph>
              If you or a loved one has been injured in an electric scooter
              accident, whether as a rider, pedestrian, or another road user,
              you may be entitled to compensation for your injuries and damages.
              At KR Law, our experienced electric scooter accident attorneys are
              dedicated to helping victims navigate the complex legal issues
              surrounding these cases.
            </Paragraph>

            <Paragraph>
              Electric scooter accidents can be caused by various factors,
              including scooter malfunctions, road hazards, negligent drivers,
              or even the negligence of other scooter riders. Determining
              liability in these cases often requires a thorough investigation
              and understanding of local regulations regarding electric
              scooters.
            </Paragraph>

            <FullWidthParagraph>
              Our team has extensive experience handling electric scooter
              accident cases and will work tirelessly to ensure you receive the
              compensation you deserve for your medical expenses, lost wages,
              pain and suffering, and other damages resulting from the accident.
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

      {/* Background image section at the bottom of the page */}
      <BackgroundImageSection />

      {/* Causes section positioned on top of the background image */}
      <CausesContainer>
        <CausesContentWrapper>
          <CausesTextContent>
            <CausesSectionTitle>
              Common Causes of Electric Scooter Accidents
            </CausesSectionTitle>

            <PointText style={{ marginBottom: "30px" }}>
              Electric scooter accidents can occur due to a variety of factors.
              Understanding the common causes of these accidents can help in
              establishing liability and building a strong case for
              compensation. Some of the most frequent causes include:
            </PointText>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Hazardous Road Conditions:</strong> Potholes, uneven
                pavement, debris, and other road hazards can cause scooter
                riders to lose control and crash. Municipalities and property
                owners may be held liable for accidents caused by poorly
                maintained roads or walkways.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Scooter Defects:</strong> Mechanical failures such as
                brake malfunctions, steering problems, or battery issues can
                lead to accidents. In such cases, the scooter manufacturer or
                rental company may be held responsible.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Collisions with Vehicles:</strong> Many electric scooter
                accidents involve collisions with cars, trucks, or other
                vehicles. These accidents often occur at intersections,
                driveways, or when vehicles are making turns without noticing
                the scooter rider.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Pedestrian Collisions:</strong> Scooter riders traveling
                on sidewalks may collide with pedestrians, causing injuries to
                both parties. These accidents often raise complex liability
                questions.
              </PointText>
            </PointContainer>

            <PointContainer>
              <ArrowContainer>
                <ArrowImage
                  src="/images/ArrowRight.svg"
                  alt="Arrow"
                  width={60}
                  height={9}
                />
              </ArrowContainer>
              <PointText>
                <strong>Rider Inexperience:</strong> Many electric scooter
                accidents occur due to the rider's inexperience or unfamiliarity
                with operating the scooter, especially with rental scooters that
                may be used by first-time riders.
              </PointText>
            </PointContainer>
          </CausesTextContent>
        </CausesContentWrapper>
      </CausesContainer>

      {/* Info Section positioned below the causes section */}
      <InfoSectionContainer>
        <ElectricScooterAccidentInfoSection />
      </InfoSectionContainer>
    </>
  );
}
