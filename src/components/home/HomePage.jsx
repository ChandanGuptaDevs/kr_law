import React from "react";
import Header from "../common/Header";
import Hero from "./Hero";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";
import MillionsRecovered from "./MillionsRecovered";
import PracticeAreas from "./PracticeAreas";
import Attorney from "./Attorney";
import FAQ from "./FAQ";
import News from "./News";
import CTABanner from "../common/CTABanner";
import Footer from "../common/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <MillionsRecovered />
      <Testimonials />
      <PracticeAreas />
      <Attorney />
      <FAQ />
      <News />
      <CTABanner />
      <Footer />
    </>
  );
};

export default HomePage;
