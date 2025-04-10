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

const Paragraph = styled.p`
  font-size: 1.07rem;
  margin-bottom: 15px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const RentalPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text='RENTAL CAR ACCIDENT ATTORNEY'
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
            <Title>RENTAL CAR ACCIDENT ATTORNEY</Title>
            <Paragraph>
              If you have been involved in a rental car accident, you may be
              wondering what your legal options are. Rental car accidents can be
              particularly complicated, as there may be multiple parties
              involved, including the rental car company, the other driver, and
              your own insurance company.
            </Paragraph>
            <Paragraph>
              In order to navigate this complex situation and ensure that your
              rights are protected, it is important to seek the guidance of an
              experienced rental car accident attorney.
            </Paragraph>
            <Paragraph>
              Our attorneys will handle these types of cases and can help you
              understand your legal rights and options. We will explore the role
              of a rental car accident attorney and how we can assist you in
              your case.
            </Paragraph>

            <Title>Who Is Liable in a Rental Car Accident?</Title>
            <Paragraph>
              No two rental car accidents are the same. If you are determined to
              be at fault in a rental car accident, the outcome will depend upon
              what type of insurance you have. If the accident was caused by
              speeding, DUI, or any other activity that broke the law or
              otherwise violated the rental agreement, your claim might not
              qualify for coverage.
            </Paragraph>
            <Paragraph>
              You may also be liable for costs to the rental company, such as
              loss of use fees, diminution of value of the car, and
              administrative expenses. Depending on the rental company’s
              agreement, you may be responsible for these additional funds.
            </Paragraph>
            <Paragraph>
              Even if you are not at fault, the rental car company may not want
              to wait for the claims process to finish to repair its vehicle and
              may charge you for repairs. In this case, you may have to file a
              claim against the other driver’s insurance for reimbursement.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>
              What to do if you’re involved in a collision while you are renting
              a car
            </Title>
            <Paragraph>
              If you are involved in a collision while renting a car, there are
              several steps you should take to protect your legal rights and
              ensure your safety. Here are some suggestions:
            </Paragraph>
            <Paragraph>
              <strong>Check for injuries:</strong> First and foremost, check
              yourself and others involved in the accident for any injuries. If
              anyone is hurt, call for medical attention immediately.
            </Paragraph>
            <Paragraph>
              <strong>Contact the rental car company:</strong> Call the rental
              car company's emergency phone number to report the accident. They
              will provide further instructions on what to do next.
            </Paragraph>
            <Paragraph>
              <strong>Contact the police:</strong> Call the police to report the
              accident and get a police report. Make sure to get the name and
              badge number of the responding officer.
            </Paragraph>
            <Paragraph>
              <strong>Document the accident scene:</strong> Take photos of the
              accident scene, including any damage to the vehicles involved.
            </Paragraph>
            <Paragraph>
              <strong>Gather information:</strong> Collect contact information
              from any witnesses and exchange insurance information with the
              other driver.
            </Paragraph>
            <Paragraph>
              <strong>Contact your insurance company:</strong> Notify your
              insurance company about the accident. They will advise you on what
              to do next and provide further instructions.
            </Paragraph>
            <Paragraph>
              <strong>Contact a rental car accident attorney:</strong> If you
              believe you may have a legal claim, contact a rental car accident
              attorney to protect your rights and assist you in navigating the
              complex legal issues involved in these types of cases.
            </Paragraph>

            <Title>What Happens If You Crash Someone Else’s Rental Car?</Title>
            <Paragraph>
              When a person rents a car from a rental company, the contract
              typically states that only the renter and certain other people are
              allowed to drive the vehicle. If the renter violates this
              agreement and allows an unnamed person to drive the car, the
              rental contract and the insurance provided within it are void. In
              this case, the renter is responsible for paying for any damage to
              the rental car. Insurance from the renter's credit card or primary
              insurance company might cover this damage.
            </Paragraph>
            <Paragraph>
              If anyone was injured during the accident, the renter’s insurance
              is likely liable for paying compensation for those injuries. Just
              like any other accident, though, if insurance is not enough to
              cover the cost of injuries, the renter may be personally liable.
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
              With years of experience in handling rental car accidents, our
              team of expert attorneys can guide you through the legal process
              and help you get the compensation you deserve.
            </Paragraph>
            <Paragraph>
              First, we'll work with you to gather all the necessary
              information, including police reports and witness statements.
              We'll also communicate with the rental car company and their
              insurance company to negotiate a fair settlement.
            </Paragraph>
            <Paragraph>
              In cases where a settlement cannot be reached, we are fully
              prepared to take your case to trial. Our experienced trial
              attorneys will fight for your rights in court and do everything we
              can to ensure a successful outcome.
            </Paragraph>
            <Paragraph>
              We understand how stressful and overwhelming rental car accidents
              can be. That's why we are dedicated to providing compassionate and
              personalized legal representation to each and every one of our
              clients. If you've been in a rental car accident, don't hesitate
              to contact us today for a free consultation.
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

export default RentalPage;
