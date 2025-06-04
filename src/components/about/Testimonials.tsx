"use client";
import styled from "styled-components";

const TestimonialsSection = styled.section`
  position: relative;
  width: 100%;

  background: #ffffff;
  overflow: hidden;

  @media (min-width: 1025px) {
    padding: 80px 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

const ContentContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;

  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 110%;

  text-align: center;
  letter-spacing: -0.03em;
  color: #1b2632;

  margin-bottom: 50px;
  max-width: 800px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 28px;

    margin-bottom: 40px;
  }

  @media (max-width: 768px) {
    font-size: 25px;

    margin-bottom: 30px;

    max-width: 300px;
  }
`;

const TestimonialsContainer = styled.div`
  display: flex;

  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 769px) and (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    gap: 30px;
    align-items: center;
  }
`;

const TestimonialCard = styled.div<{ $darkMode?: boolean }>`
  width: 48%;
  max-width: 580px;
  background: ${(props) => (props.$darkMode ? "#1B2632" : "#FAFAF9")};

  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;

    max-width: 350px;
    padding: 25px 20px;
    min-height: 400px;
  }
`;

const TestimonialTitle = styled.h3<{ $darkMode?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;

  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.02em;

  color: ${(props) => (props.$darkMode ? "#FFFFFF" : "#1B2632")};
  margin-bottom: 20px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    text-align: center;
  }
`;

const TestimonialContent = styled.p<{ $darkMode?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-style: normal;

  font-weight: 400;
  font-size: 16px;

  line-height: 1.6;
  letter-spacing: -0.02em;
  color: ${(props) => (props.$darkMode ? "#FFFFFF" : "#57534E")};
  margin-bottom: 30px;
  flex-grow: 1;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ClientName = styled.p<{ $darkMode?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-style: normal;

  font-weight: 500;
  font-size: 16px;
  line-height: 110%;

  letter-spacing: -0.03em;
  color: ${(props) => (props.$darkMode ? "#FFFFFF" : "#1C1917")};

  margin-bottom: 10px;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const StarRating = styled.div`
  display: flex;
  gap: 4px;
`;

const Star = styled.div<{ $darkMode?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${(props) => (props.$darkMode ? "#FFFFFF" : "#1B2632")};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

const MobileCarouselControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
  }
`;

const CarouselDot = styled.button<{ $active?: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$active ? "#1B2632" : "#D9D9D9")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$active ? "#1B2632" : "#BBBBBB")};
  }
`;

interface TestimonialProps {
  title: string;
  content: string;
  name: string;
  rating: number;
  darkMode?: boolean;
}

export default function Testimonials() {
  const testimonials: TestimonialProps[] = [
    {
      title: "GET IN AN ACCIDENT ? GET KATHY",
      content:
        "Had a dispute with a car dealership that was very frustrating and time consuming, Therefore a use my Legal plan to seek guidance from an attorney and Kathy was one of the first names to come up. I gave her a call that same day and she immediately knew what to do! Ask her any questions and she will respond in a timely manner! Within two weeks she was able to litigate my case and win a settlement that I didn't even think was going to happen! Her composure, Personality, and empathy goes a long way when she works with her clients. I honestly would have been happy if I didn't win my case because of how knowledgeable and professional she is!",
      name: "Marques K",
      rating: 5,
      darkMode: true,
    },
    {
      title: "PROFESSIONAL, RELIABLE, DILIGENT",
      content:
        "Honestly, it can seem overwhelming or scary when you're seeking legal advice or looking for an attorney to hire to represent you... look no further, Kathy is the most welcoming, honest and diligent person. From the start you'll get her full attention. She is both professional and intuitive. She is able to break apart the big picture and offer constructive sound advice and assistance. She seems to manage chaos with class. If you're in a pinch and you need someone who will deliver what they promise, hire Kathy. I would send my friends and family to her in a heartbeat. Can-do attitude and always a positive person.",
      name: "Britt",
      rating: 5,
      darkMode: false,
    },
  ];

  return (
    <TestimonialsSection>
      <ContentContainer>
        <SectionTitle>WHAT PREVIOUS CLIENTS ARE SAYING</SectionTitle>

        <TestimonialsContainer>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              $darkMode={testimonial.darkMode}
            >
              <TestimonialTitle $darkMode={testimonial.darkMode}>
                {testimonial.title}
              </TestimonialTitle>
              <TestimonialContent $darkMode={testimonial.darkMode}>
                {testimonial.content}
              </TestimonialContent>

              <ClientInfo>
                <ClientName $darkMode={testimonial.darkMode}>
                  {testimonial.name}
                </ClientName>
                <StarRating>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} $darkMode={testimonial.darkMode} />
                  ))}
                </StarRating>
              </ClientInfo>
            </TestimonialCard>
          ))}
        </TestimonialsContainer>

        <MobileCarouselControls>
          {testimonials.map((_, index) => (
            <CarouselDot key={`dot-${index}`} $active={index === 0} />
          ))}
        </MobileCarouselControls>
      </ContentContainer>
    </TestimonialsSection>
  );
}
