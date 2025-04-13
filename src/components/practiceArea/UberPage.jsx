import React from "react";
import styled from "styled-components";

import uber_accident_lawyer from "../../assets/services_imgs/uber_accident_lawyer.jpeg";
import uber_accident_lawyer001 from "../../assets/services_imgs/uber_accident_lawyer001.jpg";
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

const UberPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="UBER ACCIDENT LAWYERS"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
          <TextContent>
            <Title>UBER ACCIDENT LAWYERS</Title>
            <Paragraph>
              If you've been involved in an Uber accident, you need experienced
              legal representation. The consequences of an accident can be
              severe and may have a significant impact on your life. At KR Law,
              we understand the challenges you face and are here to help you
              every step of the way.
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
          </TextContent>
          <ImageContent>
            <img
              src={uber_accident_lawyer}
              alt="Uber accident lawyer consulting with client"
            />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
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
            <Title>Understanding Uber Accident Claims</Title>
            <Paragraph>
              Uber accident claims can be complex due to the unique relationship
              between Uber, its drivers, and passengers. Understanding how
              liability works in these cases is crucial for maximizing your
              compensation.
            </Paragraph>
            <Paragraph>
              <strong>Insurance Coverage:</strong> Uber provides different
              levels of insurance coverage depending on the driver's status at
              the time of the accident. When a driver is offline, their personal
              auto insurance applies. When the app is on but no ride is
              accepted, Uber provides limited liability coverage. Once a ride is
              accepted and during trips, Uber provides $1 million in liability
              coverage.
            </Paragraph>
            <Paragraph>
              <strong>Determining Liability:</strong> Liability in Uber
              accidents may involve multiple parties, including the Uber driver,
              other drivers, Uber itself, or even vehicle manufacturers if a
              defect contributed to the accident. Our attorneys will conduct a
              thorough investigation to identify all potentially liable parties.
            </Paragraph>
            <Paragraph>
              <strong>Types of Compensation:</strong> Victims of Uber accidents
              may be entitled to various forms of compensation, including
              medical expenses, lost wages, pain and suffering, and property
              damage. In cases involving severe injuries, compensation for
              future medical care and diminished earning capacity may also be
              available.
            </Paragraph>
            <Paragraph>
              <strong>Statute of Limitations:</strong> In California, there is a
              limited time frame for filing personal injury claims, typically
              two years from the date of the accident. It's crucial to consult
              with an attorney as soon as possible to ensure your rights are
              protected.
            </Paragraph>
            <Paragraph>
              Our experienced Uber accident attorneys understand these
              complexities and can navigate the legal system to ensure you
              receive fair compensation for your injuries and losses.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>Common Causes of Uber Accidents</Title>
            <Paragraph>
              Understanding the common causes of Uber accidents can help
              establish liability in your case. Some of the most frequent causes
              include:
            </Paragraph>
            <Paragraph>
              <strong>Distracted Driving:</strong> Uber drivers often use their
              smartphones for navigation and accepting new rides, which can lead
              to dangerous distractions. Taking eyes off the road even for a few
              seconds significantly increases accident risk.
            </Paragraph>
            <Paragraph>
              <strong>Driver Fatigue:</strong> Many Uber drivers work long hours
              or drive for multiple rideshare companies, leading to fatigue that
              impairs reaction time and decision-making abilities.
            </Paragraph>
            <Paragraph>
              <strong>Speeding and Reckless Driving:</strong> The pressure to
              complete more rides and earn more money can lead some Uber drivers
              to speed or drive aggressively, increasing accident risk.
            </Paragraph>
            <Paragraph>
              <strong>Insufficient Training:</strong> Unlike taxi drivers, Uber
              drivers don't receive special training beyond basic licensing
              requirements, which may leave them unprepared for certain driving
              situations.
            </Paragraph>
            <Paragraph>
              <strong>Unfamiliarity with Routes:</strong> Drivers may be
              navigating unfamiliar areas, leading to sudden stops, lane
              changes, or turns that can cause accidents.
            </Paragraph>
            <Paragraph>
              <strong>Vehicle Maintenance Issues:</strong> Poorly maintained
              vehicles can lead to mechanical failures that cause accidents.
              Uber requires vehicle inspections, but these may not catch all
              potential issues.
            </Paragraph>
            <Paragraph>
              Our attorneys will thoroughly investigate the circumstances of
              your Uber accident to determine the exact cause and establish
              liability.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={uber_accident_lawyer001}
              alt="Uber accident attorney reviewing case details"
            />
          </ImageContent>
          <TextContent>
            <Title>How Our Uber Accident Attorneys Can Help You</Title>
            <Paragraph>
              At KR Law, our experienced Uber accident attorneys can provide
              valuable assistance in several ways:
            </Paragraph>
            <Paragraph>
              <strong>Thorough Investigation:</strong> We will conduct a
              comprehensive investigation of your accident, gathering evidence
              such as police reports, witness statements, electronic data from
              the Uber app, and surveillance footage to build a strong case.
            </Paragraph>
            <Paragraph>
              <strong>Determining Insurance Coverage:</strong> We will identify
              all applicable insurance policies and coverage limits, including
              Uber's commercial policy, the driver's personal insurance, and
              potentially your own coverage, to maximize your potential
              compensation.
            </Paragraph>
            <Paragraph>
              <strong>Calculating Full Damages:</strong> We work with medical
              professionals, economists, and life care planners to accurately
              calculate the full extent of your damages, including future
              medical expenses, lost earning capacity, and non-economic damages
              like pain and suffering.
            </Paragraph>
            <Paragraph>
              <strong>Negotiating with Insurance Companies:</strong> Our
              attorneys have extensive experience negotiating with insurance
              companies, including Uber's insurers, and will fight for the
              maximum settlement possible for your case.
            </Paragraph>
            <Paragraph>
              <strong>Litigation Representation:</strong> If a fair settlement
              cannot be reached, our skilled trial attorneys are prepared to
              take your case to court and advocate aggressively on your behalf.
            </Paragraph>
            <Paragraph>
              <strong>No Upfront Costs:</strong> We handle Uber accident cases
              on a contingency fee basis, which means you pay nothing unless we
              win your case. Our fee is a percentage of your recovery, so we're
              motivated to maximize your compensation.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been injured in an Uber accident, don't
              navigate this challenging time alone. Contact our experienced Uber
              accident attorneys today for a free consultation and let us help
              you get the justice and compensation you deserve.
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
