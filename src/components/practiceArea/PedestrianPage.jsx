import React from "react";
import styled from "styled-components";
import pedestrian_accident from "../../assets/services_imgs/pedestrian_accident.jpg";
import pedestrian_accident001 from "../../assets/services_imgs/pedestrian_accident001.jpg";
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

const PedestrianPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="PEDESTRIAN ACCIDENTS"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
          <TextContent>
            <Title>PEDESTRIAN ACCIDENT ATTORNEY</Title>
            <Paragraph>
              Walking is one of the most basic forms of transportation, but it
              can also be one of the most dangerous. When pedestrians are
              involved in accidents with motor vehicles, the results can be
              catastrophic due to the lack of protection pedestrians have.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been injured in a pedestrian accident,
              it's crucial to understand your legal rights and options. The
              experienced pedestrian accident attorneys at KR Law are here to
              help you navigate the complex legal system and fight for the
              compensation you deserve.
            </Paragraph>
            <Paragraph>
              Pedestrian accidents often result in severe injuries, including
              broken bones, spinal cord injuries, traumatic brain injuries, and
              even death. These injuries can lead to substantial medical bills,
              lost wages, and long-term disability.
            </Paragraph>
            <Paragraph>
              Our dedicated team understands the physical, emotional, and
              financial toll that pedestrian accidents can take on victims and
              their families. We are committed to providing compassionate,
              personalized legal representation to help you recover the maximum
              compensation for your injuries.
            </Paragraph>
            <Paragraph>
              With years of experience handling pedestrian accident cases in
              California, we have the knowledge and resources to build a strong
              case on your behalf and hold the responsible parties accountable
              for their negligence.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img src={pedestrian_accident} alt="Pedestrian accident scene" />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
            <Title>Common Causes of Pedestrian Accidents</Title>
            <Paragraph>
              Understanding the common causes of pedestrian accidents can help
              establish liability in your case. Some of the most frequent causes
              include:
            </Paragraph>
            <Paragraph>
              <strong>Distracted Driving:</strong> Drivers who are texting,
              talking on the phone, or otherwise distracted may fail to notice
              pedestrians in crosswalks or at intersections.
            </Paragraph>
            <Paragraph>
              <strong>Speeding:</strong> Drivers who exceed speed limits have
              less time to react to pedestrians and may be unable to stop in
              time to avoid a collision.
            </Paragraph>
            <Paragraph>
              <strong>Failure to Yield:</strong> Drivers who fail to yield the
              right-of-way to pedestrians at crosswalks and intersections can
              cause serious accidents.
            </Paragraph>
            <Paragraph>
              <strong>Impaired Driving:</strong> Drivers under the influence of
              alcohol or drugs have impaired judgment and reaction times,
              increasing the risk of pedestrian accidents.
            </Paragraph>
            <Paragraph>
              <strong>Poor Visibility:</strong> Accidents are more likely to
              occur at night or in bad weather conditions when visibility is
              reduced.
            </Paragraph>
            <Paragraph>
              <strong>Left-Turn Accidents:</strong> Drivers making left turns
              may focus on oncoming traffic and fail to notice pedestrians
              crossing the street.
            </Paragraph>
            <Paragraph>
              If any of these factors contributed to your pedestrian accident,
              our attorneys can help you gather evidence to support your claim
              and establish liability.
            </Paragraph>
          </ContentSide>

          <FormSide>
            <FormContainer>
              <FormWrapper>
                <FormTitle>Contact Us Today!</FormTitle>
                <Description>
                  If you've been injured in a pedestrian accident, contact the
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
            <Title>California Pedestrian Laws and Rights</Title>
            <Paragraph>
              Understanding California's pedestrian laws is essential for
              determining liability in a pedestrian accident case. In
              California, pedestrians generally have the right-of-way in marked
              and unmarked crosswalks. However, pedestrians also have
              responsibilities, such as not suddenly leaving a curb and walking
              into the path of a vehicle that is so close it creates an
              immediate hazard.
            </Paragraph>
            <Paragraph>
              California Vehicle Code Section 21950 states that drivers must
              yield the right-of-way to pedestrians crossing the roadway within
              any marked or unmarked crosswalk at an intersection. This means
              that drivers must slow down or stop if necessary to allow
              pedestrians to safely cross the street.
            </Paragraph>
            <Paragraph>
              However, the same section also states that pedestrians must not
              suddenly leave a curb or other place of safety and walk or run
              into the path of a vehicle that is so close it constitutes an
              immediate hazard. Additionally, pedestrians must not unnecessarily
              stop or delay traffic while in a marked or unmarked crosswalk.
            </Paragraph>
            <Paragraph>
              California also follows a "comparative negligence" rule, which
              means that even if you were partially at fault for the accident,
              you may still be able to recover damages. Your compensation would
              be reduced by your percentage of fault. For example, if you were
              found to be 20% at fault for the accident and your damages totaled
              $100,000, you would be able to recover $80,000.
            </Paragraph>
            <Paragraph>
              Our attorneys have a deep understanding of California pedestrian
              laws and can help determine the best legal strategy for your case
              based on the specific circumstances of your accident.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>Compensation in Pedestrian Accident Cases</Title>
            <Paragraph>
              If you've been injured in a pedestrian accident due to someone
              else's negligence, you may be entitled to various types of
              compensation, including:
            </Paragraph>
            <Paragraph>
              <strong>Medical Expenses:</strong> This includes current and
              future medical costs such as hospital bills, surgeries,
              medication, physical therapy, and rehabilitation.
            </Paragraph>
            <Paragraph>
              <strong>Lost Wages:</strong> If your injuries prevent you from
              working, you may be able to recover compensation for lost income
              and loss of earning capacity.
            </Paragraph>
            <Paragraph>
              <strong>Pain and Suffering:</strong> This compensates for the
              physical pain and emotional distress caused by your injuries.
            </Paragraph>
            <Paragraph>
              <strong>Emotional Distress:</strong> This covers the psychological
              impact of the accident, such as anxiety, depression, and
              post-traumatic stress disorder.
            </Paragraph>
            <Paragraph>
              <strong>Loss of Enjoyment of Life:</strong> If your injuries
              prevent you from engaging in activities you once enjoyed, you may
              be compensated for this loss.
            </Paragraph>
            <Paragraph>
              <strong>Wrongful Death:</strong> If a pedestrian accident results
              in death, the victim's family may be entitled to compensation for
              funeral expenses, loss of financial support, and loss of
              companionship.
            </Paragraph>
            <Paragraph>
              Our attorneys will work diligently to ensure that all of your
              damages are properly calculated and included in your claim,
              maximizing the compensation you receive.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={pedestrian_accident001}
              alt="Pedestrian accident attorney consulting with client"
            />
          </ImageContent>
          <TextContent>
            <Title>How Our Pedestrian Accident Attorneys Can Help</Title>
            <Paragraph>
              At KR Law, our experienced pedestrian accident attorneys can
              provide valuable assistance in several ways:
            </Paragraph>
            <Paragraph>
              <strong>Thorough Investigation:</strong> We will conduct a
              comprehensive investigation of your accident, gathering evidence
              such as police reports, witness statements, surveillance footage,
              and expert testimony to build a strong case.
            </Paragraph>
            <Paragraph>
              <strong>Determining Liability:</strong> We will identify all
              potentially liable parties, which may include the driver, the
              driver's employer (if they were working at the time), or even
              government entities responsible for road maintenance.
            </Paragraph>
            <Paragraph>
              <strong>Calculating Damages:</strong> We will work with medical
              professionals and economic experts to accurately calculate the
              full extent of your damages, including future medical expenses and
              lost earning capacity.
            </Paragraph>
            <Paragraph>
              <strong>Negotiating with Insurance Companies:</strong> We will
              handle all communications with insurance companies, protecting
              your rights and ensuring that you don't accept a settlement that
              is less than what you deserve.
            </Paragraph>
            <Paragraph>
              <strong>Litigation:</strong> If a fair settlement cannot be
              reached, we are prepared to take your case to court and provide
              aggressive representation to protect your interests.
            </Paragraph>
            <Paragraph>
              <strong>Support Throughout the Process:</strong> We understand
              that dealing with the aftermath of a pedestrian accident can be
              overwhelming. Our team will provide guidance and support
              throughout the legal process, answering your questions and
              addressing your concerns.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been injured in a pedestrian accident,
              don't navigate this challenging time alone. Contact our
              experienced pedestrian accident attorneys today for a free
              consultation and let us help you get the justice and compensation
              you deserve.
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

export default PedestrianPage;
