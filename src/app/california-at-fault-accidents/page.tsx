import CaliforniaAtFaultHero from "@/components/california-at-fault-accidents/CaliforniaAtFaultHero";
import CaliforniaContent from "@/components/california-at-fault-accidents/CaliforniaContent";
import PropertyDamageSection from "@/components/california-at-fault-accidents/PropertyDamageSection";
import CarAccidentInfoSection from "@/components/california-at-fault-accidents/CarAccidentInfoSection";
import HowWeCanHelpSection from "@/components/california-at-fault-accidents/HowWeCanHelpSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "California At Fault Accidents | KR Law Group",
  description:
    "Learn about California's at-fault accident laws and how KR Law Group can help you navigate the complex legal process after an accident.",
  keywords:
    "California at fault accidents, at fault car accident, California liability laws, personal injury lawyer, auto accident attorney, KR Law Group",
};

export default function CaliforniaAtFaultAccidentsPage() {
  return (
    <main>
      <SchemaOrg
        title="California At Fault Accidents | KR Law Group"
        description="Learn about California's at-fault accident laws and how KR Law Group can help you navigate the complex legal process after an accident."
        url="https://krlaw.com/california-at-fault-accidents"
        imageUrl="https://krlaw.com/images/california-fault-accidents-banner.jpg"
      />
      <CaliforniaAtFaultHero />
      <CaliforniaContent />
      <PropertyDamageSection />
      <CarAccidentInfoSection />
      <HowWeCanHelpSection />
      <SettlementsBanner />
    </main>
  );
}
