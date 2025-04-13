import React from "react";
import styled from "styled-components";
import wrongful_death from "../../assets/services_imgs/wrongful_death.webp";
import wrongful_death001 from "../../assets/services_imgs/wrongful_death001.jpg";
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

const WrongfulPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="WRONGFUL DEATH ATTORNEY"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
          <TextContent>
            <Title>WRONGFUL DEATH ATTORNEY</Title>
            <Paragraph>
              Losing a loved one is never easy, but it is even more difficult
              when their death was caused by the negligence or wrongful act of
              someone else. If you find yourself in this situation, you may be
              entitled to compensation under California law through a wrongful
              death claim.
            </Paragraph>
            <Paragraph>
              A wrongful death claim is a civil lawsuit that can be filed by the
              survivors of the deceased or by a personal representative of the
              decedent's estate. The purpose of this claim is to seek monetary
              damages from the party responsible for the wrongful death. If
              successful, the court will order the defendant to pay damages to
              the family of the deceased.
            </Paragraph>
            <Paragraph>
              However, it is important to note that filing a wrongful death
              claim is not a straightforward process. In California, there are
              specific procedures and requirements that must be followed in
              order to prove that someone is legally responsible for the
              wrongful death and financially liable for its consequences.
            </Paragraph>
            <Paragraph>
              Wrongful death can occur in a variety of situations, including
              driving-related fatalities, medical errors, workplace accidents,
              and other instances of negligence, gross negligence, recklessness,
              or intentional acts.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img src={wrongful_death} alt="Wrongful death legal assistance" />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
            <Title>HOW TO PROCEED IN CASE OF A WRONGFUL DEATH?</Title>
            <Paragraph>
              If you have lost a loved one due to wrongful death, there are
              several steps you can take to protect your rights and seek
              compensation for your associated financial losses. Here are some
              key steps to follow:
            </Paragraph>
            <Paragraph>
              <strong>
                Consult with an experienced wrongful death attorney:
              </strong>{" "}
              The first step in pursuing a wrongful death claim is to seek the
              advice of an experienced attorney who specializes in this area of
              law. They can help you understand your legal rights, navigate the
              complex legal process, and advocate for your interests in court.
            </Paragraph>
            <Paragraph>
              <strong>Gather evidence:</strong> Your attorney will work with you
              to gather evidence that supports your claim, including police
              reports, witness statements, medical records, and other relevant
              documentation. This evidence can help establish the cause of your
              loved one's death and prove that someone else was responsible.
            </Paragraph>
            <Paragraph>
              <strong>Identify the liable party:</strong> Your attorney will
              work with you to identify the party or parties who are legally
              responsible for your loved one's death. This may include
              individuals, companies, or government entities.
            </Paragraph>
            <Paragraph>
              <strong>File a claim:</strong> Once you have identified the liable
              party, your attorney will file a claim on your behalf. This will
              initiate the legal process and allow you to seek compensation for
              your financial losses.
            </Paragraph>
          </ContentSide>

          <FormSide>
            <FormContainer>
              <FormWrapper>
                <FormTitle>Contact Us Today!</FormTitle>
                <Description>
                  If you've been affected by a wrongful death, contact the
                  personal injury lawyers at KR Law Group today for a FREE no
                  obligation consultation. Remember, we don't get paid until you
                  do.
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
            <Title>WHO CAN FILE A WRONGFUL DEATH CLAIM?</Title>
            <Paragraph>
              Under California law, only certain individuals are permitted to
              file a wrongful death claim. These include:
            </Paragraph>
            <Paragraph>
              <strong>Surviving spouse or domestic partner:</strong> The spouse
              or registered domestic partner of the deceased person has the
              right to file a wrongful death claim.
            </Paragraph>
            <Paragraph>
              <strong>Surviving children:</strong> The children of the deceased
              person, including adopted children, can file a wrongful death
              claim. If the decedent has no surviving spouse or children, then
              the claim can be brought by the persons who would be entitled to
              the property of the decedent by intestate succession.
            </Paragraph>
            <Paragraph>
              <strong>Dependents:</strong> Certain individuals who were
              financially dependent on the deceased may be able to file a
              wrongful death claim. This may include stepchildren or parents who
              were financially dependent on the deceased.
            </Paragraph>
            <Paragraph>
              <strong>Personal representative:</strong> The personal
              representative of the deceased person's estate can file a wrongful
              death claim on behalf of the estate and the surviving heirs.
            </Paragraph>
            <Paragraph>
              It's important to note that California law has specific rules
              regarding who can file a wrongful death claim and when. The
              statute of limitations for filing a wrongful death claim in
              California is generally two years from the date of death. However,
              there are exceptions to this rule, so it's advisable to consult
              with an attorney as soon as possible to ensure your claim is filed
              within the required timeframe.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>TYPES OF DAMAGES IN WRONGFUL DEATH CASES</Title>
            <Paragraph>
              In California, there are several types of damages that can be
              recovered in a wrongful death case. These damages are intended to
              compensate the surviving family members for their financial and
              emotional losses resulting from the death of their loved one. The
              types of damages that can be recovered include:
            </Paragraph>
            <Paragraph>
              <strong>Economic damages:</strong> These are damages that have a
              specific monetary value and can be calculated with relative
              accuracy. Economic damages in a wrongful death case may include:
            </Paragraph>
            <Paragraph>
              - Financial support that the deceased would have contributed to
              the family during their expected lifetime
              <br />
              - Loss of gifts or benefits that the survivors would have expected
              to receive from the deceased
              <br />
              - Funeral and burial expenses
              <br />- The reasonable value of household services that the
              deceased would have provided
            </Paragraph>
            <Paragraph>
              <strong>Non-economic damages:</strong> These are damages that do
              not have a specific monetary value and are more subjective in
              nature. Non-economic damages in a wrongful death case may include:
            </Paragraph>
            <Paragraph>
              - Loss of love, companionship, comfort, care, assistance,
              protection, affection, society, and moral support
              <br />
              - Loss of enjoyment of sexual relations (for a surviving spouse or
              domestic partner)
              <br />- Loss of guidance and training that the deceased would have
              provided to their children
            </Paragraph>
            <Paragraph>
              It's important to note that punitive damages, which are designed
              to punish the defendant for particularly egregious behavior, are
              generally not available in wrongful death cases in California.
              However, they may be available in a survival action, which is a
              separate legal claim that can be brought alongside a wrongful
              death claim.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={wrongful_death001}
              alt="Attorney consulting with wrongful death client"
            />
          </ImageContent>
          <TextContent>
            <Title>How Our Wrongful Death Attorneys Can Help You</Title>
            <Paragraph>
              At KR Law, our experienced wrongful death attorneys can provide
              invaluable assistance during this difficult time. Here's how we
              can help:
            </Paragraph>
            <Paragraph>
              <strong>Compassionate Legal Support:</strong> We understand the
              emotional toll that a wrongful death can take on a family. Our
              attorneys provide compassionate legal support, guiding you through
              the legal process with sensitivity and understanding.
            </Paragraph>
            <Paragraph>
              <strong>Thorough Investigation:</strong> We conduct a
              comprehensive investigation of the circumstances surrounding your
              loved one's death, gathering evidence to establish liability and
              build a strong case.
            </Paragraph>
            <Paragraph>
              <strong>Expert Case Evaluation:</strong> We evaluate the details
              of your case to determine the potential value of your claim,
              taking into account both economic and non-economic damages.
            </Paragraph>
            <Paragraph>
              <strong>Skilled Negotiation:</strong> Our attorneys are skilled
              negotiators who can advocate effectively on your behalf with
              insurance companies and other parties to secure a fair settlement.
            </Paragraph>
            <Paragraph>
              <strong>Trial Representation:</strong> If a fair settlement cannot
              be reached, our experienced trial attorneys are prepared to take
              your case to court and fight for the compensation you deserve.
            </Paragraph>
            <Paragraph>
              <strong>No Upfront Costs:</strong> We handle wrongful death cases
              on a contingency fee basis, which means you pay nothing unless we
              win your case. This arrangement allows you to focus on healing
              while we handle the legal aspects of your case.
            </Paragraph>
            <Paragraph>
              If you have lost a loved one due to someone else's negligence or
              wrongful act, don't navigate this challenging time alone. Contact
              our experienced wrongful death attorneys today for a free
              consultation and let us help you seek the justice and compensation
              your family deserves.
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

export default WrongfulPage;
