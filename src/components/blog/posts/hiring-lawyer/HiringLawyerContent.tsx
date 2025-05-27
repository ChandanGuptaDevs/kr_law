"use client";
import styled from "styled-components";

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 40px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 0;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (min-width: 1025px) {
    padding: 0 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Question = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  letter-spacing: -0.02em;
  text-decoration-line: underline;
  color: #000000;
  margin-bottom: 30px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;
    line-height: 42px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 auto 25px;
    max-width: 360px;
  }
`;

const TextContent = styled.div`
  margin-bottom: 60px;

  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
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
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 16px;
  }
`;

export default function HiringLawyerContent() {
  return (
    <SectionContainer>
      <ContentWrapper>
        <TextContent>
          <Paragraph>
            Finding the right legal help or personal injury lawyer can be a
            daunting prospect. You often have to find a lawyer for your injuries
            at a time when you are already experiencing a significant amount of
            stress and anxiety. This is precisely why it's important for you to
            make choices that will help you or your lawyer win your personal
            injury case. But in all this frenzy, it's easy to make
            mistakes—mistakes that could cost you your lawsuit or even result in
            serious legal consequences, such as not receiving compensation for
            your injuries or worse. Here are five common mistakes people make
            when they're looking for a lawyer to represent their personal injury
            case:
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Did you find your injury attorney via word of mouth?
          </Question>
          <Paragraph>
            Did you come across your lawyer via word of mouth? Word of mouth can
            be a good way to find a lawyer, but it is not always the best way in
            a personal injury situation. You may know someone who has had a
            great experience with a particular lawyer, but that does not mean
            that lawyer will be the right fit for you and your personal injury.
            You should always take time to research the legal background of each
            injury lawyer before choosing them to represent your personal injury
            suit in court. For example, if you are looking for a lawyer who
            specializes in personal injury law and your friend only knows him as
            "a lawyer that helped his parents out when they got into an
            accident," then this may not be enough information to determine
            whether or not this lawyer will do an adequate job representing your
            personal injury.
          </Paragraph>
          <Paragraph>
            Another reason why relying on word of mouth is dangerous is that
            there are personal injury lawyers who advertise themselves online as
            having extensive experience in personal injury law when they
            actually do not have any licensing at all! It is important that any
            prospective client understands how important it is to verify whether
            or not their potential representation has been properly licensed by
            their state bar association before hiring them (or even meeting with
            them).
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>
            Do you think all personal injury lawyers are the same?
          </Question>
          <Paragraph>
            Many people in accidents like these arrive at the assumption that
            all attorneys are the same. You may have gone to a lawyer once or
            twice in your life, and that lawyer performed their job well enough
            that you assumed they were all the same. Unfortunately, in most
            personal injury claims, this assumption is far from accurate.
          </Paragraph>
          <Paragraph>
            Even though it's true that each lawyer has a legal specialty (such
            as criminal law or family law), there are still many differences
            between attorneys when it comes to experience, success rate, and
            notoriety in their field of practice or personal injury. In addition
            to these factors being important for any potential client looking
            for legal representation, each case of personal injury also requires
            some very specific expertise and knowledge of procedure—even more so
            than other types of personal injury litigation do—so even if a
            lawyer specializes in criminal defense work or family law by day,
            that doesn't mean he or she will necessarily know everything about
            personal injury law by night!
          </Paragraph>
        </TextContent>

        <TextContent>
          <Question>Conclusion</Question>
          <Paragraph>
            If you've recently been in an accident and are reviewing legal
            options/ lawyers, our law firm would love to discuss your options
            with a free call and free consultation. Our various services and
            experience would help you earn top compensation to cover injuries,
            car repair costs, increased auto insurance rates, and other various
            damages from the accident. It will be our duty to get you on the
            road to recovery, and back to your normal routine.
          </Paragraph>
          <Paragraph>
            Our lawyers have a plethora of experience covering a wide range of
            accidents and accident cases. Our law firm will be your one-stop
            legal resource during this difficult time. Give us a call today to
            learn more and earn the compensation you deserve. We also operate on
            contingency, meaning we're free unless we win!
          </Paragraph>
        </TextContent>
      </ContentWrapper>
    </SectionContainer>
  );
}
