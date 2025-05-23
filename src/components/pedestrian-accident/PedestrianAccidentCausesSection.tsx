// src/components/pedestrian-accident/PedestrianAccidentCausesSection.tsx
"use client";
import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  /* Apply background color only for tablet and desktop */
  @media (min-width: 769px) {
    background: #f5f5f5;
  }

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    /* No background color for mobile */
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center; /* Center the content */
  align-items: flex-start;

  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
    align-items: center;
  }
`;

const TextContent = styled.div`
  width: 100%; /* Take up full width now that there's no image */
  max-width: 1000px; /* Increased max-width since we have more space */

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 370px;
  }
`;

const SectionTitle = styled.h2`
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
    /* Make the arrow container take up less space horizontally */
    width: 30px; /* Limit the width to contain the smaller arrow */
    margin-left: -10px; /* Move arrow more to the left in mobile version */
  }
`;

const ArrowImage = styled(Image)`
  display: block;

  @media (max-width: 768px) {
    width: 45px !important; /* Further reduced from 40px to 30px */
    height: 6px !important; /* Further reduced from 6px to 4px */
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

export default function PedestrianAccidentCausesSection() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <SectionTitle>Common Causes of Pedestrian Accidents</SectionTitle>

          <PointText style={{ marginBottom: "30px" }}>
            Understanding the common causes of pedestrian accidents can help
            establish liability in your case. Some of the most frequent causes
            include:
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
              <strong>Distracted Driving:</strong> Drivers who are texting,
              talking on the phone, or otherwise distracted may fail to notice
              pedestrians in crosswalks or at intersections.
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
              <strong>Speeding:</strong> Drivers who exceed speed limits have
              less time to react to pedestrians and may be unable to stop in
              time to avoid a collision.
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
              <strong>Failure to Yield:</strong> Drivers who fail to yield the
              right-of-way to pedestrians at crosswalks and intersections can
              cause serious accidents.
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
              <strong>Impaired Driving:</strong> Drivers under the influence of
              alcohol or drugs have impaired judgment and reaction times,
              increasing the risk of pedestrian accidents.
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
              <strong>Poor Visibility:</strong> Accidents are more likely to
              occur at night or in bad weather conditions when visibility is
              reduced.
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
              <strong>Left-Turn Accidents:</strong> Drivers making left turns
              may focus on oncoming traffic and fail to notice pedestrians
              crossing the street.
            </PointText>
          </PointContainer>

          <PointText style={{ marginTop: "30px" }}>
            Our attorneys can help you navigate these complex insurance issues
            and ensure that all applicable policies are utilized to provide you
            with maximum coverage for your damages and injuries.
          </PointText>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
