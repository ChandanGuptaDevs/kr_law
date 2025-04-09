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

const Paragraph = styled.p`
  font-size: 1.05rem;
  margin-bottom: 20px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const CaliforniaPage = () => {
  return (
    <>
      <Container>
        <SectionRight>
          <ImageContent>
            <FormContainer>
              <FormWrapper>
                <FormTitle>Contact Us Today!</FormTitle>
                <Description>
                  If you've been injured, contact the personal injury lawyers at
                  KR Law Group today for a FREE no obligation consultation.
                  Remember, we don't get paid until you do.
                </Description>
                <form>
                  <FormGroup>
                    <Input type='text' placeholder='Full Name' />
                  </FormGroup>

                  <Row>
                    <FormGroup>
                      <Input type='email' placeholder='Email*' required />
                    </FormGroup>
                    <FormGroup>
                      <Input type='tel' placeholder='Phone*' required />
                    </FormGroup>
                  </Row>

                  <FormGroup>
                    <Select required>
                      <option value='' disabled selected>
                        Select A Case Type*
                      </option>
                      <option value='car-accident'>Car Accident</option>
                      <option value='uber-lyft'>Uber/Lyft Accident</option>
                      <option value='pedestrian'>Pedestrian Accident</option>
                      <option value='scooter'>Electric Scooter Accident</option>
                      <option value='rental-car'>Rental Car Accident</option>
                      <option value='wrongful-death'>Wrongful Death</option>
                      <option value='airbnb'>Airbnb Incident</option>
                      <option value='others'>Other</option>
                    </Select>
                  </FormGroup>

                  <Row>
                    <FormGroup>
                      <Input type='text' placeholder='City' />
                    </FormGroup>
                    <FormGroup>
                      <Input type='text' placeholder='State*' required />
                    </FormGroup>
                  </Row>

                  <FormGroup>
                    <Input type='text' placeholder='Address' />
                  </FormGroup>

                  <FormGroup>
                    <Input type='text' placeholder='Postal Code' />
                  </FormGroup>

                  <FormGroup>
                    <TextArea
                      placeholder='Tell Us About Your Case*'
                      required
                    ></TextArea>
                  </FormGroup>

                  <Button type='submit'>Claim My Free Case Review</Button>
                </form>
              </FormWrapper>
            </FormContainer>
          </ImageContent>
          <TextContent>
            <Title>CALIFORNIA “AT FAULT” ACCIDENTS</Title>
            <Paragraph>
              No one wants to be in a car accident, but unfortunately, they
              happen all the time. In fact, there are about 6 million car
              accidents in the US every year – that’s 16,438 per day!
            </Paragraph>
            <Paragraph>
              So even if you’re a safe driver, it’s likely that you’ll be
              involved in an accident at some point.
            </Paragraph>
            <Paragraph>
              If you do find yourself in an accident, it’s important to know
              what to do next. The following information will help you stay safe
              and protect your interests.
            </Paragraph>

            <Title>What are "CALIFORNIA “AT FAULT” ACCIDENTS"?</Title>
            <Paragraph>
              In California, an "at-fault" accident refers to a situation where
              one driver is deemed responsible for causing the accident. This
              determination is usually made by the insurance companies involved
              in the accident, and it is based on their investigation and
              analysis of the facts surrounding the accident.
            </Paragraph>
            <Paragraph>
              Under California's at-fault insurance system, the driver who is
              found to be at fault for the accident is responsible for paying
              for damages to the other driver's vehicle, as well as for any
              injuries sustained by the other driver and their passengers.
            </Paragraph>
            <Paragraph>
              It's worth noting that California is a "comparative fault" state,
              which means that even if you are found to be partially at fault
              for an accident, you may still be able to recover damages from the
              other driver or their insurance company. However, the number of
              damages you can recover will be reduced in proportion to your
              level of fault in the accident.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>Do I need to prove property damage to my vehicle?</Title>
            <Paragraph>
              Yes, if you are involved in a California "at-fault" accident that
              damages your car, you will need to prove the property damage to
              your vehicle.
            </Paragraph>
            <Paragraph>
              This is because the person who is responsible for the accident
              will be liable to pay for the damages. When filing a claim with
              your insurance company, it is important to have photographs of the
              damage and to understand the evaluation process for vehicle
              damage.
            </Paragraph>
            <Paragraph>
              Under California's pure comparative fault rule, you can recover a
              portion of your damages even if you were partially at fault for
              the accident.
            </Paragraph>
            <Paragraph>
              For example, if you are entitled to $10,000 in damages but were
              found to be 15% responsible for the accident, you can still
              recover $8,500 from the at-fault driver
            </Paragraph>

            <Title>
              What information do I need to gather after a car accident?
            </Title>
            <Paragraph>
              If you are involved in an accident, there are several pieces of
              information that you should gather to help with the claims process
              and to protect yourself legally. Some important information to
              collect includes:
            </Paragraph>

            <KeyTakeaways>
              {/* <h3>Key Takeaways</h3> */}
              <div>
                <p>– A police report</p>
                <p>
                  – The other driver's name, contact information, and insurance
                  information
                </p>
                <p>
                  – The make, model, and license plate number of the other
                  vehicle
                </p>
                <p>
                  – The names and contact information of any witnesses to the
                  accident
                </p>
                <p>
                  – Photographs and videos of the damage to both vehicles, as
                  well as any other property damage or injuries
                </p>
                <p>– The location and time of the accident</p>
                <p>– In which direction the vehicles were traveling</p>
                <p>– The speed of each vehicle, if known</p>
                <p>– Weather and traffic conditions</p>
                <p>
                  – What the driver was doing at the time of the accident (e.g.,
                  moving or stopping, on the phone, listening to the radio,
                  etc.)
                </p>
                <p>
                  – Anything else that might help an adjuster understand what
                  happened
                </p>
                <Paragraph>
                  ​It's also important to exchange insurance information with
                  the other driver and to report the accident to your insurance
                  company as soon as possible. If you are injured in an
                  accident, seek medical attention right away and keep a record
                  of all medical treatment and expenses. By gathering this
                  information, you can help ensure that your insurance claim is
                  processed smoothly and that you are protected legally.
                </Paragraph>
              </div>
            </KeyTakeaways>

            <Title>How does an insurer determine who was at fault?</Title>
            <Paragraph>
              In California, the insurance company will determine who is at
              fault for an accident by conducting an investigation into the
              circumstances surrounding the accident.
            </Paragraph>
            <Paragraph>
              The investigation may include reviewing police reports,
              interviewing witnesses, examining physical evidence, and analyzing
              any available photographs or videos of the accident. The insurance
              company will also consider the relevant California traffic laws
              and regulations to determine who had the right-of-way at the time
              of the accident.
            </Paragraph>
            <Paragraph>
              Once the investigation is complete, the insurance company will
              make a determination of fault. California uses a "pure comparative
              negligence" system, which means that even if a driver is partially
              at fault for an accident, they may still be able to recover
              compensation for their damages. The amount of compensation will be
              reduced proportionally to the driver's degree of fault.
            </Paragraph>
            <Paragraph>
              It's important to note that fault determinations can be disputed,
              and drivers have the right to challenge an insurance company's
              determination of fault. If you disagree with your insurance
              company's decision or feel that you were not at fault for the
              accident, it's best to consult with an attorney who can help you
              navigate the claims process and protect your legal rights.
            </Paragraph>
          </TextContent>
        </TextOnlySection>
        <SectionLeft>
          <ImageContent>
            <img src={Image1} alt='Mechanic checking car damage' />
          </ImageContent>
          <TextContent>
            <Heading>How does an insurer determine who was at fault?</Heading>
            <Paragraph>
              In California, the insurance company will determine who is at
              fault for an accident by conducting an investigation into the
              circumstances surrounding the accident.
            </Paragraph>
            <Paragraph>
              The investigation may include reviewing police reports,
              interviewing witnesses, analyzing vehicle damage, and analyzing
              available photographs or videos of the accident. The insurance
              company will determine who was negligent. California uses a
              comparative fault system, so each driver may be assigned a
              percentage of fault based on the evidence.
            </Paragraph>
            <Paragraph>
              Once the investigation is complete, the insurance company will
              make a determination of fault. California uses a “pure comparative
              negligence” system, which allows you to recover compensation even
              if you are partially at fault. However, your compensation will be
              reduced proportionally to the degree of your fault.
            </Paragraph>
            <Paragraph>
              It’s important that the insurance company’s determination of fault
              be based on a thorough and well-recorded investigation.
            </Paragraph>
            <Paragraph>
              It’s important to note that in case the insurance company
              determines you were not at fault for the accident, it’s best to
              consult with an attorney who can help you navigate the claims
              process and protect your legal rights.
            </Paragraph>
          </TextContent>
        </SectionLeft>

        <TextOnlySection>
          <TextContent>
            <Title>What happens if my car is ruled a “total loss?”</Title>
            <Paragraph>
              If your car is ruled a "total loss", it means that the cost of
              repairing your car exceeds its actual cash value. In this case,
              your insurance company will pay you the actual cash value of your
              car, minus any deductible that applies. Actual cash value is the
              amount your car was worth immediately prior to the accident, based
              on factors such as its age, condition, and mileage.
            </Paragraph>
            <Paragraph>
              If you still owe money on a car loan or lease, the insurance
              payout may not be enough to cover the remaining balance. In this
              situation, you may be responsible for paying the difference
              between the insurance payout and the amount you owe. To avoid this
              situation, you can purchase gap insurance, which can cover the
              difference between the actual cash value of your car and the
              amount you owe on your loan or lease.
            </Paragraph>
            <Paragraph>
              If you choose to keep your totaled car, your insurance company
              will deduct the salvage value of the vehicle from the payout. The
              salvage value is the amount that the insurance company can recover
              by selling the damaged vehicle to a salvage yard.
            </Paragraph>
            <Paragraph>
              It's important to note that you can dispute the insurance
              company's valuation of your car if you believe that it is
              inaccurate. You can provide evidence such as receipts for recent
              repairs or maintenance, or listings for similar cars in your area
              to support your claim for a higher payout.
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
              We can provide legal assistance if you are involved in a car
              accident in California. Here are some ways that our law firm can
              help:
            </Paragraph>
            <Paragraph>
              Communication with insurance companies: Our law firm can
              communicate with the insurance companies on your behalf and help
              you navigate the claims process. We can ensure that you are not
              taken advantage of by the insurance companies and that your rights
              are protected. Investigation: Our law firm can investigate the
              accident by interviewing witnesses, examining physical evidence,
              and analyzing any available photographs or videos of the accident.
              This can help establish liability and ensure that you receive the
              compensation you deserve. Negotiation: Our law firm can negotiate
              with insurance companies to ensure that you receive a fair
              settlement for your damages, including medical expenses, lost
              wages, and pain and suffering. Litigation: If necessary, our law
              firm can file a lawsuit and represent you in court. We can argue
              on your behalf and help you receive compensation for your damages.
            </Paragraph>
            <Paragraph>
              In summary, our law firm can provide invaluable assistance if you
              are involved in a California car accident. We can help you
              navigate the legal system, protect your rights, and ensure that
              you receive the compensation you deserve.
            </Paragraph>
          </TextContent>
        </SectionRight>
      </Container>
    </>
  );
};

export default CaliforniaPage;
