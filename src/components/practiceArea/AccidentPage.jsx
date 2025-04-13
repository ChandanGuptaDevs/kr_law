import React from "react";
import styled from "styled-components";
import AccidentLayerImage from "../../assets/services_imgs/accident_layer.jpg";
import AccidentLayerImage2 from "../../assets/services_imgs/accident_layer001.jpg";
import Header from "../common/Header";
import AwardsPage from "../common/AwardsPage";
import ConsultationFormPage from "../common/ConsultationFormPage";
import BannerPage from "../common/BannerPage";
import CTABanner from "../common/CTABanner";
import Footer from "../common/Footer";

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  padding: 60px 24px 80px;
  font-family: "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
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
  background: #212121;
  padding: 30px;
  color: white;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  height: auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormWrapper = styled.div`
  width: 100%;

  font-family: "Spartan", sans-serif;
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const FormTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
  padding-bottom: 10px;
  &:after {
    content: "";
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

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid #444;
  color: white;
  padding: 8px 0;
  font-size: 0.9rem;
  font-family: "Spartan", sans-serif;
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
  font-family: "Spartan", sans-serif;
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
  font-family: "Spartan", sans-serif;
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
  margin-bottom: 0;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  font-family: "Spartan", sans-serif;

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

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
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
  align-items: flex-start;
  justify-content: space-between;

  gap: 50px;
  margin-bottom: 70px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 40px;
  }
`;

const SectionRight = styled(Section)`
  flex-direction: row-reverse;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const TextOnlySection = styled.div`
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const TextContent = styled.div`
  flex: 1.5;
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    object-fit: cover;
  }

  @media (max-width: 992px) {
    width: 100%;
    max-width: 100%;
  }
`;

const ContentWithFormSection = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 70px;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
    margin-bottom: 50px;
  }
`;

const FormSide = styled.div`
  flex: 1;
  min-width: 320px;
  align-self: flex-start;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ContentSide = styled.div`
  flex: 1.5;
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
        text="ACCIDENT LAWYER"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
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

            <Paragraph>
              Our accident attorneys have extensive experience handling a wide
              variety of personal injury cases and understand the physical,
              emotional, and financial toll that accidents can take on victims
              and their families. We approach each case with compassion and
              dedication, fighting aggressively for our clients' rights while
              providing supportive guidance throughout the legal process.
            </Paragraph>
            <Paragraph>
              When you choose KR Law to represent you in your accident case,
              you're not just getting legal representation – you're gaining a
              team of advocates who will stand by your side every step of the
              way. We handle all aspects of your claim, from gathering evidence
              and interviewing witnesses to negotiating with insurance companies
              and, if necessary, representing you in court.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img
              src={AccidentLayerImage}
              alt="Accident lawyer consulting with client"
            />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
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
          </ContentSide>

          <FormSide>
            <FormContainer>
              <FormWrapper>
                <FormTitle>Contact Us Today!</FormTitle>
                <Description>
                  If you've been injured, contact the personal injury lawyers at
                  KR Law Group today for a FREE no obligation consultation.
                  Remember, we don't get paid until you do.
                </Description>
                <StyledForm>
                  <FormGroup>
                    <Input type="text" placeholder="Full Name" />
                  </FormGroup>

                  <Row>
                    <FormGroup>
                      <Input type="email" placeholder="Email*" required />
                    </FormGroup>
                    <FormGroup>
                      <Input type="tel" placeholder="Phone*" required />
                    </FormGroup>
                  </Row>

                  <FormGroup>
                    <Select required>
                      <option value="" disabled selected>
                        Select A Case Type*
                      </option>
                      <option value="car-accident">Car Accident</option>
                      <option value="uber-lyft">Uber/Lyft Accident</option>
                      <option value="pedestrian">Pedestrian Accident</option>
                      <option value="scooter">Electric Scooter Accident</option>
                      <option value="rental-car">Rental Car Accident</option>
                      <option value="wrongful-death">Wrongful Death</option>
                      <option value="airbnb">Airbnb Incident</option>
                      <option value="others">Other</option>
                    </Select>
                  </FormGroup>

                  <Row>
                    <FormGroup>
                      <Input type="text" placeholder="City" />
                    </FormGroup>
                    <FormGroup>
                      <Input type="text" placeholder="State*" required />
                    </FormGroup>
                  </Row>

                  <FormGroup>
                    <Input type="text" placeholder="Address" />
                  </FormGroup>

                  <FormGroup>
                    <Input type="text" placeholder="Postal Code" />
                  </FormGroup>

                  <FormGroup>
                    <TextArea
                      placeholder="Tell Us About Your Case*"
                      required
                    ></TextArea>
                  </FormGroup>

                  <Button type="submit">Claim My Free Case Review</Button>
                </StyledForm>
              </FormWrapper>
            </FormContainer>
          </FormSide>
        </ContentWithFormSection>
        <TextOnlySection>
          <TextContent>
            <Title>How an Accident Lawyer Can Help You</Title>
            <Paragraph>
              Hiring an accident lawyer can make a significant difference in the
              outcome of your case. Here are some ways an accident lawyer can
              help you:
            </Paragraph>

            <KeyTakeaways>
              <div>
                <p>– Investigating the accident and gathering evidence</p>
                <p>
                  – Determining liability and identifying all responsible
                  parties
                </p>
                <p>
                  – Calculating the full extent of your damages, including
                  future costs
                </p>
                <p>– Negotiating with insurance companies on your behalf</p>
                <p>
                  – Representing you in court if a fair settlement cannot be
                  reached
                </p>
                <p>
                  – Handling all paperwork and legal procedures within required
                  deadlines
                </p>
              </div>
            </KeyTakeaways>

            <Paragraph>
              An experienced accident lawyer understands the tactics that
              insurance companies use to minimize payouts. They can prevent you
              from accepting a settlement that is less than what you deserve.
              They can also help ensure that all aspects of your damages are
              considered, including medical expenses, lost wages, pain and
              suffering, and future care needs.
            </Paragraph>

            <Title>Types of Accident Cases We Handle</Title>
            <Paragraph>
              Our law firm handles a wide range of accident cases, including:
            </Paragraph>
            <KeyTakeaways>
              <div>
                <p>– Car accidents</p>
                <p>– Truck accidents</p>
                <p>– Motorcycle accidents</p>
                <p>– Pedestrian accidents</p>
                <p>– Bicycle accidents</p>
                <p>– Slip and fall accidents</p>
                <p>– Workplace accidents</p>
                <p>– Product liability cases</p>
                <p>– Medical malpractice</p>
                <p>– Wrongful death</p>
              </div>
            </KeyTakeaways>

            <Paragraph>
              Each type of accident case requires specific knowledge and
              expertise. Our team of accident lawyers has the experience and
              skills necessary to handle any type of accident case effectively.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={AccidentLayerImage2}
              alt="Accident attorney reviewing legal documents"
            />
          </ImageContent>
          <TextContent>
            <Title>Why Choose Our Law Firm for Your Accident Case</Title>
            <Paragraph>
              When you choose our law firm to represent you in your accident
              case, you are choosing a team of dedicated professionals who are
              committed to your success. Here are some reasons why clients
              choose us:
            </Paragraph>
            <Paragraph>
              <strong>Experience and Expertise:</strong> Our accident lawyers
              have extensive experience handling all types of accident cases. We
              understand the complexities of accident law and know how to build
              strong cases for our clients.
            </Paragraph>
            <Paragraph>
              <strong>Personalized Attention:</strong> We understand that every
              accident case is unique, with its own set of circumstances and
              challenges. That's why we provide personalized attention to each
              client and tailor our approach to meet your specific needs.
            </Paragraph>
            <Paragraph>
              <strong>Proven Track Record:</strong> Our law firm has a proven
              track record of success in handling accident cases. We have helped
              numerous clients secure the compensation they deserve.
            </Paragraph>
            <Paragraph>
              <strong>No Fee Unless We Win:</strong> We work on a contingency
              fee basis, which means you don't pay unless we win your case. This
              allows you to pursue your claim without worrying about upfront
              costs.
            </Paragraph>
            <Paragraph>
              <strong>Compassionate Support:</strong> We understand that being
              being involved in an accident can be traumatic. Our team provides
              compassionate support throughout the legal process, keeping you
              informed and involved every step of the way.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been injured in an accident, don't
              hesitate to contact our law firm. We are here to help you navigate
              this difficult time and fight for the compensation you deserve.
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
