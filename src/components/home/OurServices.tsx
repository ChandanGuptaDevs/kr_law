"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import ServiceItemComponent from "@/components/common/ServiceItem";

// Types for service items
interface ServiceItemType {
  name: string;
  link: string;
}

const SectionContainer = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  @media (min-width: 1025px) {
    height: 794px;
    margin-top: 60px;
    padding: 0; /* Removed the 99px padding */
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    height: 830px;
    margin-top: 60px;
    padding: 0; /* Changed from 0 40px to 0 */
  }

  @media (max-width: 768px) {
    height: auto;
    min-height: 1200px;
    margin-top: 40px;
    padding: 0 16px 40px;
  }
`;

const SectionTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #1b2632;

  @media (min-width: 1025px) {
    position: absolute;
    width: 272px;
    height: 48px;
    left: 0px;
    top: 0px;
    font-size: 32px;
    line-height: 48px;
    display: flex;
    align-items: center;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 250px;
    height: 44px;
    left: 0px; /* Changed from 40px to 0px */
    top: 0px;
    font-size: 28px;
    line-height: 44px;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 205px;
    height: 38px;
    margin: 0 auto 20px;
    font-size: 25px;
    line-height: 38px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #000000;

  @media (min-width: 1025px) {
    position: absolute;
    width: 100%;
    max-width: 1080px;
    height: auto;
    min-height: 108px;
    left: 0px;
    top: 78px;
    display: flex;
    align-items: center;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 100%;
    height: auto;
    min-height: 108px;
    left: 0px; /* Changed from 40px to 0px */
    top: 70px;
    font-size: 17px;
    line-height: 26px;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 0 30px;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    text-align: justify;
  }
`;

const ImageContainer = styled.div`
  position: relative;

  @media (min-width: 1025px) {
    position: absolute;
    width: 558px;
    height: 530px;
    left: 0px;
    top: 220px;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 441px;
    height: 445px;
    left: 0px; /* Changed from 40px to 0px */
    top: 220px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: 380px;
    margin: 0 auto 30px;
  }
`;

const DarkRectangle = styled.div`
  position: absolute;
  background: #1b2632;
  box-shadow: 0px 8px 20.4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  @media (min-width: 1025px) {
    width: 480px;
    height: 460px;
    left: 28px;
    top: 28px;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 390px;
    height: 370px;
    left: 20px;
    top: 50px;
  }

  @media (max-width: 768px) {
    width: 310px; /* Updated from 348px to 310px */
    height: 290px; /* Updated from 310px to 290px */
    left: 50%;
    transform: translateX(-50%);
    top: 55px;
  }
`;

const StyledImage = styled(Image)`
  position: absolute;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.5s ease;
  z-index: 2;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25); /* Matching the button shadow */

  &:hover {
    transform: scale(1.02);
    box-shadow: 8px 10px 6px rgba(0, 0, 0, 0.3); /* Slightly enhanced on hover */
  }

  @media (min-width: 1025px) {
    width: 460px;
    height: 455px;
    left: 54px;
    top: 50px;
  }
  /* Tablet specific styling - improved positioning */
  @media (min-width: 769px) and (max-width: 1024px) {
    width: 380px;
    height: 360px;

    left: 40px; /* Updated from 15px for better offset */
    top: 70px; /* Updated from 15px for better positioning */
  }

  @media (max-width: 768px) {
    width: 305px; /* Updated from 325px to 305px */
    height: 290px; /* Updated from 275px to 290px */
    left: 54%; /* Updated from 50% to 54% */
    transform: translateX(-50%);

    top: 69px; /* Updated from 20px to 69px */

    &:hover {
      transform: translateX(-50%) scale(1.02);
      box-shadow: 8px 10px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

const ServicesListContainer = styled.div`
  @media (min-width: 1025px) {
    position: absolute;
    width: 633px;
    height: auto;
    left: 586px;
    top: 240px;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 100%;
    max-width: 500px;
    height: auto;
    left: 470px; /* Changed from 520px to 470px to compensate for the reduced left spacing */
    top: 220px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    max-width: 370px;
    height: auto;
    margin: 0 auto;
  }
`;

const ExploreButton = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #1b2632;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #2a3c4d;
    transform: translateY(-2px);
  }

  @media (min-width: 1025px) {
    position: absolute;
    width: 254px;
    height: 58px;

    left: 586px;
    top: 729px;
  }

  /* Tablet specific styling */
  @media (min-width: 769px) and (max-width: 1024px) {
    position: absolute;
    width: 240px;
    height: 56px;
    left: 470px; /* Changed from 520px to 470px */
    top: 695px;
  }

  @media (max-width: 768px) {
    position: relative;
    width: 240px;
    height: 56px;
    margin: 30px auto 0;
  }
`;

const ButtonText = styled.span`
  width: 193px;
  height: 30px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #fafaf9;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  white-space: nowrap; /* Ensures text stays on one line */

  ${ExploreButton}:hover & {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    width: 180px;
  }
`;

const ArrowWhite = styled(Image)`
  transition: transform 0.3s ease;
  height: auto;

  ${ExploreButton}:hover & {
    transform: translateX(3px);
  }
`;

export default function OurServices() {
  // List of services
  const services: ServiceItemType[] = [
    { name: "Car Accidents", link: "/practice-areas/car-accidents" },
    {
      name: "Motorcycle Accidents",
      link: "/practice-areas/motorcycle-accidents",
    },
    {
      name: "Uber and Lyft Accidents",
      link: "/practice-areas/uber-accident-lawyers",
    },
    { name: "Truck Accidents", link: "/practice-areas/truck-accidents" },
    {
      name: "Pedestrian Accidents",
      link: "/practice-areas/pedestrial-accident",
    },
    { name: "Dog Bites", link: "/practice-areas/dog-bites" },
    { name: "Wrongful Death", link: "/practice-areas/wrongful-death-attorney" },
  ];

  return (
    <SectionContainer>
      <SectionTitle>OUR SERVICES</SectionTitle>

      <Description>
        At KR LAW GROUP, we understand that a serious injury can turn your life
        upside down in an instant. That's why we're here—to help you navigate
        the legal process with care, clarity, and unwavering support. Whether
        you've been hurt in an accident, suffered due to someone else's
        negligence, or lost a loved one, our dedicated team is committed to
        standing by your side and fighting for the compensation and peace of
        mind you deserve.
      </Description>

      <ImageContainer>
        <DarkRectangle />
        <StyledImage
          src="/images/ourServices.jpg"
          alt="Legal services represented by a judge's gavel"
          width={505}
          height={428}
          priority
        />
      </ImageContainer>

      <ServicesListContainer>
        {services.map((service, index) => (
          <ServiceItemComponent
            key={`service-${index}`}
            name={service.name}
            link={service.link}
          />
        ))}
      </ServicesListContainer>

      <ExploreButton href="/practice-areas">
        <ButtonText>Explore Our Services</ButtonText>
        <ArrowWhite
          src="/images/Arrow_white.svg"
          alt="Arrow"
          width={27}
          height={20}
        />
      </ExploreButton>
    </SectionContainer>
  );
}
