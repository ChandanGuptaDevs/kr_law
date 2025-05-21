import CarAccidentHero from "@/components/car-accidents/CarAccidentHero";
import CarAccidentContent from "@/components/car-accidents/CarAccidentContent";
import OffHighwayAccidentsSection from "@/components/car-accidents/OffHighwayAccidentsSection";
import FormSR1Section from "@/components/car-accidents/FormSR1Section";
import CarAccidentHelpSection from "@/components/car-accidents/CarAccidentHelpSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Car Accident Lawyers | KR Law Group",
  description:
    "Experienced car accident lawyers at KR Law Group can help you navigate the complex legal process after an accident. Get the compensation you deserve.",
  keywords:
    "car accident lawyer, auto accident attorney, personal injury lawyer, KR Law Group, vehicle collision, car crash compensation",
};

export default function CarAccidentsPage() {
  return (
    <main>
      <SchemaOrg
        title="Car Accident Lawyers | KR Law Group"
        description="Experienced car accident lawyers at KR Law Group can help you navigate the complex legal process after an accident. Get the compensation you deserve."
        url="https://krlaw.com/car-accidents"
        imageUrl="https://krlaw.com/images/car-accident-banner.jpg"
      />
      <CarAccidentHero />
      <CarAccidentContent />
      <OffHighwayAccidentsSection />
      <FormSR1Section />
      <CarAccidentHelpSection />
      <SettlementsBanner />
    </main>
  );
}
