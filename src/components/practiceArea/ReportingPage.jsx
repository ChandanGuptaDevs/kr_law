import React from 'react';
import styled from 'styled-components';
import Image2 from '../../assets/services_imgs/img_02.webp';
import Header from '../common/Header';
import AwardsPage from '../common/AwardsPage';
import ConsultationFormPage from '../common/ConsultationFormPage';
import BannerPage from '../common/BannerPage';
import CTABanner from '../common/CTABanner';
import Footer from '../common/Footer';

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
  font-size: 27px;
  margin-bottom: 15px;
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

const Subheading = styled.h2`
  font-size: 22px;
  margin: 32px 0 16px;
`;

const Paragraph = styled.p`
  font-size: 1.07rem;
  margin-bottom: 15px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const ReportingPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text='REPORTING CAR ACCIDENTS IN CALIFORNIA'
        mainText='KR Law, APC'
        otherText='Founded by Kathy Rabii'
      />
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
            <Title>REPORTING CAR ACCIDENTS IN CALIFORNIA</Title>
            <Paragraph>
              If you’re driving around California and are involved in a car
              accident, you have a lot on your “to-do” list. In California,
              drivers are required by law to report a car accident to the
              California Highway Patrol or local police within 24 hours if it
              involves bodily injury or death.
            </Paragraph>
            <Paragraph>
              If the accident resulted in property damage exceeding $1,000, or
              injury or death, the accident must be reported to the Department
              of Motor Vehicles (DMV) within 10 days.
            </Paragraph>
            <Paragraph>
              Failure to report accidents within the specified time frames can
              result in penalties, such as fines, license revocation, or even
              jail time.
            </Paragraph>
            <Paragraph>
              While reporting accidents to insurance companies is not mandatory,
              some insurance providers may require it. Police reports are not
              automatically shared with insurance companies, and drivers can
              obtain copies of police reports by contacting the local police
              station.
            </Paragraph>
            <Paragraph>
              It is also advisable to seek the services of an attorney after any
              car accident, regardless of the situation.
            </Paragraph>

            <Title>Reporting Off-Highway Accidents</Title>
            <Paragraph>
              Drivers are required by law to report car accidents to the
              California Highway Patrol or local police within 24 hours if it
              involves bodily injury or death, regardless of whether the
              accident happened on a street/highway or private property.
            </Paragraph>
            <Paragraph>
              If the accident resulted in property damage exceeding $1,000, or
              injury or death, the accident must be reported to the DMV within
              10 days using Form SR-1].
            </Paragraph>
            <Paragraph>
              However, it is important to note that reporting requirements may
              differ for off-highway accidents, such as those that occur on
              private land or in parking lots.
            </Paragraph>
            <Paragraph>
              While there is no legal requirement to report off-highway
              accidents to the DMV, it is recommended that drivers report any
              accident to their insurance company, as some policies may require
              it.
            </Paragraph>
            <Paragraph>
              It is also advisable to seek the services of an attorney after any
              car accident, regardless of whether it occurred on a
              street/highway or off-highway.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>What is Form SR-1?</Title>
            <Paragraph>
              Form SR-1 is an official document provided by the California DMV.
              State law (California Vehicle Code §16000) requires that anyone
              involved in an accident complete and submit the form within 10
              days of an accident that results in:
            </Paragraph>
            <KeyTakeaways>
              {/* <h3>Key Takeaways</h3> */}
              <div>
                <p>– Property damage exceeding $1,000</p>
                <p>– Personal injury, however slight, and/or death</p>
                <Paragraph>
                  You can submit the form on your own, or you can direct your
                  insurance company or attorney to submit the form on your
                  behalf.
                </Paragraph>
              </div>
            </KeyTakeaways>

            <Title>Required Information for Form SR-1</Title>
            <Paragraph>
              Form SR-1 helps to encourage transparency and full disclosure of
              relevant information after a car accident in California. You will
              be required to provide information about the accident as well as
              certain information for everyone involved.
            </Paragraph>

            <Title>General Accident Information</Title>
            <Paragraph>
              When completing Form SR-1 you must provide the following
              information:
            </Paragraph>

            <KeyTakeaways>
              {/* <h3>Key Takeaways</h3> */}
              <div>
                <p>– The time when the accident took place</p>
                <p>– Date of the accident</p>
                <p>– Specific location, including the city and county</p>
              </div>
            </KeyTakeaways>

            <Title>Insurance Information</Title>
            <Paragraph>
              All drivers in California are required to carry
              minimally-acceptable insurance coverage on all registered
              vehicles. Information about insurance coverage for all cars
              involved in the accident must be provided on Form SR-1. This
              includes:
            </Paragraph>

            <KeyTakeaways>
              {/* <h3>Key Takeaways</h3> */}
              <div>
                <p>– Name of the insurance company</p>
                <p>– Insurance policy number</p>
                <p>– Insurance policy period, and</p>
                <p>– Name of the policyholder</p>
                <Paragraph>
                  ​You must also indicate whether each policy was in effect at
                  the time of the accident.
                </Paragraph>
              </div>
            </KeyTakeaways>

            <Title>List of Property Damages, Injuries, and Fatalities</Title>
            <Paragraph>
              Form SR-1 requires drivers to submit details about all property
              damage, personal injuries, and deaths that are related to the
              accident. This includes all drivers, passengers, bicyclists, and
              pedestrians who are affected by the crash. The following
              information must be provided for all injured parties:
            </Paragraph>

            <KeyTakeaways>
              {/* <h3>Key Takeaways</h3> */}
              <div>
                <p>– Name and address of the victim</p>
                <p>– Type of harm (injury, death, property damage)</p>
                <p>– Description and value of property damage</p>
                <p>
                  – Connection to the accident (driver, passenger, bicyclist,
                  pedestrian)
                </p>
              </div>
            </KeyTakeaways>

            <Title>Consequences of Not Completing Form SR-1</Title>
            <Subheading>License Suspension</Subheading>
            <Paragraph>
              What happens if you do not complete and submit Form SR-1 to the
              DMV within 10 days of an accident? California Vehicle Code §16004
              permits the state to suspend your driver’s license and take other
              necessary administrative actions concerning your driving
              privileges.
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
              <strong>Communication with insurance companies:</strong> Our law
              firm can communicate with the insurance companies on your behalf
              and help you navigate the claims process. We can ensure that you
              are not taken advantage of by the insurance companies and that
              your rights are protected.
            </Paragraph>
            <Paragraph>
              <strong>Investigation:</strong> Our law firm can investigate the
              accident by interviewing witnesses, examining physical evidence,
              and analyzing any available photographs or videos of the accident.
              This can help establish liability and ensure that you receive the
              compensation you deserve.
            </Paragraph>
            <Paragraph>
              <strong>Negotiation:</strong> Our law firm can negotiate with
              insurance companies to ensure that you receive a fair settlement
              for your damages, including medical expenses, lost wages, and pain
              and suffering.
            </Paragraph>
            <Paragraph>
              <strong>Litigation:</strong> If necessary, our law firm can file a
              lawsuit and represent you in court. We can argue on your behalf
              and help you receive compensation for your damages.
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
      <AwardsPage />
      <ConsultationFormPage />
      <CTABanner />
      <Footer />
    </>
  );
};

export default ReportingPage;
