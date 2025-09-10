"use client";
import styled from "styled-components";
import Image from "next/image";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  background: #fafafa;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 50px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;

  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0 16px;
  }
`;

const LawyerImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    width: 45%;
    max-width: 500px;
    margin-top: 120px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 45%;
    max-width: 450px;
    margin-top: 170px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    margin-top: 10px;
  }
`;

const ImageFrame = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
  overflow: visible;

  @media (min-width: 1025px) {
    width: 424px;
    height: 646px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 350px;
    height: 530px;
  }

  @media (max-width: 768px) {
    width: 348px;
    height: 420px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 35px;
  overflow: visible;
`;

const LawyerName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 110%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #919191;
  margin-top: 24px;
  text-align: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 16px;
    justify-content: center;
  }
`;

const ContentSection = styled.div`
  position: relative;

  @media (min-width: 1025px) {
    width: 55%;
    padding-left: 40px;
    padding-top: 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 55%;
    padding-left: 30px;
    padding-top: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 20px;
  }
`;

const Paragraph = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;

  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 26px;
  @media (min-width: 1025px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 16px;
    text-align: justify;
  }

  &.emphasis {
    font-weight: 500;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center bottom;
  transform-origin: center bottom;

  @media (min-width: 1025px) {
    transform: scale(1.7) translateY(18%);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    transform: scale(1.7) translateY(18%);
  }

  @media (max-width: 768px) {
    transform: scale(1.4) translateY(22%);
  }
`;

export default function AboutPartner() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <LawyerImageSection>
          <ImageFrame>
            <ImageWrapper>
              <StyledImage
                src="/images/lawyer-image-4.webp"
                alt="Kathy Rabii - Founder of KR Law, APC"
                fill
                priority
              />
            </ImageWrapper>
          </ImageFrame>
          <LawyerName>Kathy Rabii | Founder Partner</LawyerName>
        </LawyerImageSection>

        <ContentSection>
          <Paragraph>
            The Founder of KR Law, APC, a law firm narrowly focused on
            representing plaintiffs in personal injury claims. Ms. Kathy Rabii,
            a renowned legal expert with a proven track record of success that
            helped thousands of people get the justice they deserve, our firm
            specializes in personal injury cases, including auto accidents,
            motorcycle accidents, dog bites, slips and falls, & other forms of
            negligence.
          </Paragraph>

          <Paragraph className="emphasis">
            But our expertise doesn't stop there.
          </Paragraph>

          <Paragraph>
            Before founding KR Law, APC, Kathy honed her skills at a prestigious
            corporate law firm in San Diego, where she gained invaluable
            experience in the cannabis and plant-based medicine industry. As an
            associate and department head, she worked on complex regulatory and
            compliance matters, land-use entitlements, and commercial and
            industrial real estate investments and acquisitions.
          </Paragraph>

          <Paragraph>
            Kathy's extensive knowledge of cannabis licensing and compliance
            even led to her serving on the California Cannabis Industry
            Association's policy board.
          </Paragraph>

          <Paragraph>
            With a Magna Cum Laude degree from the Thomas Jefferson School of
            Law and numerous awards for her legal writing and research, Kathy
            brings a level of sophistication and expertise to every case she
            handles.
          </Paragraph>

          <Paragraph>
            At KR Law, APC, we are passionate about helping our clients navigate
            the legal system and achieve the best possible outcomes for their
            cases. Don't let an injury or accident hold you back.
          </Paragraph>

          <Paragraph>
            Contact KR Law firm today to schedule your free consultation and
            learn how we can help you get the justice and compensation you
            deserve.
          </Paragraph>
        </ContentSection>
      </ContentWrapper>
    </SectionContainer>
  );
}
