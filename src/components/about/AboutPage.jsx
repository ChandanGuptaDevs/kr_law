import React from "react";
import Header from "../common/Header";
import AwardsPage from "../common/AwardsPage";
import ConsultationFormPage from "../common/ConsultationFormPage";
import BannerPage from "../common/BannerPage";
import CTABanner from "../common/CTABanner";
import Footer from "../common/Footer";
import PartnerPage from "./PartnerPage";
import ReviewsPage from "./ReviewsPage";

const AboutPage = () => {
  return (
    <>
      <Header />
      <BannerPage
        text="About Us"
        mainText="KR Law, APC"
        otherText="Founded by Kathy Rabii"
      />
      <PartnerPage />
      <ReviewsPage />
      <AwardsPage />
      <ConsultationFormPage />
      <CTABanner />
      <Footer />
    </>
  );
};

export default AboutPage;
