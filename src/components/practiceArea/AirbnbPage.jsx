import React from "react";
import styled from "styled-components";
import airbnb_attorney from "../../assets/services_imgs/airbnb_attorney.jpg";
import airbnb_attorney001 from "../../assets/services_imgs/airbnb_attorney001.jpg";
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

const AirbnbPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="AIRBNB ATTORNEY"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
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
            <Paragraph>
              Our team of specialized Airbnb attorneys understands the unique
              challenges that can arise in Airbnb-related legal disputes. We
              have extensive experience representing both hosts and guests in
              various Airbnb cases, from property damage claims to personal
              injury incidents that occur during a stay.
            </Paragraph>
            <Paragraph>
              With our deep knowledge of hospitality law, short-term rental
              regulations, and Airbnb's specific policies and terms of service,
              we can provide the expert guidance you need to protect your rights
              and interests.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img
              src={airbnb_attorney}
              alt="Airbnb attorney consulting with client"
            />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
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
            <Paragraph>
              Our attorneys have successfully represented clients in cases
              against Airbnb and can help you navigate the complex legal
              landscape, including addressing issues with Airbnb's arbitration
              clause that often presents challenges for potential litigants.
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
            <Title>Common Airbnb Legal Issues</Title>
            <Paragraph>
              Airbnb and similar short-term rental platforms have created a new
              landscape of legal challenges for both hosts and guests. Our
              attorneys have experience handling a wide range of Airbnb-related
              legal issues, including:
            </Paragraph>
            <Paragraph>
              <strong>Personal Injury Claims:</strong> If you're injured during
              an Airbnb stay due to unsafe conditions, faulty equipment, or
              other hazards, you may be entitled to compensation. Our attorneys
              can help you navigate the complexities of determining liability
              between the host, property owner, and Airbnb itself.
            </Paragraph>
            <Paragraph>
              <strong>Property Damage Disputes:</strong> Whether you're a host
              whose property was damaged by guests or a guest being unfairly
              charged for damages, we can help resolve these disputes and ensure
              fair treatment under Airbnb's policies.
            </Paragraph>
            <Paragraph>
              <strong>Host Liability Issues:</strong> Airbnb hosts face unique
              liability challenges that traditional landlords don't. We can
              advise on appropriate insurance coverage, liability waivers, and
              other protective measures.
            </Paragraph>
            <Paragraph>
              <strong>Zoning and Regulatory Compliance:</strong> Many cities and
              counties have specific regulations governing short-term rentals.
              We can help hosts ensure they're in compliance with local laws to
              avoid penalties and legal issues.
            </Paragraph>
            <Paragraph>
              <strong>Discrimination Claims:</strong> Both hosts and guests are
              protected against various forms of discrimination. We can
              represent individuals who have experienced discriminatory
              practices on the platform.
            </Paragraph>
            <Paragraph>
              <strong>Contract Disputes:</strong> Disputes over reservation
              cancellations, refunds, and other contractual matters require
              knowledgeable legal representation to resolve effectively.
            </Paragraph>

            <Paragraph>
              <strong>Privacy and Security Breaches:</strong> Cases involving
              unauthorized surveillance, security breaches, or privacy
              violations during Airbnb stays require specialized legal
              expertise.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>Understanding Airbnb's Insurance Coverage</Title>
            <Paragraph>
              Airbnb offers several insurance and protection programs that can
              impact legal claims. Understanding these programs is crucial when
              pursuing a claim:
            </Paragraph>
            <Paragraph>
              <strong>Host Protection Insurance:</strong> This program provides
              hosts with liability coverage of up to $1 million for bodily
              injury or property damage claims. However, there are significant
              exclusions and limitations to this coverage that many hosts don't
              fully understand.
            </Paragraph>
            <Paragraph>
              <strong>Host Guarantee:</strong> This program offers up to $1
              million in property damage protection for hosts. However, getting
              claims approved can be challenging, and many types of damage may
              not be covered.
            </Paragraph>
            <Paragraph>
              <strong>Limitations and Exclusions:</strong> Both programs have
              numerous exclusions and limitations that can affect claims. For
              example, shared areas of buildings, preexisting property
              conditions, and certain types of personal property may not be
              covered.
            </Paragraph>
            <Paragraph>
              <strong>Third-Party Insurance:</strong> In some cases, a host's
              homeowner's insurance or a guest's renter's or travel insurance
              may provide coverage for incidents that occur during an Airbnb
              stay.
            </Paragraph>
            <Paragraph>
              Our attorneys have experience navigating these complex insurance
              issues and can help determine the best approach for your specific
              situation. We can evaluate available coverage options, identify
              responsible parties, and develop a strategy to maximize your
              potential recovery.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img src={airbnb_attorney001} alt="Airbnb legal consultation" />
          </ImageContent>
          <TextContent>
            <Title>How Our Airbnb Attorneys Can Help You</Title>
            <Paragraph>
              At KR Law, our experienced Airbnb attorneys can provide valuable
              assistance in several ways:
            </Paragraph>
            <Paragraph>
              <strong>Case Evaluation:</strong> We offer thorough evaluations of
              your Airbnb-related legal issue, helping you understand your
              rights, options, and the potential outcomes of various legal
              strategies.
            </Paragraph>
            <Paragraph>
              <strong>Navigating Airbnb's Terms of Service:</strong> Airbnb's
              terms of service contain important provisions that can affect your
              legal rights, including arbitration clauses and liability
              limitations. Our attorneys can help you understand and navigate
              these complex terms.
            </Paragraph>
            <Paragraph>
              <strong>Insurance Claims Assistance:</strong> We can help you
              navigate the often-complex process of filing claims with Airbnb's
              Host Protection Insurance or Host Guarantee programs, or with
              third-party insurers.
            </Paragraph>
            <Paragraph>
              <strong>Negotiation and Mediation:</strong> Many Airbnb disputes
              can be resolved through skilled negotiation or mediation. Our
              attorneys are experienced negotiators who can represent your
              interests effectively in these processes.
            </Paragraph>
            <Paragraph>
              <strong>Litigation and Arbitration:</strong> When necessary, we
              provide robust representation in litigation or arbitration
              proceedings, fighting to protect your rights and secure the
              compensation or resolution you deserve.
            </Paragraph>
            <Paragraph>
              <strong>Regulatory Compliance Guidance:</strong> For hosts, we
              offer guidance on complying with local regulations, taxes, and
              other legal requirements for short-term rentals.
            </Paragraph>
            <Paragraph>
              If you're facing an Airbnb-related legal issue, don't navigate
              this complex landscape alone. Contact our experienced Airbnb
              attorneys today for a free consultation and let us help you
              protect your rights and interests.
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

export default AirbnbPage;
