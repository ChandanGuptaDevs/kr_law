import AirbnbAttorneyHero from "@/components/airbnb-attorney/AirbnbAttorneyHero";
import AirbnbAttorneyContent from "@/components/airbnb-attorney/AirbnbAttorneyContent";
import AirbnbLawsuitSection from "@/components/airbnb-attorney/AirbnbLawsuitSection";
import AirbnbInfoSection from "@/components/airbnb-attorney/AirbnbInfoSection";
import AirbnbHelpSection from "@/components/airbnb-attorney/AirbnbHelpSection";
import SettlementsBanner from "@/components/common/SettlementsBanner";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Airbnb Attorneys | KR Law Group",
  description:
    "Experienced Airbnb attorneys at KR Law Group can help you navigate legal issues with short-term rentals. Get expert legal representation for your Airbnb-related matters.",
  keywords:
    "Airbnb attorney, Airbnb lawyer, short-term rental lawyer, vacation rental legal issues, KR Law Group, Airbnb legal help",
};

export default function AirbnbAttorneyPage() {
  return (
    <main>
      <SchemaOrg
        title="Airbnb Attorneys | KR Law Group"
        description="Experienced Airbnb attorneys at KR Law Group can help you navigate legal issues with short-term rentals. Get expert legal representation for your Airbnb-related matters."
        url="https://krlaw.com/airbnb-attorney"
        imageUrl="https://krlaw.com/images/airbnb-attorney-banner.jpg"
      />
      <AirbnbAttorneyHero />
      <AirbnbAttorneyContent />
      <AirbnbLawsuitSection />
      <AirbnbInfoSection />
      <AirbnbHelpSection />
      <SettlementsBanner />
    </main>
  );
}
