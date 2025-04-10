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

const UberPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text='UBER ACCIDENT LAWYERS'
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
            <Title>UBER ACCIDENT LAWYERS</Title>
            <Paragraph>
              If you’ve been involved in an Uber accident, you need experienced
              legal representation. The consequences of an accident can be
              severe and may have a significant impact on your life. At Uber
              Accident Lawyers, we understand the challenges you face and are
              here to help you every step of the way.
            </Paragraph>
            <Paragraph>
              Our team of dedicated attorneys has extensive experience in
              dealing with Uber accident cases. We understand the complex legal
              and insurance issues that can arise in these cases and will work
              tirelessly to ensure that you receive the compensation you
              deserve.
            </Paragraph>
            <Paragraph>
              When you hire us, we will conduct a thorough investigation of your
              case, including reviewing police reports, witness statements, and
              medical records. We will work with medical professionals to ensure
              that you receive the best possible care for your injuries. We will
              also negotiate with insurance companies to ensure that you receive
              a fair settlement.
            </Paragraph>
            <Paragraph>
              We know that dealing with the aftermath of an Uber accident can be
              overwhelming, which is why we are committed to providing you with
              the support and guidance you need. Our team will keep you informed
              every step of the way and answer any questions you may have.
            </Paragraph>

            <Title>Quick Facts About Uber:</Title>
            <Paragraph>
              Uber was founded in 2009 and is headquartered in San Francisco,
              California.
            </Paragraph>
            <Paragraph>
              The company operates in over 10,000 cities worldwide and has more
              than 110 million active users.
            </Paragraph>
            <Paragraph>
              Uber's business model is based on a mobile app that allows users
              to request a ride and pay for it using their smartphone.
            </Paragraph>
            <Paragraph>
              In addition to traditional ride-sharing services, Uber also offers
              food delivery (Uber Eats) and freight transportation (Uber
              Freight) services.
            </Paragraph>
            <Paragraph>
              Uber has faced controversy over issues such as safety, driver pay,
              and regulatory compliance in various markets around the world.
            </Paragraph>
            <Paragraph>
              Despite these challenges, Uber has been one of the fastest-growing
              companies in recent years, with a valuation of over $100 billion
              as of 2021.
            </Paragraph>
            <Paragraph>
              In terms of safety measures, Uber has implemented several features
              such as driver background checks, real-time GPS tracking, and
              in-app emergency assistance to ensure the safety of both
              passengers and drivers.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>What to do after an Uber Accident?</Title>
            <Paragraph>
              <strong>Seek medical attention:</strong> Your health and safety
              should be your top priority after an accident. If you or anyone
              else in the car is injured, call 911 or seek medical attention
              right away.
            </Paragraph>
            <Paragraph>
              <strong>Collect information:</strong> Get the contact information,
              license plate number, and insurance information of the Uber or
              Lyft driver, as well as any other drivers involved in the
              accident. You should also take photos of the accident scene and
              any damage to the vehicles.
            </Paragraph>
            <Paragraph>
              <strong>Report the accident:</strong> Report the accident to the
              Uber or Lyft company through the app or website. You should also
              report the accident to the police, even if it seems minor.
            </Paragraph>
            <Paragraph>
              <strong>Contact a lawyer:</strong> It's important to contact a
              lawyer who has experience with Uber or Lyft accidents. They can
              help you understand your legal rights and options, and guide you
              through the claims process.
            </Paragraph>
            <Paragraph>
              <strong>Follow up with medical treatment:</strong> Even if you
              don't feel injured right away, it's important to follow up with
              medical treatment to ensure that any injuries are properly
              diagnosed and treated.
            </Paragraph>
            <Paragraph>
              Remember, if you've been in an accident while riding in an Uber,
              you have legal rights and options. Don't hesitate to reach out to
              a lawyer for help.
            </Paragraph>

            <Title>
              What you should know if you have been injured in an Uber accident
            </Title>
            <Paragraph>
              If you've been injured in an Uber accident, there are some
              important things you should know to protect your health, legal
              rights, and financial future. Your top priority should be to seek
              medical attention right away, even if you don't feel like you have
              been seriously injured. After that, you should report the accident
              to the Uber company through the app or website and report it to
              the police as well, even if it seems minor. You should also gather
              information about the accident, including the contact information,
              license plate number, and insurance information of the Uber
              driver, as well as any other drivers involved in the accident.
              Take photos of the accident scene and any damage to the vehicles,
              too.
            </Paragraph>
            <Paragraph>
              Contacting a lawyer who has experience with Uber accidents is
              important to help you understand your legal rights and options,
              and guide you through the claims process. Don't talk to insurance
              adjusters until you've talked to a lawyer, as they may try to get
              you to settle quickly for less than you deserve. Keep track of all
              expenses related to the accident, including medical bills, lost
              wages, and transportation costs. And remember that you have legal
              rights as an Uber passenger, including the right to compensation
              for your injuries and other damages. A lawyer can help you
              understand your legal options and pursue the compensation you
              deserve.
            </Paragraph>

            <Title>
              Can I receive compensation if I have been injured in an Uber
              crash?
            </Title>
            <Paragraph>
              Yes, as an Uber passenger who has been injured in an accident, you
              may be entitled to compensation for your injuries and other
              damages. Uber carries a commercial insurance policy that provides
              coverage for passengers who are injured in an accident while using
              the service.
            </Paragraph>
            <Paragraph>
              The amount of compensation you can receive depends on the
              specifics of the accident and the extent of your injuries. In
              general, you may be able to receive compensation for medical
              expenses, lost wages, pain and suffering, and other damages
              related to the accident.
            </Paragraph>
            <Paragraph>
              To pursue compensation, it's important to contact a lawyer who has
              experience with Uber accidents. They can help you understand your
              legal rights and options, and guide you through the claims
              process. They can also negotiate with Uber's insurance company on
              your behalf to help you receive the compensation you deserve.
            </Paragraph>
            <Paragraph>
              Those who have been seriously injured in an Uber rideshare crash
              may be entitled to one, or more, of the following forms of
              compensation:
            </Paragraph>
            <p>Pain and suffering</p>
            <p>Loss of consortium, or reduced quality of life</p>
            <p>Medical expenses and treatment</p>
            <p>Loss of income or lost profits and</p>
            <p>Damages, such as property damage</p>
            <Paragraph>
              Remember, if you've been injured in an Uber accident, you have
              legal rights and options. Don't hesitate to reach out to a lawyer
              for help.
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
              If you've been in an accident and are looking for a law firm to
              represent you, there are many reasons to consider KR Injury Law.
              Here are just a few:
            </Paragraph>
            <Paragraph>
              <strong>Experience:</strong> The attorneys at KR Injury Law have
              years of experience representing clients in a wide range of
              personal injury cases, including car accidents, truck accidents,
              slip and falls, and more. They have a deep understanding of the
              law and the legal system and know how to build strong cases for
              their clients.
            </Paragraph>
            <Paragraph>
              <strong>Personalized attention:</strong> At KR Injury Law, clients
              are treated as individuals, not just case numbers. The attorneys
              take the time to get to know their clients and understand their
              unique circumstances and needs, and work closely with them
              throughout the legal process.
            </Paragraph>
            <Paragraph>
              <strong>Representation:</strong> KR Injury Law attorneys are
              passionate about fighting for their clients and getting them the
              compensation they deserve. They are not afraid to take on big
              insurance companies and other powerful opponents and will work
              tirelessly to ensure that their client's rights are protected.
            </Paragraph>
            <Paragraph>
              <strong>Excellent reputation:</strong> KR Injury Law has a proven
              track record of success, with numerous satisfied clients and
              positive reviews. They are known for their professionalism,
              integrity, and dedication to their clients.
            </Paragraph>
            <Paragraph>
              Overall, if you are looking for an experienced, compassionate, and
              representative law firm to represent you in your personal injury
              case, KR Injury Law is an excellent choice.
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

export default UberPage;
