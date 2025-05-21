"use client";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";

// Define the animation keyframes
const scrollLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-50% - 0.5rem));
  }
`;

const scrollRight = keyframes`
  0% {
    transform: translateX(calc(-50% - 0.5rem));
  }
  100% {
    transform: translateX(0);
  }
`;

// Main container with mask gradient
const Container = styled.div<{ $pauseOnHover: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;

  /* Apply gradient mask only on larger screens */
  @media (min-width: 768px) {
    mask-image: linear-gradient(
      to right,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
  }

  ${(props) =>
    props.$pauseOnHover &&
    css`
      &:hover .scroll-container {
        animation-play-state: paused;
      }
    `}

  /* Hide on mobile */
  @media (max-width: 767px) {
    display: none;
  }
`;

// Scrolling container
const ScrollContainer = styled.div<{
  $direction: "left" | "right";
  $speed: "fast" | "normal" | "slow";
  $isAnimating: boolean;
}>`
  display: flex;
  gap: 1rem;
  width: max-content;

  ${(props) => {
    const duration =
      props.$speed === "fast"
        ? "20s"
        : props.$speed === "normal"
        ? "40s"
        : "80s";
    const animation = props.$direction === "left" ? scrollLeft : scrollRight;

    return (
      props.$isAnimating &&
      css`
        animation: ${animation} ${duration} linear infinite;
      `
    );
  }}
`;

// Individual testimonial card

const TestimonialCard = styled.div<{
  $backgroundColor: string;
  $textColor: string;
}>`
  flex-shrink: 0;
  padding: 1.5rem;
  background: ${(props) => props.$backgroundColor};
  border: 1px solid #e5e5e5;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* Smaller size for mobile */
  width: 320px;
  height: 375px;

  /* Larger size for desktop */
  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    padding: 2rem;
  }

  /* Add subtle border glow effect */
  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(27, 38, 50, 0.1),
      transparent
    );
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

// Quote text
const QuoteText = styled.blockquote<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 400;
  color: ${(props) => props.$textColor};
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;

  flex-grow: 1;
  /* Removed the overflow, text-overflow and webkit-line-clamp properties */

  @media (min-width: 768px) {
    font-size: 0.95rem; /* Increased from 0.85rem to 0.95rem as requested */
  }
`;

// Client info container
const ClientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

// Client name
const ClientName = styled.span<{ $textColor: string }>`
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  line-height: 1.6;
  font-weight: 500;
  color: ${(props) => props.$textColor};
  letter-spacing: -0.03em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

// Star container
const StarContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 8px;
`;

// Star icon
const Star = styled.div<{ $color: string }>`
  width: 20px;
  height: 20px;
  background: ${(props) => props.$color};
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
`;

// Section container for the entire testimonials section
const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  background: #fafafa;

  @media (min-width: 1025px) {
    padding: 6rem 2rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    /* padding: 5rem 1.5rem; */
    margin-top: 150px;
  }
`;

// Section title
const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 110%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #1b2632;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

// Wrapper for the scrolling content
const ScrollWrapper = styled.div`
  padding: 1rem 0;
`;

// Mobile Carousel Components
const MobileCarouselContainer = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;

const CarouselTrack = styled.div<{ $activeIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.$activeIndex * 100}%);
`;

const CarouselSlide = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const PaginationDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 8px;
`;

const PaginationDot = styled.button<{ $isActive: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#1B2632" : "#D9D9D9")};
  border: none;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

// Navigation buttons for mobile
const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  &:focus {
    outline: none;
  }
`;

const PrevButton = styled(NavButton)`
  left: 5px;
`;

const NextButton = styled(NavButton)`
  right: 5px;
`;

// Interface for testimonial items
interface TestimonialItem {
  quote: string;
  name: string;
}

// Props interface for the component
interface InfiniteMovingCardsProps {
  items: TestimonialItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

// Main component
const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const addAnimation = () => {
      if (containerRef.current && scrollerRef.current) {
        // Clone all items to create infinite scroll effect
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          scrollerRef.current?.appendChild(duplicatedItem);
        });

        setIsAnimating(true);
      }
    };

    addAnimation();
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToNextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <>
      {/* Desktop and Tablet version - Infinite scrolling cards */}
      <Container
        ref={containerRef}
        $pauseOnHover={pauseOnHover}
        className={className}
      >
        <ScrollWrapper>
          <ScrollContainer
            ref={scrollerRef}
            className="scroll-container"
            $direction={direction}
            $speed={speed}
            $isAnimating={isAnimating}
          >
            {items.map((item, index) => {
              // Determine card colors based on index
              const isEven = index % 2 === 0;
              const backgroundColor = isEven ? "#D9D9D9" : "#1B2632";
              const textColor = isEven ? "#57534E" : "#FFFFFF";
              const starColor = isEven ? "#000000" : "#FFFFFF";

              return (
                <TestimonialCard
                  key={`${item.name}-${index}`}
                  $backgroundColor={backgroundColor}
                  $textColor={textColor}
                >
                  <QuoteText $textColor={textColor}>"{item.quote}"</QuoteText>
                  <ClientInfo>
                    <ClientName $textColor={textColor}>{item.name}</ClientName>
                    <StarContainer>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} $color={starColor} />
                      ))}
                    </StarContainer>
                  </ClientInfo>
                </TestimonialCard>
              );
            })}
          </ScrollContainer>
        </ScrollWrapper>
      </Container>

      {/* Mobile version - Card carousel with pagination */}
      <MobileCarouselContainer>
        <CarouselTrack $activeIndex={activeIndex}>
          {items.map((item, index) => {
            // Determine card colors based on index
            const isEven = index % 2 === 0;
            const backgroundColor = isEven ? "#D9D9D9" : "#1B2632";
            const textColor = isEven ? "#57534E" : "#FFFFFF";
            const starColor = isEven ? "#000000" : "#FFFFFF";

            return (
              <CarouselSlide key={`mobile-${item.name}-${index}`}>
                <TestimonialCard
                  $backgroundColor={backgroundColor}
                  $textColor={textColor}
                >
                  <QuoteText $textColor={textColor}>"{item.quote}"</QuoteText>
                  <ClientInfo>
                    <ClientName $textColor={textColor}>{item.name}</ClientName>
                    <StarContainer>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} $color={starColor} />
                      ))}
                    </StarContainer>
                  </ClientInfo>
                </TestimonialCard>
              </CarouselSlide>
            );
          })}
        </CarouselTrack>

        <PaginationDots>
          {items.map((_, index) => (
            <PaginationDot
              key={`dot-${index}`}
              $isActive={activeIndex === index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </PaginationDots>
      </MobileCarouselContainer>
    </>
  );
};

// Wrapper component for easy integration into your site
export default function TestimonialsInfiniteCards() {
  const testimonials: TestimonialItem[] = [
    {
      quote:
        "After my motorcycle accident, I was overwhelmed with medical bills and unable to work. KR Law stepped in and handled everything professionally. They negotiated with the insurance companies and medical providers while I focused on recovery. Their expertise in personal injury cases was evident from our first meeting. I'm grateful for their dedication to my case and the successful outcome they achieved.",
      name: "Sarah Williams",
    },
    {
      quote:
        "Working with KR Law was the best decision I made after my car accident. Their attention to detail and persistence resulted in a settlement that was far beyond what the insurance company initially offered. The entire team was responsive and kept me informed throughout the entire process. They took the time to explain everything in terms I could understand, which really put me at ease during a stressful time.",
      name: "Robert Johnson",
    },
    {
      quote:
        "The team at KR Law provided exceptional service during my personal injury case. They were always available to answer questions and address concerns. Their knowledge of the law and strategic approach to my case resulted in a favorable settlement without having to go to trial. I appreciate their honesty, transparency, and commitment to getting me the compensation I deserved.",
      name: "David Thompson",
    },
    {
      quote:
        "I could not be more satisfied with the service provided by the KR Law Office. The team provided excellent, professional, clear and understandable advice and counsel to me. They are thorough and very knowledgeable. All processes that seem complicated were handled seamlessly and efficiently. They communicated everything with me step-by-step through the entire process.",
      name: "Michelle Gazmen",
    },
  ];

  return (
    <SectionContainer>
      <SectionTitle>What They Say About Us</SectionTitle>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        pauseOnHover={true}
      />
    </SectionContainer>
  );
}
