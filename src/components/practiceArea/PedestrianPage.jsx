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

const PedestrianPage = () => {
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
            <Title>PEDESTRIAN ACCIDENT ATTORNEY</Title>
            <Paragraph>
              Pedestrian accidents can have devastating consequences, leading to
              serious injuries, disabilities, and even fatalities.
              Unfortunately, these accidents are all too common, with thousands
              of pedestrians being injured or killed in traffic accidents each
              year.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been involved in a pedestrian accident,
              it's important to seek the guidance and support of an experienced
              attorney who can help you navigate the legal process and pursue
              the compensation you deserve.
            </Paragraph>

            <Title>Who is Responsible for the Pedestrian Accident?</Title>
            <Paragraph>
              Determining responsibility for a pedestrian accident depends on a
              number of factors, including the specific circumstances of the
              accident, traffic laws in the area, and the behavior of both the
              pedestrian and the driver involved. In general, the driver of a
              vehicle is often considered responsible for a pedestrian accident
              if they were driving recklessly, speeding, driving under the
              influence of drugs or alcohol, or otherwise violating traffic
              laws,.
            </Paragraph>
            <Paragraph>
              However, pedestrians can also be found at fault if they were
              crossing the street illegally, distracted by their phones, or
              otherwise acting recklessly,.
            </Paragraph>
            <Paragraph>
              In some cases, both the driver and the pedestrian may share fault
              for the accident. An experienced pedestrian accident attorney can
              help investigate the circumstances of the accident and determine
              who is liable for any damages or injuries suffered.
            </Paragraph>
          </TextContent>
        </SectionRight>
        <TextOnlySection>
          <TextContent>
            <Title>Is It Worth Getting a Pedestrian Accident Attorney?</Title>
            <Paragraph>
              Yes, it's often worth getting a pedestrian accident attorney if
              you have been involved in a pedestrian accident. Pedestrian
              accidents can be complex and difficult to navigate, and having the
              guidance and support of an experienced attorney can be invaluable
              in helping you recover the compensation you deserve.
            </Paragraph>
            <Paragraph>
              A pedestrian accident attorney can help you investigate the
              circumstances of the accident, gather evidence, and build a strong
              case against any negligent parties that may be responsible for
              your injuries.
            </Paragraph>
            <Paragraph>
              Additionally, an attorney can negotiate with insurance companies,
              represent you in court, and help ensure that your legal rights are
              protected throughout the process. In many cases, the compensation
              recovered with the help of a pedestrian accident attorney can
              cover medical expenses, lost wages, pain and suffering, and other
              damages related to the accident. Be sure to consult with an
              attorney as soon as possible after the accident to ensure that
              your rights are protected and that you have the best chance of
              receiving the compensation you deserve.
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
              Experience: The attorneys at KR Injury Law have years of
              experience representing clients in a wide range of personal injury
              cases, including car accidents, truck accidents, slip and falls,
              and more. They have a deep understanding of the law and the legal
              system and know how to build strong cases for their clients.
            </Paragraph>
            <Paragraph>
              Personalized attention: At KR Injury Law, clients are treated as
              individuals, not just case numbers. The attorneys take the time to
              get to know their clients and understand their unique
              circumstances and needs, and work closely with them throughout the
              legal process.
            </Paragraph>
            <Paragraph>
              Representation: KR Injury Law attorneys are passionate about
              fighting for their clients and getting them the compensation they
              deserve. They are not afraid to take on big insurance companies
              and other powerful opponents and will work tirelessly to ensure
              that their client's rights are protected.
            </Paragraph>
            <Paragraph>
              Excellent reputation: KR Injury Law has a proven track record of
              success, with numerous satisfied clients and positive reviews.
              They are known for their professionalism, integrity, and
              dedication to their clients.
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

export default PedestrianPage;
