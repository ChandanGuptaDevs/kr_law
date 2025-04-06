import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  background: #f5f5f5;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex-direction: column;
    margin: 30px auto;
  }

  @media (max-width: 768px) {
    margin: 25px auto;
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
  font-family: "Spartan", sans-serif;
`;

const Title = styled.h2`
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

const MapContainer = styled.div`
  flex: 1;
  background: white;
  padding: 35px;
  order: 2;
  @media (max-width: 1200px) {
    padding: 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    order: 2;
  }
`;

const OfficeCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TextCard = styled.div`
  text-align: left;
  font-family: "Spartan", sans-serif;
  margin-bottom: 20px;
`;

const LocationTitle = styled.h3`
  color: #ba0a02;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 8px;
  position: relative;
  padding-bottom: 8px;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #ba0a02;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Address = styled.p`
  color: #333;
  font-size: 0.9rem;
  margin: 0 0 4px 0;
  line-height: 1.5;
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Phone = styled.p`
  color: #ba0a02;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 8px 0 0;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Email = styled.p`
  color: #555;
  font-size: 0.9rem;
  margin: 4px 0 0;
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

const ContactForm = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8298914848394!2d-118.28887058478265!3d34.06104582490371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7fd08f345f3%3A0xd2292c6df320e918!2s3055%20Wilshire%20Blvd%20%231120%2C%20Los%20Angeles%2C%20CA%2090010%2C%20USA!5e0!3m2!1sen!2sus!4v1712256000000!5m2!1sen!2sus&maptype=satellite";

  const locations = [
    {
      title: "Los Angeles Office",
      address: "3055 Wilshire Blvd #1120\nLos Angeles, CA 90010",
      phone: "+1 213-833-8361",
      email: "kathy@krinjurylawfirm.com",
    },
  ];

  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <Title>Contact Us Today!</Title>
          <Description>
            If you've been injured, contact the personal injury lawyers at KR
            Law Group today for a FREE no obligation consultation. Remember, we
            don't get paid until you do.
          </Description>
          <form>
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
          </form>
        </FormWrapper>
      </FormContainer>

      <MapContainer>
        {locations.map((location, index) => (
          <OfficeCard key={index}>
            <TextCard>
              <LocationTitle>{location.title}</LocationTitle>
              <Address>{location.address}</Address>
              <Phone>{location.phone}</Phone>
              <Email>{location.email}</Email>
            </TextCard>
            <MapWrapper>
              <Map
                src={mapUrl}
                loading="lazy"
                title="KR Law Office Location"
                allowFullScreen
              ></Map>
            </MapWrapper>
          </OfficeCard>
        ))}
      </MapContainer>
    </Container>
  );
};
export default ContactForm;
