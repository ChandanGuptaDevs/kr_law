"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

const FormWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(27, 38, 50, 0.5);
  backdrop-filter: blur(8.89323px);
  border-radius: 28.4583px;
  padding: 20px 32px;

  @media (max-width: 768px) {
    padding: 15px 20px;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
  }
`;

const FormTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 115%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  text-align: center;
  margin: 0 0 10px 0;
  justify-content: center;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 0 0 40px 0;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 0 0 20px 0;
  }
`;

const PayNothingText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 115%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: 40px 0;
  justify-content: center;

  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const InputGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 33px;
`;

interface LabelProps {
  $hasValue: boolean;
}

const Label = styled.label<LabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 74%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: 0.3s;

  ${(props) =>
    props.$hasValue &&
    `
    top: -20px;
    font-size: 12px;
  `}
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 0 10px 0;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  outline: none;

  &:focus + ${Label} {
    top: -20px;
    font-size: 12px;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0 0 10px 0;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  outline: none;
  resize: none;

  &:focus + ${Label} {
    top: -20px;
    font-size: 12px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  background: #ffffff;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  opacity: 0.8;
  cursor: pointer;
  margin: 40px auto;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px 14px;
  }
`;

const ButtonText = styled.span`
  margin-right: 0px;
`;

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic here - will connect to Strapi API
    console.log("Form submitted:", formData);
  };

  return (
    <FormWrapper>
      <FormTitle>Book Your Free Consultation Today</FormTitle>
      <FormSubtitle>
        We are not your average law firm call us now to get the compensation
        that you deserve.
      </FormSubtitle>
      <PayNothingText>Pay Nothing Until YOU Win !</PayNothingText>

      <form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Label htmlFor="fullName" $hasValue={formData.fullName !== ""}>
            Full Name
          </Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <Label htmlFor="phone" $hasValue={formData.phone !== ""}>
            Phone number
          </Label>
        </InputGroup>

        <InputGroup>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email" $hasValue={formData.email !== ""}>
            Email Address
          </Label>
        </InputGroup>

        <InputGroup>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={1}
            required
          />
          <Label htmlFor="message" $hasValue={formData.message !== ""}>
            Tell us about your accident or arrest...
          </Label>
        </InputGroup>

        <SubmitButton type="submit">
          <ButtonText>Contact Us Today</ButtonText>
          <Image src="/images/Arrow.svg" alt="Arrow" width={40} height={19} />
        </SubmitButton>
      </form>
    </FormWrapper>
  );
}
