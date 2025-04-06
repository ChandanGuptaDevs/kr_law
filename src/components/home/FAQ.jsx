import React, { useState } from "react";
import styled from "styled-components";

const FAQContainer = styled.section`
  width: 100%;
  background-color: #111;
  padding: 0 20px 40px 20px;
  color: white;
  border-bottom: 8px solid #ba0a02;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const TitleHighlight = styled.span`
  font-weight: 700;
`;

const FAQList = styled.div`
  margin-bottom: 50px;
`;

const FAQItem = styled.div`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 3px;
  overflow: hidden;
`;

const Question = styled.div`
  padding: 20px;
  background-color: white;
  color: #222;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 15px;
  }
`;

const Answer = styled.div`
  padding: ${(props) => (props.isOpen ? "20px" : "0 20px")};
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  color: #444;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: ${(props) => (props.isOpen ? "15px" : "0 15px")};
  }
`;

const AnswerText = styled.p`
  margin: 0;
  line-height: 1.6;
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const ToggleIcon = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ba0a02;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  position: relative;

  &::before {
    content: "${(props) => (props.isOpen ? "−" : "+")}";
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 20px;

    &::before {
      font-size: 16px;
    }
  }
`;

const ConsultationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const ConsultationButton = styled.a`
  display: inline-block;
  background-color: #ba0a02;
  color: white;
  font-weight: 600;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.3s;
  text-transform: uppercase;
  margin-bottom: 30px;

  &:hover {
    background-color: #990902;
  }
`;

const ConsultationText = styled.p`
  font-size: 18px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Highlight = styled.span`
  font-weight: 600;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: "WHAT CAN A PERSONAL INJURY LAWYER DO FOR ME?",
      answer:
        "We can help you get the highest settlement for your claim and take on the insurance companies, attorneys, and big businesses. We are here to help you fight and win in order to get what you deserve.",
    },
    {
      question: "HOW DO I KNOW IF I HAVE A PERSONAL INJURY CLAIM?",
      answer:
        "If you have been injured due to someone else's negligence or wrongful actions, you may have a personal injury claim. This includes injuries from car accidents, slip and falls, medical malpractice, defective products, or workplace accidents. Our attorneys can evaluate your case in a free consultation to determine if you have a valid claim.",
    },
    {
      question: "HOW LONG DO I HAVE TO MAKE A CLAIM?",
      answer:
        "In California, the statute of limitations for most personal injury claims is two years from the date of the injury. However, this timeline can vary depending on the type of case and other factors. For claims against government entities, you may have as little as six months to file a claim. It's critical to consult with an attorney as soon as possible to ensure you don't miss any important deadlines.",
    },
    {
      question: "WHY HIRE A PERSONAL INJURY ATTORNEY?",
      answer:
        "A personal injury attorney has the expertise to properly value your claim, negotiate with insurance companies, and navigate complex legal procedures. Studies show that accident victims who hire attorneys typically receive larger settlements than those who handle claims themselves. We also work on a contingency fee basis, meaning you pay nothing unless we win your case.",
    },
    {
      question: "WHAT TO DO IF YOU ARE IN A CAR ACCIDENT",
      answer:
        "After a car accident, prioritize safety and health by checking for injuries and moving to a safe location if possible. Call 911 to report the accident and get medical help. Exchange information with the other driver including names, contact information, insurance details, and take photos of the accident scene and damage. Seek medical attention even if you feel fine, as some injuries aren't immediately apparent. Contact your insurance company to report the accident, and consult with a personal injury attorney before accepting any settlement offers.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <FAQContainer>
      <InnerContainer>
        <Title>
          THE MOST <TitleHighlight>FREQUENTLY ASKED QUESTIONS</TitleHighlight>{" "}
          WE ANSWER MOST OFTEN
        </Title>

        <FAQList>
          {faqData.map((faq, index) => (
            <FAQItem key={index}>
              <Question onClick={() => toggleQuestion(index)}>
                {faq.question}
                <ToggleIcon isOpen={index === openIndex} />
              </Question>
              <Answer isOpen={index === openIndex}>
                <AnswerText>{faq.answer}</AnswerText>
              </Answer>
            </FAQItem>
          ))}
        </FAQList>

        <ConsultationContainer>
          <ConsultationButton href="#">
            SCHEDULE A FREE CONSULTATION NOW
          </ConsultationButton>
          <ConsultationText>
            You don't pay anything <Highlight>unless we win</Highlight>. Talk to
            an attorney <Highlight>now</Highlight> about your unique case.
          </ConsultationText>
        </ConsultationContainer>
      </InnerContainer>
    </FAQContainer>
  );
};

export default FAQ;
