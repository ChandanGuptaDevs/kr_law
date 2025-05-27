import MedicalBillsHero from "@/components/blog/posts/medical-bills/MedicalBillsHero";
import MedicalBillsContent from "@/components/blog/posts/medical-bills/MedicalBillsContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title:
    "Who Pays Your Medical Bills In A Personal Injury Lawsuit? | KR Law Group",
  description:
    "Learn who is responsible for paying your medical bills after a personal injury accident in California and how a personal injury lawyer can help you.",
};

export default function MedicalBillsBlogPost() {
  return (
    <main>
      <SchemaOrg
        title="Who Pays Your Medical Bills In A Personal Injury Lawsuit? | KR Law Group"
        description="Learn who is responsible for paying your medical bills after a personal injury accident in California and how a personal injury lawyer can help you."
        url="https://krlaw.com/blog/medical-bills"
        imageUrl="https://krlaw.com/images/who-pays-your-medical-bills-in-a-personal-injury-lawsuit.jpg"
      />
      <MedicalBillsHero />
      <MedicalBillsContent />
    </main>
  );
}
