import React from "react";
import styled from "styled-components";
import bgImage from "../../assets/images/bg_img02.jpg";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  margin: 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background: url(${bgImage}) center/cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: white;
  padding: 25px;
  position: relative;
  min-height: 350px;

  @media (max-width: 1200px) {
    padding: 22px;
  }

  @media (max-width: 1024px) {
    min-height: 280px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    min-height: 230px;
    padding: 18px;
  }

  @media (max-width: 480px) {
    min-height: 180px;
    padding: 15px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );
`;

const Content = styled.div`
  position: relative;
  z-index: 1;

  max-width: 480px;
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  border-left: 3px solid #ba0a02;

  h2 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1.3;
    font-family: "Spartan", sans-serif;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    color: #ba0a02;
    margin-bottom: 8px;
    line-height: 1.4;
  }

  strong {
    font-size: 1.2rem;
    font-weight: 700;
    display: block;
    margin-top: 8px;
  }

  @media (max-width: 1024px) {
    max-width: 430px;
    padding: 14px;

    h2 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.95rem;
    }

    strong {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 768px) {
    max-width: 90%;

    h2 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
    }

    strong {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 12px;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }

    strong {
      font-size: 0.95rem;
    }
  }
`;

const RightSection = styled.div`
  flex: 1;
  background: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 25px;
  min-height: 350px;

  @media (max-width: 1200px) {
    padding: 22px;
  }

  @media (max-width: 1024px) {
    min-height: auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    padding: 18px;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const Form = styled.form`
  width: 100%;

  max-width: 480px;
  padding: 20px;
  text-align: left;
  background-color: #2a2a2a;
  border-radius: 4px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: "Spartan", sans-serif;
    position: relative;

    padding-bottom: 8px;

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;

      width: 45px;
      height: 2px;
      background-color: #ba0a02;
    }
  }

  p {
    font-size: 0.85rem;
    font-weight: 400;
    margin-bottom: 12px;
    line-height: 1.5;
    color: #cccccc;
  }

  p strong {
    color: white;
    font-weight: 600;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    padding: 18px;

    h2 {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    h2 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h2 {
      font-size: 1rem;
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-bottom: 2px solid #444;
  background-color: #333;
  font-size: 0.85rem;
  color: white;
  outline: none;
  transition: all 0.3s ease;
  border-radius: 3px 3px 0 0;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-bottom-color: #ba0a02;
    background-color: #3a3a3a;
  }

  @media (max-width: 768px) {
    padding: 7px 9px;
    font-size: 0.8rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px 10px;
  border: none;
  border-bottom: 2px solid #444;
  background-color: #333;
  font-size: 0.85rem;
  color: white;
  outline: none;
  transition: all 0.3s ease;
  height: 70px;
  resize: none;
  border-radius: 3px 3px 0 0;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-bottom-color: #ba0a02;
    background-color: #3a3a3a;
  }

  @media (max-width: 768px) {
    padding: 7px 9px;
    font-size: 0.8rem;
    height: 60px;
  }
`;

const Button = styled.button`
  background: #ba0a02;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  margin-top: 12px;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(186, 10, 2, 0.3);

  &:hover {
    background: #d01103;
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(186, 10, 2, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(186, 10, 2, 0.4);
  }
  @media (max-width: 768px) {
    padding: 9px 14px;
    font-size: 0.8rem;
  }
`;

const ConsultationFormPage = () => {
  return (
    <Container>
      <LeftSection>
        <Overlay />
        <Content>
          <h2>Have your personal injury questions answered</h2>
          <p>Consult with an attorney for free</p>
          <strong>24/7 @ +1 213-833-8361</strong>
        </Content>
      </LeftSection>
      <RightSection>
        <Form>
          <h2>Book your FREE consultation today!</h2>
          <p>
            We are not your average law firm – call us now to get the
            compensation that you deserve.
          </p>
          <p>
            <strong>Pay Nothing Until YOU Win!</strong>
          </p>

          <InputGroup>
            <Input type="text" placeholder="Name" />
          </InputGroup>
          <InputGroup>
            <Input type="email" placeholder="Email" />
          </InputGroup>
          <InputGroup>
            <Input type="text" placeholder="Phone" />
          </InputGroup>
          <InputGroup>
            <Textarea placeholder="Tell us about your accident or arrest..."></Textarea>
          </InputGroup>
          <Button type="submit">Free Case Evaluation</Button>
        </Form>
      </RightSection>
    </Container>
  );
};
export default ConsultationFormPage;
