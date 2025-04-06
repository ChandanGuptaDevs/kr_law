import React from "react";
import styled from "styled-components";
import carAccidentIcon from "../../assets/home_imgs/car_accident.png";
import motorcycleAccidentIcon from "../../assets/home_imgs/motorcycle_accident.png";
import truckAccidentIcon from "../../assets/home_imgs/truck_accident.png";
import uberLyftAccidentIcon from "../../assets/home_imgs/uber_lyft_accidents.png";
import pedestrianAccidentIcon from "../../assets/home_imgs/pedestrian_accident.png";
import dogBitesIcon from "../../assets/home_imgs/dog_bites.png";
import wrongfulDeathIcon from "../../assets/home_imgs/wrongful_death.png";
import mailImage from "../../assets/home_imgs/mail_img.jpg";

const SectionContainer = styled.section`
  width: 100%;
  padding: 60px 0;
  background-color: #f5f5f5;
  position: relative;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Card = styled.div`
  width: 260px;
  height: 260px;
  margin: 15px;
  margin-top: 35px;
  background-color: white;
  border-radius: 5px;
  overflow: visible;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const BlackCard = styled(Card)`
  background-color: #111;
  color: white;
`;

const IconContainer = styled.div`
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 2;

  ${BlackCard} & {
    background-color: #111;
  }
`;

const Icon = styled.img`
  max-height: 35px;
  max-width: 35px;
`;

const MailImage = styled.img`
  max-height: 35px;
  max-width: 35px;
  border-radius: ${(props) => (props.isRound ? "50%" : "0")};
`;

const CardContent = styled.div`
  padding: 40px 20px 20px 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  height: 100%;
  box-sizing: border-box;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 15px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 13px;
  line-height: 1.4;
  color: #555;
  flex-grow: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  margin: 5px 0;

  @media (max-width: 768px) {
    font-size: 12px;
    -webkit-line-clamp: 2;
  }
`;

const WhiteDescription = styled(Description)`
  color: #ccc;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #ba0a02;
  color: white;
  text-decoration: none;
  padding: 10px 25px;
  border-radius: 30px;
  margin-top: 20px;
  font-weight: 600;
  transition: background-color 0.3s;

  &:hover {
    background-color: #990902;
  }
`;

const PracticeAreas = () => {
  return (
    <SectionContainer>
      <GridContainer>
        {/* Car Accidents */}
        <Card>
          <IconContainer>
            <Icon src={carAccidentIcon} alt="Car Accident" />
          </IconContainer>
          <CardContent>
            <Title>CAR ACCIDENTS</Title>
            <Description>
              Insurance companies pressure car accident victims to quickly
              settle claims and is why you need a car accident lawyer.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Motorcycle Accidents */}
        <Card>
          <IconContainer>
            <Icon src={motorcycleAccidentIcon} alt="Motorcycle Accident" />
          </IconContainer>
          <CardContent>
            <Title>MOTORCYCLE ACCIDENTS</Title>
            <Description>
              If you love the feel of the wind whistling in your face as you
              race at high speeds in the open are, you aren't alone.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Truck Accidents */}
        <Card>
          <IconContainer>
            <Icon src={truckAccidentIcon} alt="Truck Accident" />
          </IconContainer>
          <CardContent>
            <Title>TRUCK ACCIDENTS</Title>
            <Description>
              Injuries and damage which result from accidents involving Semi
              trucks tend to be more severe than those which occur when two
              passenger vehicles collide.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Uber & Lyft Accidents */}
        <Card>
          <IconContainer>
            <Icon src={uberLyftAccidentIcon} alt="Uber & Lyft Accidents" />
          </IconContainer>
          <CardContent>
            <Title>UBER & LYFT ACCIDENTS</Title>
            <Description>
              It's hard to believe we all once lived a rideshare-less existence.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Pedestrian Accidents */}
        <Card>
          <IconContainer>
            <Icon src={pedestrianAccidentIcon} alt="Pedestrian Accidents" />
          </IconContainer>
          <CardContent>
            <Title>PEDESTRIAN ACCIDENTS</Title>
            <Description>
              Pedestrian accidents don't happen only when people cross the
              streets.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Dog Bites */}
        <Card>
          <IconContainer>
            <Icon src={dogBitesIcon} alt="Dog Bites" />
          </IconContainer>
          <CardContent>
            <Title>DOG BITES</Title>
            <Description>
              Dog bite statistics are alarming. In 2018 alone, 36 fatal dog
              attacks were recorded. What should you do if you are bitten by a
              dog?
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Wrongful Death */}
        <Card>
          <IconContainer>
            <Icon src={wrongfulDeathIcon} alt="Wrongful Death" />
          </IconContainer>
          <CardContent>
            <Title>WRONGFUL DEATH</Title>
            <Description>
              If you have lost a loved one because of wrongful death, California
              law allows you to recover associated financial losses.
            </Description>
            <Button href="#">Learn More</Button>
          </CardContent>
        </Card>

        {/* Contact Us */}
        <BlackCard>
          <IconContainer>
            <MailImage src={mailImage} alt="Contact Us" isRound={false} />
          </IconContainer>
          <CardContent>
            <Title>CONTACT US</Title>
            <WhiteDescription>
              If you've been injured, contact the personal injury lawyers at KR
              Law Group today for a FREE no obligation consultation.
            </WhiteDescription>
            <Button href="#">CONTACT US</Button>
          </CardContent>
        </BlackCard>
      </GridContainer>
    </SectionContainer>
  );
};

export default PracticeAreas;
