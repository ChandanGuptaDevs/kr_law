import React from "react";
import styled from "styled-components";
import KRLawLogo from "../../assets/kr_law_logo.png";
import AvvoLogoImage from "../../assets/kr_law_logo.webp";

const NextStepsContainer = styled.section`
  width: 100%;
  padding: 60px 0 0;
  background-color: rgba(0, 0, 0, 0.05);
  background-image: url("/src/assets/law_firm_bg.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const InfoSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  padding: 40px;
  border: 1px solid #ddd;
  position: relative;
  margin-right: 30px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 30px;
    padding: 30px;
  }
`;

const LogoContainer = styled.div`
  background-color: white;
  padding: 20px;
  display: inline-block;
  position: absolute;
  top: -30px;
  left: 40px;
  /* border: 1px solid #ddd; */

  @media (max-width: 768px) {
    top: -20px;
    left: 20px;
    padding: 15px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  margin: 0;
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 1px;

  span:first-child {
    color: #ba0a02;
  }

  span:last-child {
    color: #000;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const InfoTitle = styled.h2`
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: #333;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const InfoDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;

const StepsList = styled.ol`
  padding-left: 20px;
  margin: 0;

  & > li {
    margin-bottom: 15px;
    font-size: 16px;
    color: #555;
  }
`;

const StepHighlight = styled.span`
  font-weight: 600;
  color: #555;
`;

const FormSection = styled.div`
  flex: 1;
  background-color: #000;
  padding: 40px;
  color: white;

  @media (max-width: 1024px) {
    padding: 30px;
  }
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 0;
  margin-bottom: 20px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: white;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 0;
  margin-bottom: 30px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #fff;
  color: white;
  font-size: 16px;
  resize: none;
  outline: none;
  height: 80px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 0;
  background-color: #ba0a02;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #990902;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  background-color: #000;
  padding: 20px 0 40px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

const BottomLogoContainer = styled.div`
  margin-top: -80px;
  margin-bottom: 20px;
  width: 150px;
  height: 150px;
  z-index: 2;
`;

const BottomLogo = styled.img`
  width: 100%;
  height: auto;
`;

const AvvoLogoContainer = styled.div`
  margin: 20px 0;
`;

const AvvoLogo = styled.img`
  max-width: 150px;
  height: auto;
`;

const PhoneSection = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const CallText = styled.span`
  font-size: 36px;
  color: #ba0a02;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const PhoneNumber = styled.span`
  font-size: 40px;
  color: white;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Divider = styled.hr`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  border: none;
  border-bottom: 1px solid #333;
`;

const NextSteps = () => {
  return (
    <NextStepsContainer>
      <ContentWrapper>
        <InfoSection>
          <LogoContainer>
            <Logo>
              <img
                src={KRLawLogo}
                alt="KR Law Logo"
                style={{ maxHeight: "60px", width: "auto" }}
              />
            </Logo>
          </LogoContainer>

          <InfoTitle>NEXT STEPS</InfoTitle>
          <InfoDescription>
            Our experienced attorneys fight for your rights. What are the next
            steps to hire our experienced personal injury lawyers in Southern
            California?
          </InfoDescription>

          <StepsList>
            <li>
              Schedule Your <StepHighlight>Free Consultation</StepHighlight>
            </li>
            <li>
              <StepHighlight>Consult</StepHighlight> With An Experienced
              Attorney
            </li>
            <li>
              Let Our <StepHighlight>Attorneys Fight For You</StepHighlight>
            </li>
            <li>
              Get The <StepHighlight>Compensation You Deserve</StepHighlight>
            </li>
          </StepsList>
        </InfoSection>

        <FormSection>
          <FormTitle>SCHEDULE FREE CONSULTATION</FormTitle>

          <form>
            <FormInput type="text" placeholder="Name" />
            <FormInput type="email" placeholder="Email" />
            <FormInput type="tel" placeholder="Phone" />
            <FormTextarea placeholder="Tell us about your accident or arrest...."></FormTextarea>
            <SubmitButton type="submit">Contact Us Today</SubmitButton>
          </form>
        </FormSection>
      </ContentWrapper>

      <BottomSection>
        {/* <BottomLogoContainer>
          <BottomLogo src={KRLawLogo} alt="KR Law Logo" />
        </BottomLogoContainer> */}

        <AvvoLogoContainer>
          <AvvoLogo src={AvvoLogoImage} alt="Avvo Logo" />
        </AvvoLogoContainer>

        <PhoneSection>
          <CallText>CALL: </CallText>
          <PhoneNumber>(866) 425-0998</PhoneNumber>
        </PhoneSection>

        <Divider />
      </BottomSection>
    </NextStepsContainer>
  );
};

export default NextSteps;
