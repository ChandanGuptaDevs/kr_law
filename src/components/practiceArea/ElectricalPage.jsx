import React from 'react';
import styled from 'styled-components';
import Image1 from '../../assets/services_imgs/img_01.webp';
import Image2 from '../../assets/services_imgs/img_02.webp';

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 80px 24px 100px;
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #1d1d1f;
  line-height: 1.75;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 16px;
`;

const KeyTakeaways = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  margin: 20px 0;
  border-radius: 4px;

  h3 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  div {
    line-height: 1.8;
    font-size: 16px;
  }

  p {
    margin-bottom: 10px;
  }
`;

const FormContainer = styled.div`
  flex: 1;
  background: #212121;
  padding: 35px;
  color: white;
  order: 1;
  @media (max-width: 1200px) {
    padding: 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    order: 1;
  }
`;

const FormWrapper = styled.div`
  width: 100%;

  max-width: 520px;
  margin: 0 auto;
  font-family: 'Spartan', sans-serif;
`;

const FormTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: #ba0a02;
  }
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 400;

  margin-bottom: 20px;
  line-height: 1.5;
  color: #cccccc;
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #444;
  color: white;

  padding: 8px 0;
  font-size: 0.9rem;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 4px;
  outline: none;
  transition: all 0.3s ease;
  &::placeholder {
    color: #999;
    opacity: 0.7;
  }
  &:focus {
    border-bottom-color: #ba0a02;
  }
  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 7px 0;
  }
`;

const Select = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #444;
  color: white;

  padding: 8px 0;
  font-size: 0.9rem;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 4px;
  outline: none;
  transition: all 0.3s ease;
  appearance: none;
  cursor: pointer;

  &:focus {
    border-bottom-color: #ba0a02;
  }
  option {
    background: #333;
    color: white;
    padding: 5px;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 7px 0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #444;
  color: white;

  padding: 8px 0;
  font-size: 0.9rem;
  font-family: 'Spartan', sans-serif;
  margin-bottom: 4px;
  outline: none;
  transition: all 0.3s ease;
  height: 70px;
  resize: none;
  &::placeholder {
    color: #999;
    opacity: 0.7;
  }

  &:focus {
    border-bottom-color: #ba0a02;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 7px 0;
    height: 60px;
  }
`;

const Button = styled.button`
  width: 100%;
  background: #ba0a02;
  color: white;

  font-size: 0.9rem;
  padding: 10px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 15px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-family: 'Spartan', sans-serif;

  &:hover {
    background: #d01103;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(186, 10, 2, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 9px 0;
  }
`;

const Row = styled.div`
  display: flex;

  gap: 12px;

  ${FormGroup} {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }
`;

const SectionLeft = styled(Section)`
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SectionRight = styled(Section)`
  flex-direction: row-reverse;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextOnlySection = styled.div`
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

const TextContent = styled.div`
  flex: 1.5;
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    max-width: 420px;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  }
`;

const Heading = styled.h2`
  color: #111;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 24px;
  letter-spacing: -0.3px;
`;

const Subheading = styled.h2`
  font-size: 22px;
  margin: 32px 0 16px;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  margin-bottom: 20px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const ElectricalPage = () => {
  return (
    <>
      <Container>
        <TextOnlySection>
          <TextContent>
            <Title>ELECTRIC SCOOTER ACCIDENT LAWYER</Title>
            <Paragraph>
              Electric scooters are becoming an increasingly popular mode of
              transportation in Southern California, especially with traffic at
              an all-time low. While they offer convenience and
              eco-friendliness, they can also be dangerous.
            </Paragraph>
            <Paragraph>
              According to TechCrunch, electric scooters accounted for almost
              half of all micro-mobility trips in 2018. If you own an electric
              scooter or are considering purchasing one, it is important to
              understand your legal rights in the event of an accident. Even
              though the majority of shared electric scooter services are
              currently closed due to the pandemic, people are still using their
              own personal electric scooters to travel to essential destinations
              such as grocery stores, pharmacies, and doctor appointments.
            </Paragraph>

            <Title>Electric Scooter Risks</Title>
            <Paragraph>
              Electric scooters can be a convenient and eco-friendly way to
              travel short distances. However, there are also several risks
              associated with using electric scooters. Here are some of the most
              common risks:
            </Paragraph>
            <Paragraph>
              Accidents: Electric scooters can be difficult to maneuver and are
              not always easy to control. This can increase the risk of
              accidents, especially if the rider is not experienced or does not
              follow traffic rules.
            </Paragraph>
            <Paragraph>
              Injuries: In the event of an accident, riders can suffer from
              serious injuries, such as broken bones, head trauma, and spinal
              cord injuries.
            </Paragraph>
            <Paragraph>
              Lack of Safety Gear: Many riders do not wear helmets or other
              protective gear while riding electric scooters, which can increase
              the risk of injury in the event of an accident.
            </Paragraph>
            <Paragraph>
              Mechanical Failures: Electric scooters can experience mechanical
              failures, such as brake failure, which can lead to accidents.
            </Paragraph>
            <Paragraph>
              Road Hazards: Potholes, uneven pavement, and other road hazards
              can increase the risk of accidents and injuries for electric
              scooter riders.
            </Paragraph>
            <Paragraph>
              It is important for riders to take precautions to reduce their
              risk of injury while riding electric scooters. This includes
              wearing protective gear, following traffic rules, and being aware
              of road hazards. If you or a loved one has been injured in an
              electric scooter accident, contact an experienced personal injury
              lawyer to learn about your legal options.
            </Paragraph>

            <Title>What to Do After an Electric Scooter Accident</Title>
            <Paragraph>
              Electric scooter accidents can be traumatic experiences, and it's
              essential to know what to do if you find yourself in one. Here are
              the steps to take after an electric scooter accident:
            </Paragraph>
            <Paragraph>
              Seek Medical Attention: Your health and safety should always be
              your top priority. If you're injured in an electric scooter
              accident, seek medical attention immediately, even if you don't
              think your injuries are severe. Some injuries, like concussions,
              may not show immediate symptoms.
            </Paragraph>
            <Paragraph>
              Report the Accident: If the accident occurred on public property,
              report it to the police. They will document the accident and
              create an accident report, which can be useful if you decide to
              file a claim.
            </Paragraph>
            <Paragraph>
              Document the Accident: Take photos of the scene of the accident,
              your injuries, and any damage to the electric scooter. This can
              help provide evidence to support your claim.
            </Paragraph>
            <Paragraph>
              Get Contact Information: Obtain the name, address, phone number,
              and insurance information of any other parties involved in the
              accident, including any witnesses.
            </Paragraph>
            <Paragraph>
              Contact an Electric Scooter Accident Lawyer: An experienced
              personal injury lawyer can help you navigate the legal process and
              ensure that your rights are protected. They can advise you on the
              appropriate steps to take and can represent you in negotiations
              with the other party's insurance company.
            </Paragraph>
            <Paragraph>
              Electric scooter accidents can result in significant medical
              expenses, lost wages, and pain and suffering. If you've been
              injured in an electric scooter accident, it's essential to contact
              an experienced personal injury lawyer to explore your legal
              options and get the compensation you deserve.
            </Paragraph>

            <Title>Types of Electric Scooter Accident Cases</Title>
            <Paragraph>
              Electric scooter accidents can occur in a variety of ways, and the
              types of cases that arise from these accidents can vary as well.
              Here are some of the most common types of electric scooter
              accident cases:
            </Paragraph>
            <Paragraph>
              Vehicle Collisions: This type of accident occurs when an electric
              scooter collides with a car, truck, or other motor vehicle. These
              accidents can result in serious injuries, and the driver of the
              motor vehicle is often held responsible for damages.
            </Paragraph>
            <Paragraph>
              Pedestrian Collisions: Pedestrian collisions occur when an
              electric scooter rider collides with a pedestrian, causing injury.
              These cases can be complex, as faults may be shared between the
              pedestrian and the scooter rider.
            </Paragraph>
            <Paragraph>
              Defective Scooter Accidents: If an electric scooter is defective
              or malfunctions, it can cause an accident. In these cases, the
              manufacturer of the scooter may be held liable for damages.
            </Paragraph>
            <Paragraph>
              Road Hazard Accidents: Road hazards, such as potholes, uneven
              pavement, or debris, can cause electric scooter accidents. In some
              cases, the government agency responsible for maintaining the road
              may be held liable for damages.
            </Paragraph>
            <Paragraph>
              Distracted Riding Accidents: If an electric scooter rider is using
              their phone or otherwise distracted while riding, they may be held
              liable for damages if an accident occurs.
            </Paragraph>
            <Paragraph>
              Regardless of the type of electric scooter accident case, it is
              essential to consult with an experienced personal injury lawyer.
              They can help investigate the cause of the accident, determine
              liability, and help you get the compensation you deserve.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img src={Image2} alt='Car being evaluated for total loss' />
          </ImageContent>
          <TextContent>
            <Title>
              How can KR Injury Law Firm help you if you’ve been in an accident?
            </Title>
            <Paragraph>
              KR Injury Law Firm can provide experienced legal representation if
              you've been involved in an electric scooter accident. Here are
              some ways they can help:
            </Paragraph>
            <Paragraph>
              Investigate the Accident: KR Injury Law Firm can conduct a
              thorough investigation of the accident to determine its cause and
              liability. This includes gathering evidence, interviewing
              witnesses, and consulting with experts.
            </Paragraph>
            <Paragraph>
              Provide Legal Guidance: The attorneys at KR Injury Law Firm can
              guide you through the legal process and advise you on the
              appropriate steps to take. They can help you understand your
              rights, options, and potential outcomes.
            </Paragraph>
            <Paragraph>
              Negotiate with Insurance Companies: The firm can negotiate with
              insurance companies on your behalf to ensure that you receive the
              compensation you deserve. They can help you navigate the complex
              legal system and ensure that you are not taken advantage of.
            </Paragraph>
            <Paragraph>
              Represent You in Court: If necessary, KR Injury Law Firm can
              represent you in court. They can litigate your case and fight for
              your rights in front of a judge and jury.
            </Paragraph>
            <Paragraph>
              Electric scooter accidents can result in serious injuries and
              significant financial losses. KR Injury Law Firm can help you
              recover the compensation you deserve for your medical expenses,
              lost wages, and pain and suffering. Contact them today to schedule
              a free consultation and learn more about how they can help you.
            </Paragraph>
          </TextContent>
        </SectionRight>
      </Container>
    </>
  );
};

export default ElectricalPage;
