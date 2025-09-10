import AccidentReportHero from "@/components/blog/posts/accident-report/AccidentReportHero";
import AccidentReportContent from "@/components/blog/posts/accident-report/AccidentReportContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title:
    "How to Get the Accident Report for Your Personal Injury Case | KR Law, APC",
  description:
    "Learn how to obtain police accident reports for your personal injury case in California, why they're important, and how they can help maximize your settlement.",
};

export default function AccidentReportBlogPost() {
  return (
    <main>
      <SchemaOrg
        title="How to Get the Accident Report for Your Personal Injury Case | KR Law, APC"
        description="Learn how to obtain police accident reports for your personal injury case in California, why they're important, and how they can help maximize your settlement."
        url="https://krlaw.com/blog/accident-report"
        imageUrl="https://krlaw.com/images/how-to-get-the-accident-report-for-your-personal-injury-case.jpg"
      />
      <AccidentReportHero />
      <AccidentReportContent />
    </main>
  );
}
