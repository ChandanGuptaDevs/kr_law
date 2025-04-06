import React from "react";
import Header from "../common/Header";
import BannerPage from "../common/BannerPage";
import AwardsPage from "../common/AwardsPage";
import ConsultationFormPage from "../common/ConsultationFormPage";
import CTABanner from "../common/CTABanner";
import Footer from "../common/Footer";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <>
      <Header />
      <BannerPage text="Contact Us" mainText="Contact KR Injury Law Team" />
      <ContactForm />
      <AwardsPage />
      <ConsultationFormPage />
      <CTABanner />
      <Footer />
    </>
  );
};

export default ContactPage;
