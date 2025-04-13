import React from "react";
import styled from "styled-components";
import electric_scooter_accident from "../../assets/services_imgs/electric_scooter_accident.jpg";
import electric_scooter_accident001 from "../../assets/services_imgs/electric_scooter_accident001.jpg";
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

const ElectricalPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="ELECTRIC SCOOTER ACCIDENT"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <Container>
        <Section>
          <TextContent>
            <Title>ELECTRIC SCOOTER ACCIDENT ATTORNEY</Title>
            <Paragraph>
              Electric scooters have become increasingly popular in urban areas
              as a convenient and eco-friendly transportation option. However,
              with their rising popularity, there has been a corresponding
              increase in electric scooter accidents and injuries. These
              accidents can result in serious injuries due to the exposed nature
              of the rider and the potential for high-speed collisions.
            </Paragraph>
            <Paragraph>
              If you or a loved one has been injured in an electric scooter
              accident, whether as a rider, pedestrian, or another road user,
              you may be entitled to compensation for your injuries and damages.
              At KR Law, our experienced electric scooter accident attorneys are
              dedicated to helping victims navigate the complex legal issues
              surrounding these cases.
            </Paragraph>
            <Paragraph>
              Electric scooter accidents can be caused by various factors,
              including scooter malfunctions, road hazards, negligent drivers,
              or even the negligence of other scooter riders. Determining
              liability in these cases often requires a thorough investigation
              and understanding of local regulations regarding electric
              scooters.
            </Paragraph>
            <Paragraph>
              Our team has extensive experience handling electric scooter
              accident cases and will work tirelessly to ensure you receive the
              compensation you deserve for your medical expenses, lost wages,
              pain and suffering, and other damages resulting from the accident.
            </Paragraph>
          </TextContent>
          <ImageContent>
            <img
              src={electric_scooter_accident}
              alt="Electric scooter accident scene"
            />
          </ImageContent>
        </Section>

        <ContentWithFormSection>
          <ContentSide>
            <Title>Common Causes of Electric Scooter Accidents</Title>
            <Paragraph>
              Electric scooter accidents can occur due to a variety of factors.
              Understanding the common causes of these accidents can help in
              establishing liability and building a strong case for
              compensation. Some of the most frequent causes include:
            </Paragraph>
            <Paragraph>
              <strong>Hazardous Road Conditions:</strong> Potholes, uneven
              pavement, debris, and other road hazards can cause scooter riders
              to lose control and crash. Municipalities and property owners may
              be held liable for accidents caused by poorly maintained roads or
              walkways.
            </Paragraph>
            <Paragraph>
              <strong>Scooter Defects:</strong> Mechanical failures such as
              brake malfunctions, steering problems, or battery issues can lead
              to accidents. In such cases, the scooter manufacturer or rental
              company may be held responsible.
            </Paragraph>
            <Paragraph>
              <strong>Collisions with Vehicles:</strong> Many electric scooter
              accidents involve collisions with cars, trucks, or other vehicles.
              These accidents often occur at intersections, driveways, or when
              vehicles are making turns without noticing the scooter rider.
            </Paragraph>
            <Paragraph>
              <strong>Pedestrian Collisions:</strong> Scooter riders traveling
              on sidewalks may collide with pedestrians, causing injuries to
              both parties. These accidents often raise complex liability
              questions.
            </Paragraph>
            <Paragraph>
              <strong>Rider Inexperience:</strong> Many electric scooter
              accidents occur due to the rider's inexperience or unfamiliarity
              with operating the scooter, especially with rental scooters that
              may be used by first-time riders.
            </Paragraph>
          </ContentSide>

          <FormSide>
            <FormContainer>
              <FormWrapper>
                <FormTitle>Contact Us Today!</FormTitle>
                <Description>
                  If you've been injured in an electric scooter accident,
                  contact the personal injury lawyers at KR Law Group today for
                  a FREE no obligation consultation. Remember, we don't get paid
                  until you do.
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
            <Title>Types of Injuries in Electric Scooter Accidents</Title>
            <Paragraph>
              Electric scooter accidents can result in a wide range of injuries,
              from minor cuts and bruises to severe, life-threatening trauma.
              The lack of protection for scooter riders makes them particularly
              vulnerable to serious injuries in the event of an accident. Some
              common injuries associated with electric scooter accidents
              include:
            </Paragraph>
            <Paragraph>
              <strong>Head Injuries:</strong> Traumatic brain injuries,
              concussions, and skull fractures are common in electric scooter
              accidents, especially when riders don't wear helmets. These
              injuries can have long-lasting effects and may require extensive
              medical treatment.
            </Paragraph>
            <Paragraph>
              <strong>Fractures and Broken Bones:</strong> The impact from falls
              or collisions can result in broken arms, wrists, legs, or ribs.
              Fractures often require surgical intervention and prolonged
              recovery periods.
            </Paragraph>
            <Paragraph>
              <strong>Facial Injuries:</strong> Riders may suffer facial
              lacerations, dental injuries, or facial fractures from direct
              impact with the ground or objects during an accident.
            </Paragraph>
            <Paragraph>
              <strong>Soft Tissue Injuries:</strong> Sprains, strains, and tears
              to ligaments, tendons, and muscles are common in electric scooter
              accidents, particularly when riders attempt to break their fall
              with their hands or arms.
            </Paragraph>
            <Paragraph>
              <strong>Road Rash:</strong> When riders slide across pavement or
              concrete after falling from a scooter, they often suffer painful
              abrasions known as road rash. These injuries can become infected
              if not properly treated.
            </Paragraph>
            <Paragraph>
              <strong>Spinal Cord Injuries:</strong> More severe accidents can
              result in spinal cord damage, which may lead to partial or
              complete paralysis and require lifelong medical care.
            </Paragraph>
            <Paragraph>
              If you've suffered any of these injuries in an electric scooter
              accident, it's crucial to seek both medical attention and legal
              counsel promptly to protect your health and your rights to
              compensation.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <TextOnlySection>
          <TextContent>
            <Title>Electric Scooter Regulations in California</Title>
            <Paragraph>
              Understanding the laws and regulations governing electric scooters
              in California is essential for determining liability in accident
              cases. These regulations can vary by city or municipality, but
              there are some statewide laws that apply to all electric scooter
              riders:
            </Paragraph>
            <Paragraph>
              <strong>Licensing Requirements:</strong> California law does not
              require scooter riders to have a driver's license, but riders must
              be at least 16 years old.
            </Paragraph>
            <Paragraph>
              <strong>Helmet Requirements:</strong> As of January 2019, adults
              (18 and older) are not legally required to wear helmets while
              operating electric scooters, although it is strongly recommended
              for safety. Riders under 18 must wear properly fitted and fastened
              bicycle helmets.
            </Paragraph>
            <Paragraph>
              <strong>Where Scooters Can Be Ridden:</strong> Electric scooters
              can be operated on roads with speed limits up to 25 mph. They can
              also be ridden on bike lanes and bikeways. Riding on sidewalks is
              generally prohibited unless permitted by local ordinance.
            </Paragraph>
            <Paragraph>
              <strong>Speed Limits:</strong> Electric scooters in California are
              limited to a maximum speed of 15 mph.
            </Paragraph>
            <Paragraph>
              <strong>Equipment Requirements:</strong> Electric scooters must be
              equipped with working brakes, lights for nighttime operation, and
              reflectors.
            </Paragraph>
            <Paragraph>
              <strong>Passenger Restrictions:</strong> California law prohibits
              carrying passengers on electric scooters designed for a single
              rider.
            </Paragraph>
            <Paragraph>
              <strong>Local Variations:</strong> Cities and municipalities may
              have additional regulations regarding electric scooter use,
              including restrictions on where scooters can be parked or
              operated, and whether rental companies can operate within city
              limits.
            </Paragraph>
            <Paragraph>
              Violations of these regulations can impact liability
              determinations in accident cases. Our attorneys stay current on
              all electric scooter laws and can help determine how they apply to
              your specific situation.
            </Paragraph>
          </TextContent>
        </TextOnlySection>

        <SectionRight>
          <ImageContent>
            <img
              src={electric_scooter_accident001}
              alt="Electric scooter accident attorney consulting with client"
            />
          </ImageContent>
          <TextContent>
            <Title>
              How Our Electric Scooter Accident Attorneys Can Help You
            </Title>
            <Paragraph>
              If you've been injured in an electric scooter accident, our
              experienced attorneys can provide comprehensive legal assistance
              to help you recover the compensation you deserve. Here's how we
              can help:
            </Paragraph>
            <Paragraph>
              <strong>Thorough Investigation:</strong> We will conduct a
              detailed investigation of your accident, gathering evidence such
              as witness statements, surveillance footage, accident reports, and
              scooter maintenance records to establish liability.
            </Paragraph>
            <Paragraph>
              <strong>Identifying All Liable Parties:</strong> Electric scooter
              accidents may involve multiple responsible parties, including
              scooter rental companies, vehicle drivers, property owners, or
              municipalities. We will identify all potentially liable parties to
              maximize your compensation.
            </Paragraph>
            <Paragraph>
              <strong>Expert Consultation:</strong> We work with accident
              reconstruction experts, medical professionals, and other
              specialists to build a strong case that demonstrates the full
              extent of your injuries and damages.
            </Paragraph>
            <Paragraph>
              <strong>Handling Insurance Negotiations:</strong> Our attorneys
              will communicate and negotiate with insurance companies on your
              behalf, protecting you from tactics designed to minimize your
              claim.
            </Paragraph>
            <Paragraph>
              <strong>Comprehensive Damages Calculation:</strong> We ensure that
              all your damages are properly calculated, including current and
              future medical expenses, lost wages, pain and suffering, and
              diminished quality of life.
            </Paragraph>
            <Paragraph>
              <strong>Litigation Representation:</strong> If a fair settlement
              cannot be reached, our skilled trial attorneys are prepared to
              take your case to court and advocate aggressively for your rights.
            </Paragraph>
            <Paragraph>
              <strong>No Upfront Costs:</strong> We handle electric scooter
              accident cases on a contingency fee basis, which means you pay
              nothing unless we win your case. This arrangement allows you to
              focus on your recovery while we handle the legal aspects of your
              claim.
            </Paragraph>
            <Paragraph>
              Don't navigate the aftermath of an electric scooter accident
              alone. Contact our experienced electric scooter accident attorneys
              today for a free consultation and let us help you on the path to
              recovery and fair compensation.
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

export default ElectricalPage;
