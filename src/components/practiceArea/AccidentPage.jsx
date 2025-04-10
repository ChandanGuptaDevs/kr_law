import React from 'react';
import styled from 'styled-components';
import Image1 from '../../assets/services_imgs/img_01.webp';
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

const Paragraph = styled.p`
  font-size: 1.07rem;
  margin-bottom: 15px;
  color: #3a3a3a;
  font-weight: 400;
  line-height: 1.8;
`;

const AccidentPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text='ACCIDENT LAWYER'
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
            <Title>ACCIDENT LAWYER</Title>
            <Paragraph>
              Accidents can happen at any time, and they can be life-changing.
              They can result in severe injuries, trauma, and financial burdens.
              If you have been injured in an accident, it is essential to seek
              the help of an experienced accident lawyer. They can help you
              navigate the complex legal system and fight for the compensation
              you deserve.
            </Paragraph>
            <Paragraph>
              At our law firm, we understand that accidents can be overwhelming,
              and we are here to help you through this difficult time. Our team
              of skilled accident lawyers is dedicated to representing clients
              who have been injured in all types of accidents, including car
              accidents, slips and falls and workplace accidents.
            </Paragraph>
            <Paragraph>
              We believe that our clients deserve the best possible outcome
              after an accident, which is why we work tirelessly to help them
              get the compensation they need to recover fully. We understand
              that money may not be a guarantee of a full recovery, but it can
              certainly help ease the financial burden and provide a sense of
              security during a challenging time.
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
                <p>– Personal injury, however slight, and/or death.</p>
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
                <p>– Date of the accident, and</p>
                <p>– Specific location, including the city and county.</p>
              </div>
            </KeyTakeaways>

            <Title>TYPES OF ACCIDENT LAWYERS</Title>
            <Paragraph>
              There are several types of accident lawyers, each with their own
              areas of expertise. Some common types of accident lawyers include:
            </Paragraph>
            <Paragraph>
              <strong>Car accident lawyers:</strong> Car accident lawyers
              specialize in cases involving car accidents. They may work with
              clients who have been injured in a car accident or who have lost a
              loved one in a car accident.
            </Paragraph>
            <Paragraph>
              <strong>Truck accident lawyers:</strong> Truck accident lawyers
              specialize in cases involving commercial truck accidents. These
              accidents can be more complex than car accidents due to the size
              and weight of the trucks involved and may involve multiple parties
              such as the truck driver, trucking company, and manufacturers of
              the truck or its parts.
            </Paragraph>
            <Paragraph>
              <strong>Motorcycle accident lawyers:</strong> Motorcycle accident
              lawyers specialize in cases involving motorcycle accidents. These
              accidents can be particularly dangerous for riders due to the lack
              of protection offered by a motorcycle.
            </Paragraph>
            <Paragraph>
              <strong>Pedestrian accident lawyers:</strong> Pedestrian accident
              lawyers specialize in cases involving accidents between
              pedestrians and motor vehicles. Pedestrians are particularly
              vulnerable in accidents due to their lack of protection and the
              high speeds at which motor vehicles can travel.
            </Paragraph>
            <Paragraph>
              <strong>Bicycle accident lawyers:</strong> Bicycle accident
              lawyers specialize in cases involving accidents between bicycles
              and motor vehicles. Bicyclists are also vulnerable in accidents
              due to their lack of protection and the high speeds at which motor
              vehicles can travel.​
            </Paragraph>
            <Paragraph>
              <strong>Slip and fall lawyers:</strong> Slip and fall lawyers
              specialize in cases involving accidents on someone else's
              property. These accidents can occur due to hazards such as wet
              floors, uneven surfaces, or inadequate lighting.
            </Paragraph>
            <Paragraph>
              <strong>Medical malpractice lawyers:</strong> Medical malpractice
              lawyers specialize in cases involving injuries or illnesses that
              result from medical negligence or error. These cases can be
              complex and may involve multiple parties, including doctors,
              nurses, and hospitals.
            </Paragraph>
            <Paragraph>
              <strong>Wrongful death lawyers:</strong> Wrongful death lawyers
              specialize in cases where a person has died as a result of someone
              else's negligence or wrongdoing. These cases may involve
              accidents, medical malpractice, or other types of incidents.
            </Paragraph>
            <Paragraph>
              It's important to choose an accident lawyer who has experience in
              the specific area of law that applies to your case. This can help
              ensure that you receive the best possible representation and
              increase your chances of getting a fair settlement or judgment.
            </Paragraph>

            <Title>HOW TO CALCULATE HOW MUCH MY ACCIDENT IS WORTH?</Title>
            <Paragraph>
              This is a common question asked and calculating the value of an
              accident can be complex and typically involves taking into account
              a variety of factors. While there is no definitive formula for
              calculating the value of an accident, some common factors that may
              be considered include: Medical expenses: This includes any costs
              related to medical treatment, including hospital stays, doctor
              visits, prescription medications, and rehabilitation.
            </Paragraph>
            <Paragraph>
              <strong>Lost wages:</strong> This includes any income you may have
              lost as a result of the accident, including time off work for
              medical treatment or recovery.
            </Paragraph>
            <Paragraph>
              <strong>Property damage:</strong> This includes any damage to your
              vehicle or other property as a result of the accident.
            </Paragraph>
            <Paragraph>
              <strong>Pain and suffering:</strong> This includes any physical or
              emotional pain or suffering you may have experienced as a result
              of the accident.
            </Paragraph>
            <Paragraph>
              <strong>Loss of consortium:</strong> This refers to the loss of
              companionship or support from a spouse or partner as a result of
              the accident.
            </Paragraph>
            <Paragraph>
              <strong>Future medical expenses:</strong> This includes any
              anticipated medical expenses you may have in the future as a
              result of the accident.
            </Paragraph>
            <Paragraph>
              <strong>Future lost wages:</strong> This includes any anticipated
              loss of income you may experience in the future as a result of the
              accident.
            </Paragraph>
            <Paragraph>
              <strong>Punitive damages:</strong> In some cases, you may be
              awarded punitive damages, which are designed to punish the
              at-fault party for their actions.
            </Paragraph>
            <Paragraph>
              To calculate the value of your accident, you should work with an
              experienced accident lawyer who can help you evaluate these
              factors and build a strong case for compensation. Your lawyer may
              also work with experts such as medical professionals, economists,
              and accident reconstruction specialists to help determine the full
              value of your case. Ultimately, the value of your accident will
              depend on the specific circumstances of your case, and the
              strength of your case will depend on the evidence you are able to
              present to support your claim.
            </Paragraph>
            <Paragraph>
              If you have been in an accident and are looking to calculate how
              much your case may be worth, there are several factors to
              consider. Some of the most common factors include medical
              expenses, lost wages, property damage, pain and suffering, loss of
              consortium, future medical expenses, future lost wages, and
              punitive damages. These factors can be complex and may require the
              help of an experienced accident lawyer to properly evaluate.
              Working with a lawyer can also help you build a strong case for
              compensation, and may involve working with experts such as medical
              professionals and accident reconstruction specialists to determine
              the full value of your case. Ultimately, the specific
              circumstances of your accident will play a large role in
              determining its value, and a skilled accident lawyer can help you
              navigate the process and pursue the compensation you deserve.
            </Paragraph>

            <Title>
              CAR ACCIDENT INJURIES AND THEIR APPROXIMATE RECOVERY COSTS
            </Title>

            <Paragraph>
              Car accidents can result in a variety of injuries, ranging from
              minor to severe. Some of the most common injuries include
              whiplash, joint and tissue damage, and injuries that require
              surgery. Severe and life-threatening injuries are also possible.
              Recovery costs for these injuries can be expensive, as they may
              require more than just immediate medical attention and can involve
              weeks or months of physical therapy.
            </Paragraph>

            <Paragraph>
              The medical bills for these injuries can range from $3,000 to more
              than $100,000, depending on the specific injury and the extent of
              medical treatment required.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img src={Image1} alt='Car being evaluated for total loss' />
          </ImageContent>
          <TextContent>
            <Title>
              How can KR Injury Law Firm help you if you’ve been in an accident?
            </Title>
            <Paragraph>
              If you've been in an accident and are looking for a law firm to
              represent you, there are many reasons to consider KR Injury Law.
              Here are just a few: Experience: The attorneys at KR Injury Law
              have years of experience representing clients in a wide range of
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
              integrity, and dedication to their clients. Overall, if you are
              looking for an experienced, compassionate, and representative law
              firm to represent you in your personal injury case, KR Injury Law
              is an excellent choice.
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

export default AccidentPage;
