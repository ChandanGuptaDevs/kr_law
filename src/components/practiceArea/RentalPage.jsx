import React from "react";
import styled from "styled-components";
import rental_car_accident from "../../assets/services_imgs/rental_car_accident.jpg";
import rental_car_accident001 from "../../assets/services_imgs/rental_car_accident001.jpg";
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

const RentalPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="RENTAL CAR ACCIDENT"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
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
            <Paragraph>
              With years of experience in handling rental car accidents, our
              team of expert attorneys can guide you through the legal process
              and help you get the compensation you deserve for your injuries
              and damages.
            </Paragraph>
            <Paragraph>
              We understand how stressful and overwhelming rental car accidents
              can be. That's why we are dedicated to providing compassionate and
              personalized legal representation to each and every one of our
              clients.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img src={rental_car_accident} alt="Rental car after accident" />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
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
              administrative expenses. Depending on the rental company's
              agreement, you may be responsible for these additional funds.
            </Paragraph>
            <Paragraph>
              Even if you are not at fault, the rental car company may not want
              to wait for the claims process to finish to repair its vehicle and
              may charge you for repairs. In this case, you may have to file a
              claim against the other driver's insurance for reimbursement.
            </Paragraph>
            <Paragraph>
              Understanding the complex liability issues in rental car accidents
              requires expert legal guidance. Our attorneys can help determine
              who is liable and how to proceed with your claim to ensure you
              don't pay unnecessary costs.
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
            <Title>Insurance Coverage in Rental Car Accidents</Title>
            <Paragraph>
              Understanding insurance coverage in rental car accidents can be
              complex. There are several types of insurance that may apply to
              your case:
            </Paragraph>
            <Paragraph>
              <strong>Personal Auto Insurance:</strong> Your personal auto
              insurance policy may provide coverage for rental cars. Many
              policies include collision coverage, which pays for damage to the
              rental car, and liability coverage, which covers damage you cause
              to other vehicles or injuries to other people.
            </Paragraph>
            <Paragraph>
              <strong>Credit Card Insurance:</strong> Many credit cards offer
              rental car insurance as a benefit if you use the card to pay for
              the rental. This is typically secondary coverage, meaning it
              applies after your personal auto insurance has been exhausted.
            </Paragraph>
            <Paragraph>
              <strong>Rental Car Insurance:</strong> Rental car companies offer
              various insurance options, such as collision damage waiver (CDW),
              supplemental liability protection, personal accident insurance,
              and personal effects coverage. These can provide additional
              protection beyond what your personal auto insurance covers.
            </Paragraph>
            <Paragraph>
              <strong>Third-Party Insurance:</strong> If you were not at fault
              for the accident, the other driver's insurance should cover your
              damages and injuries. However, if the other driver is uninsured or
              underinsured, you may need to rely on your own coverage.
            </Paragraph>
            <Paragraph>
              Our attorneys can help you navigate these complex insurance issues
              and ensure that all applicable policies are utilized to provide
              you with maximum coverage for your damages and injuries.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>Steps to Take After a Rental Car Accident</Title>
            <Paragraph>
              If you are involved in a rental car accident, there are several
              important steps you should take to protect your rights and
              strengthen your potential claim:
            </Paragraph>
            <Paragraph>
              <strong>Check for Injuries:</strong> First and foremost, check
              yourself and others for injuries. If there are any injuries, call
              911 immediately to get medical help.
            </Paragraph>
            <Paragraph>
              <strong>Report the Accident:</strong> Call the police to report
              the accident. A police report can be valuable evidence for your
              insurance claim or lawsuit. Also notify the rental car company as
              soon as possible.
            </Paragraph>
            <Paragraph>
              <strong>Exchange Information:</strong> Exchange contact and
              insurance information with the other driver(s) involved in the
              accident. Get their name, address, phone number, license plate
              number, and insurance details.
            </Paragraph>
            <Paragraph>
              <strong>Document the Scene:</strong> Take photos of the accident
              scene, including damage to all vehicles, the surrounding area,
              road conditions, traffic signs, and any visible injuries. This
              evidence can be crucial for your claim.
            </Paragraph>
            <Paragraph>
              <strong>Gather Witness Information:</strong> If there were
              witnesses to the accident, get their contact information. Their
              statements can support your account of what happened.
            </Paragraph>
            <Paragraph>
              <strong>Seek Medical Attention:</strong> Even if you feel fine,
              see a doctor as soon as possible. Some injuries may not be
              immediately apparent, and having documentation of your medical
              condition shortly after the accident can be important for your
              claim.
            </Paragraph>
            <Paragraph>
              <strong>Contact Your Insurance:</strong> Notify your insurance
              company about the accident, even if you believe you weren't at
              fault. Be honest and provide all the facts, but avoid making
              statements that could be interpreted as admitting fault.
            </Paragraph>
            <Paragraph>
              <strong>Consult an Attorney:</strong> Contact a rental car
              accident attorney to discuss your case. An experienced attorney
              can guide you through the complex legal and insurance issues
              involved in rental car accidents.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={rental_car_accident001}
              alt="Attorney reviewing rental car accident case"
            />
          </ImageContent>
          <TextContent>
            <Title>How Our Rental Car Accident Attorneys Can Help</Title>
            <Paragraph>
              At KR Law, our experienced rental car accident attorneys can
              provide valuable assistance in several ways:
            </Paragraph>
            <Paragraph>
              <strong>Case Evaluation:</strong> We will review your case in
              detail, helping you understand your legal rights and options. We
              can identify potential sources of liability and insurance coverage
              to maximize your recovery.
            </Paragraph>
            <Paragraph>
              <strong>Insurance Negotiations:</strong> We can handle all
              communications and negotiations with insurance companies, ensuring
              that your rights are protected and that you don't accept a
              settlement that is less than what you deserve.
            </Paragraph>
            <Paragraph>
              <strong>Evidence Collection:</strong> Our team will gather and
              preserve all necessary evidence to support your claim, including
              police reports, witness statements, medical records, and rental
              agreements.
            </Paragraph>
            <Paragraph>
              <strong>Liability Determination:</strong> We will conduct a
              thorough investigation to determine who was at fault for the
              accident and hold all responsible parties accountable.
            </Paragraph>
            <Paragraph>
              <strong>Damage Calculation:</strong> We will accurately calculate
              all of your damages, including medical expenses, lost wages, pain
              and suffering, and property damage, to ensure you receive full
              compensation.
            </Paragraph>
            <Paragraph>
              <strong>Litigation Representation:</strong> If a fair settlement
              cannot be reached, we are prepared to take your case to court and
              provide aggressive representation to protect your interests.
            </Paragraph>
            <Paragraph>
              If you have been involved in a rental car accident, don't navigate
              this complex situation alone. Contact our experienced rental car
              accident attorneys today for a free consultation and let us help
              you get the compensation you deserve.
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
