// src/components/about/ContactForm.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import Image from "next/image";

const FormSection = styled.section`
  position: relative;
  width: 100%;
  background: #1b2632;
  padding: 60px 0;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    display: none; /* Hide the desktop form on mobile */
  }
`;

const FormContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 50px;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

const FormTitle = styled.h2`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 44px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 16px;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`;

const FormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
  }
`;

const PayNothingText = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 115%;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 40px;
  text-align: center;
  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 32px;

    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const FormGroup = styled.div`
  position: relative;
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;

const FullWidthFormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 40px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 35px;
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  padding: 10px 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 0;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid #ffffff;
  padding: 10px 0;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  color: #ffffff;
  outline: none;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    padding: 8px 0;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 6px 0;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 10px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 74%;
  display: flex;
  align-items: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  pointer-events: none;
  transition: 0.3s ease all;

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 17px;
    top: 8px;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    top: 6px;
  }
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  gap: 10px;
  width: 263px;
  height: 58px;
  background: #ffffff;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 7px 12px 8px rgba(0, 0, 0, 0.3),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 240px;
    height: 54px;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 50px;
    padding: 12px 14px;
  }
`;

const ButtonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${SubmitButton}:hover & {
    opacity: 1;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    line-height: 27px;
  }

  @media (max-width: 768px) {
    font-size: 17px;
    line-height: 25px;
  }
`;

const ArrowIcon = styled(Image)`
  transition: transform 0.3s ease;

  ${SubmitButton}:hover & {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    width: 24px !important;
    height: 18px !important;
  }
`;
// Compact version for mobile screens that shows in the mobile view
const MobileFormContainer = styled.div`
  display: none;
  position: relative;
  background: #1b2632;
  backdrop-filter: blur(8.89px);
  border-radius: 28.46px;
  padding: 24px;
  max-width: 374px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
  }
`;

const MobileFormTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 10px;
`;

const MobileFormSubtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 115%;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin-bottom: 20px;
  justify-content: center;
`;

const MobileFormGroup = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;
`;

const MobileInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 8px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-16px);
    font-size: 12px;
  }
`;

const MobileTextarea = styled.textarea`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  padding: 8px 0;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  color: #ffffff;
  outline: none;
  resize: none;

  &::placeholder {
    color: transparent;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-16px);
    font-size: 12px;
  }
`;

const MobileLabel = styled.label`
  position: absolute;
  left: 0;
  top: 8px;
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
  transition: 0.3s ease all;
`;

const MobileSubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 14px;
  gap: 8px;
  width: 208px;
  height: 49px;
  background: #ffffff;
  box-shadow: 7px 9px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin: 20px auto 0;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 7px 12px 8px rgba(0, 0, 0, 0.3),
      inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const MobileButtonText = styled.span`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 21px;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #1b2632;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  ${MobileSubmitButton}:hover & {
    opacity: 1;
  }
`;

interface FormValues {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [mobileFormValues, setMobileFormValues] = useState<
    Omit<FormValues, "firstName" | "lastName"> & { fullName: string }
  >({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMobileChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMobileFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Desktop form submitted:", formValues);
    // Here you would typically send the form data to your backend
  };

  const handleMobileSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Mobile form submitted:", mobileFormValues);
    // Here you would typically send the form data to your backend
  };

  return (
    <>
      {/* Desktop/Tablet Form */}
      <FormSection>
        <FormContainer>
          <FormHeader>
            <FormTitle>Book Your Free Consultation Today</FormTitle>
            <FormSubtitle>
              We are not your average law firm – call us now to get the
              compensation that you deserve.
            </FormSubtitle>
          </FormHeader>

          <PayNothingText>Pay Nothing Until YOU Win !</PayNothingText>

          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <Input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formValues.firstName}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="firstName">First Name</Label>
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  value={formValues.lastName}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="lastName">Last name</Label>
              </FormGroup>
            </FormRow>

            <FormRow>
              <FormGroup>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="phone">Phone Number</Label>
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
                <Label htmlFor="email">Email address</Label>
              </FormGroup>
            </FormRow>

            <FullWidthFormGroup>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your accident or arrest..."
                value={formValues.message}
                onChange={handleChange}
                rows={1}
                required
              ></Textarea>
              <Label htmlFor="message">
                Tell us about your accident or arrest...
              </Label>
            </FullWidthFormGroup>

            <SubmitButton type="submit">
              <ButtonText>Free Case Evaluation</ButtonText>
              <ArrowIcon
                src="/images/Arrow.svg"
                alt="Arrow"
                width={27}
                height={20}
              />
            </SubmitButton>
          </Form>
        </FormContainer>
      </FormSection>

      {/* Mobile Form (Compact Version) */}
      <MobileFormContainer>
        <MobileFormTitle>Book Your Free Consultation Today</MobileFormTitle>
        <MobileFormSubtitle>
          We are not your average law firm call us now to get the compensation
          that you deserve.
        </MobileFormSubtitle>

        <form onSubmit={handleMobileSubmit}>
          <MobileFormGroup>
            <MobileInput
              type="text"
              id="mobile-fullName"
              name="fullName"
              placeholder="Full Name"
              value={mobileFormValues.fullName}
              onChange={handleMobileChange}
              required
            />
            <MobileLabel htmlFor="mobile-fullName">Full Name</MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileInput
              type="tel"
              id="mobile-phone"
              name="phone"
              placeholder="Phone number"
              value={mobileFormValues.phone}
              onChange={handleMobileChange}
              required
            />
            <MobileLabel htmlFor="mobile-phone">Phone number</MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileInput
              type="email"
              id="mobile-email"
              name="email"
              placeholder="Email Address"
              value={mobileFormValues.email}
              onChange={handleMobileChange}
              required
            />
            <MobileLabel htmlFor="mobile-email">Email Address</MobileLabel>
          </MobileFormGroup>

          <MobileFormGroup>
            <MobileTextarea
              id="mobile-message"
              name="message"
              placeholder="Tell us about your accident or arrest..."
              value={mobileFormValues.message}
              onChange={handleMobileChange}
              rows={1}
              required
            ></MobileTextarea>
            <MobileLabel htmlFor="mobile-message">
              Tell us about your accident or arrest...
            </MobileLabel>
          </MobileFormGroup>

          <MobileSubmitButton type="submit">
            <MobileButtonText>FREE CASE EVALUATION</MobileButtonText>
            <ArrowIcon
              src="/images/Arrow.svg"
              alt="Arrow"
              width={21}
              height={16}
            />
          </MobileSubmitButton>
        </form>
      </MobileFormContainer>
    </>
  );
}
