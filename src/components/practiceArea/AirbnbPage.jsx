import React from 'react';
import styled from 'styled-components';
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

const AirbnbPage = () => {
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
            <Title>AIRBNB ATTORNEY</Title>
            <Paragraph>
              Airbnb has revolutionized the way we travel, providing countless
              individuals with unique and affordable accommodations in
              destinations all over the world.
            </Paragraph>
            <Paragraph>
              However, with its increasing popularity, Airbnb has also become
              subject to a range of legal issues and disputes.
            </Paragraph>
            <Paragraph>
              As a result, it's important for both hosts and guests to have
              access to experienced legal representation when navigating these
              complex legal matters. That's where an Airbnb attorney can help.
            </Paragraph>

            <Title>How Do I File a Lawsuit Against Airbnb in California?</Title>
            <Paragraph>
              To file a lawsuit against Airbnb in California, there are a few
              key steps you should take.
            </Paragraph>
            <Paragraph>
              First and foremost, it's important to make sure that you are using
              the correct legal entity. As per, suing the wrong company can
              result in your case being dismissed. Next, you should try to
              resolve the issue through Airbnb's customer service or by filing a
              complaint, as outlined. If a resolution cannot be reached, you may
              want to consider reaching out to an attorney who is experienced in
              handling legal issues related to Airbnb, such as the team at.
            </Paragraph>
            <Paragraph>
              Ultimately, the process of filing a lawsuit against Airbnb can be
              complex and time-consuming, which is why it's important to have
              expert legal guidance and support every step of the way.
            </Paragraph>
            <Paragraph>
              By working with an experienced attorney, you can ensure that your
              rights are protected and that you have the best possible chance of
              achieving a successful outcome.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>What are different Airbnb Accidents?</Title>
            <Paragraph>
              There are several different types of accidents that can occur in
              an Airbnb rental, including:
            </Paragraph>
            <Paragraph>
              <strong>Slip and fall accidents:</strong> These can occur if a
              guest slips on a wet or slippery surface, or trips over an object
              that was not properly marked or removed.
            </Paragraph>
            <Paragraph>
              <strong>Burn injuries:</strong> These can occur if there is a
              malfunction with a stove, oven, or another heating element in the
              rental property.
            </Paragraph>
            <Paragraph>
              <strong>Electrical injuries:</strong> These can occur if there is
              faulty wiring or electrical equipment in the rental property.
            </Paragraph>
            <Paragraph>
              <strong>Structural accidents:</strong> These can occur if there is
              a collapse or failure of a structure in the rental property, such
              as a balcony or staircase.
            </Paragraph>
            <Paragraph>
              <strong>Swimming pool accidents:</strong> These can occur if there
              is a lack of proper maintenance or safety precautions with a
              swimming pool on the property.
            </Paragraph>
            <Paragraph>
              If you have been injured in an Airbnb rental due to one of these
              or any other type of accident, it's important to seek medical
              attention and contact an experienced attorney as soon as possible.
              An attorney can help you navigate the legal process and pursue the
              compensation you deserve for your injuries and related expenses.
            </Paragraph>

            <Title>
              What if something goes wrong if you’re an Airbnb guest?
            </Title>
            <Paragraph>
              If something goes wrong during your stay as an Airbnb guest, there
              are several steps you can take to address the situation:
            </Paragraph>
            <Paragraph>
              <strong>Contact the host:</strong> The first step is to reach out
              to the host and explain the situation. They may be able to resolve
              the issue quickly and easily.
            </Paragraph>
            <Paragraph>
              <strong>Contact Airbnb customer service:</strong> If the host is
              unresponsive or unable to help, you can contact Airbnb customer
              service for assistance. They can provide guidance and support to
              help you resolve the issue
            </Paragraph>
            <Paragraph>
              <strong>Document the issue:</strong> It's important to document
              any issues you encounter during your stay, including taking photos
              and videos if possible. This can help support your case if you
              need to escalate the issue.
            </Paragraph>
            <Paragraph>
              <strong>Consider filing a complaint:</strong> If you are unable to
              resolve the issue with the host or Airbnb customer service, you
              may want to consider filing a complaint with local authorities or
              with Airbnb directly.
            </Paragraph>
            <Paragraph>
              <strong>Contact an attorney:</strong> If you have been injured or
              have suffered significant financial losses as a result of the
              issue, you may want to consider contacting an attorney who is
              experienced in handling Airbnb-related legal issues. An attorney
              can help you understand your legal rights and pursue compensation
              for your losses.
            </Paragraph>
            <Paragraph>
              Ultimately, it's important to address any issues or concerns as
              soon as possible to ensure a safe and enjoyable stay as an Airbnb
              guest.
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
    </>
  );
};

export default AirbnbPage;
