import React from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  width: 100%;
  padding: 20px 20px 70px 20px;
  background-color: #fff;
`;

const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  color: #000;
  margin-bottom: 60px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #ba0a02;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    margin-bottom: 40px;
  }
`;

const TestimonialsGrid = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TestimonialCard = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }

  &:before {
    content: "";
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 80px;
    color: rgba(186, 10, 2, 0.1);
    font-family: Georgia, serif;
    line-height: 1;
  }
`;

const TestimonialTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #000;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const TestimonialText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  text-align: center;
  margin-bottom: 25px;
  min-height: 240px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #ba0a02;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    min-height: auto;
  }
`;

const ClientName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const AvatarContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f0d0b5;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  width: 60%;
  height: 60%;
  background-color: #d9a47a;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const StarRating = styled.div`
  display: flex;
  align-items: center;
`;

const Star = styled.div`
  color: #ba0a02;
  font-size: 24px;
  margin-right: 2px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const ReviewsPage = () => {
  return (
    <TestimonialsContainer>
      <InnerContainer>
        <MainTitle>WHAT PREVIOUS CLIENTS ARE SAYING</MainTitle>

        <TestimonialsGrid>
          <TestimonialCard>
            <TestimonialTitle>GET IN AN ACCIDENT? GET KATHY</TestimonialTitle>
            <TestimonialText>
              Had a dispute with a car dealership that was very frustrating and
              time consuming, Therefore a use my Legal plan to seek guidance
              from an attorney and Kathy was one of the first names to come up.
              I gave her a call that same day and she immediately knew what to
              do! Ask her any questions and she will respond in a timely manner!
              Within two weeks she was able to litigate my case and win a
              settlement that I didn't even think was going to happen! Her
              composure, Personality, and empathy goes a long way when she works
              with her clients. I honestly would have been happy if I didn't win
              my case because of how knowledgeable and professional she is!
            </TestimonialText>

            <ClientName>- Marques K</ClientName>

            <RatingContainer>
              <AvatarContainer>
                <Avatar />
              </AvatarContainer>
              <StarRating>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
              </StarRating>
            </RatingContainer>
          </TestimonialCard>

          <TestimonialCard>
            <TestimonialTitle>
              PROFESSIONAL, RELIABLE, DILIGENT
            </TestimonialTitle>
            <TestimonialText>
              Honestly, it can seem overwhelming or scary when you're seeking
              legal advice or looking for an attorney to hire to represent
              you... look no further, Kathy is the most welcoming, honest and
              diligent person. From the start you'll get her full attention. She
              is both professional and intuitive. She is able to break apart the
              big picture and offer constructive sound advice and assistance.
              She seems to manage chaos with class. If you're in a pinch and you
              need someone who will deliver what they promise, hire Kathy. I
              would send my friends and family to her in a heartbeat. Can-do
              attitude and always a positive person.
            </TestimonialText>

            <ClientName>- Britt</ClientName>

            <RatingContainer>
              <AvatarContainer>
                <Avatar />
              </AvatarContainer>
              <StarRating>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
                <Star>★</Star>
              </StarRating>
            </RatingContainer>
          </TestimonialCard>
        </TestimonialsGrid>
      </InnerContainer>
    </TestimonialsContainer>
  );
};

export default ReviewsPage;
