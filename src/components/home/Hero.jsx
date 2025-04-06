import React from "react";
import styled from "styled-components";
import lawyerImage from "../../assets/home_imgs/lawyer_img001.png";
import badgesImage from "../../assets/home_imgs/law_badges.png";
import heroBgImage from "../../assets/home_imgs/hero_section_bg_img.jpg";

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${heroBgImage});
  background-size: cover;
  background-position: center;
  padding: 0;
  position: relative;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

const LawyerImage = styled.img`
  width: 100%;
  max-height: 600px;
  object-fit: contain;
  /* background-color: #333333; */

  @media (max-width: 1024px) {
    max-height: 500px;
  }

  @media (max-width: 768px) {
    max-height: 400px;
  }
`;

const OverlayText = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  padding: 20px 0;
  /* background-color: #333333; */
`;

const MillionsText = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const WonForClients = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ReviewStars = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  align-items: center;
`;

const GoogleIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%234285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/><path fill="%2334A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/><path fill="%23FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/><path fill="%23EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
`;

const Star = styled.span`
  color: #f8ce0b;
  font-size: 28px;
  margin: 0 2px;
`;

const ReviewText = styled.div`
  font-size: 16px;
  margin-top: 10px;
  color: white;
`;

const HorizontalLine = styled.div`
  width: 70%;
  height: 1px;
  background-color: #555;
  margin: 20px auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const BadgesContainer = styled.div`
  width: 100%;

  padding: 30px 0;
  /* background-color: #333333; */
  display: flex;
  justify-content: center;
`;

const Badges = styled.img`
  max-width: 70%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const FormSection = styled.div`
  flex: 0 0 520px;
  /* flex: 0 0 420px; */
  /* background-color: #222222; */
  padding: 40px;
  margin: 20px;
  color: white;

  @media (max-width: 1024px) {
    flex: 0 0 auto;
    width: 80%;
    margin: 40px auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 30px;
  }
`;

const FormHeading = styled.h2`
  font-size: 28px;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const FormSubheading = styled.h3`
  font-size: 20px;
  margin: 0 0 30px 0;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const FormText = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const RedText = styled.span`
  color: #ba0a02;
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

const Hero = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <ImageContainer>
          <LawyerImage src={lawyerImage} alt="KR Law Attorney" />

          <OverlayText>
            <MillionsText>MILLIONS IN SETTLEMENTS</MillionsText>
            <WonForClients>WON FOR OUR CLIENTS!</WonForClients>

            <ReviewStars>
              <GoogleIcon />
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
              <Star>★</Star>
            </ReviewStars>

            <ReviewText>- See Our Reviews -</ReviewText>
          </OverlayText>
        </ImageContainer>

        <FormSection>
          <FormHeading>Have you been . . .</FormHeading>
          <FormSubheading>a victim of wrl</FormSubheading>

          <FormText>
            We are not your average law firm – call us now to get the
            compensation that you deserve.
            <br />
            <br />
            <RedText>Pay Nothing Until YOU Win!</RedText>
          </FormText>

          <form>
            <FormInput type="text" placeholder="Name" />
            <FormInput type="email" placeholder="Email" />
            <FormInput type="tel" placeholder="Phone" />
            <FormTextarea placeholder="Tell us about your accident or arrest...."></FormTextarea>
            <SubmitButton type="submit">Contact Us Today</SubmitButton>
          </form>
        </FormSection>
      </ContentWrapper>

      <HorizontalLine />

      <BadgesContainer>
        <Badges
          src={badgesImage}
          alt="Legal Professional Badges and Certifications"
        />
      </BadgesContainer>
    </HeroContainer>
  );
};

export default Hero;
