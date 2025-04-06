import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const TestimonialsContainer = styled.section`
  width: 100%;
  background-color: #f5f5f5;
  padding: 60px 0 0 0;
  position: relative;
  overflow: hidden;
`;

const TestimonialSlider = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const TestimonialTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.offset}px);
`;

const Testimonial = styled.div`
  min-width: 100%;
  padding: 0 15%;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 10%;
  }

  @media (max-width: 480px) {
    padding: 0 5%;
  }
`;

const TestimonialBox = styled.div`
  background-color: #e9e9e9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 30px 0;
`;

const Star = styled.span`
  color: #f5a623;
  font-size: 32px;
  margin: 0 5px;
`;

const TestimonialText = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

const ClientName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin: 0;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  z-index: 3;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

const SliderButton = styled.button`
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  color: #ba0a02;
  font-size: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  transition: background-color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: rgba(186, 10, 2, 0.1);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    width: 40px;
    height: 40px;
  }
`;

const testimonialData = [
  {
    id: 1,
    text: "I could not be more satisfied with the service provided by the KR Law Office. The team provided excellent, professional, clear and understandable advice and counsel to me. They are thorough and very knowledgeable. All processes that seem complicated were handled seamlessly and efficient. They communicated everything with me step-by-step through the entire process. This was a clear demonstration of the care and compassion they have for their clients. I highly recommend KR Law to anyone seeking an experienced, trustworthy and caring personal injury, DUI and accident attorney.",
    name: "Michelle Gazmen",
  },
  {
    id: 2,
    text: "Working with KR Law was the best decision I made after my car accident. Their attention to detail and persistence resulted in a settlement that was far beyond what the insurance company initially offered. The entire team was responsive and kept me informed throughout the entire process. They took the time to explain everything in terms I could understand, which really put me at ease during a stressful time.",
    name: "Robert Johnson",
  },
  {
    id: 3,
    text: "After my motorcycle accident, I was overwhelmed with medical bills and unable to work. KR Law stepped in and handled everything professionally. They negotiated with the insurance companies and medical providers while I focused on recovery. Their expertise in personal injury cases was evident from our first meeting. I'm grateful for their dedication to my case and the successful outcome they achieved.",
    name: "Sarah Williams",
  },
  {
    id: 4,
    text: "The team at KR Law provided exceptional service during my personal injury case. They were always available to answer questions and address concerns. Their knowledge of the law and strategic approach to my case resulted in a favorable settlement without having to go to trial. I appreciate their honesty, transparency, and commitment to getting me the compensation I deserved.",
    name: "David Thompson",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (sliderRef.current) {
        setSliderWidth(sliderRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => {
      window.removeEventListener("resize", updateWidth);
      clearInterval(interval);
    };
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <TestimonialsContainer>
      <TestimonialSlider ref={sliderRef}>
        <TestimonialTrack offset={-currentIndex * sliderWidth}>
          {testimonialData.map((testimonial) => (
            <Testimonial key={testimonial.id}>
              <TestimonialBox>
                <Title>WHAT OUR CLIENTS ARE SAYING</Title>
                <Stars>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                  <Star>★</Star>
                </Stars>
                <TestimonialText>{testimonial.text}</TestimonialText>
                <ClientName>{testimonial.name}</ClientName>
              </TestimonialBox>
            </Testimonial>
          ))}
        </TestimonialTrack>

        <SliderControls>
          <SliderButton onClick={handlePrev}>❮</SliderButton>
          <SliderButton onClick={handleNext}>❯</SliderButton>
        </SliderControls>
      </TestimonialSlider>
    </TestimonialsContainer>
  );
};

export default Testimonials;
