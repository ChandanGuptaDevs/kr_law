import HiringLawyerHero from "@/components/blog/posts/hiring-lawyer/HiringLawyerHero";
import HiringLawyerContent from "@/components/blog/posts/hiring-lawyer/HiringLawyerContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Top 5 Mistakes When Hiring a Personal Injury Lawyer | KR Law, APC",
  description:
    "Avoid these common mistakes when hiring a personal injury lawyer. Learn how to find the right attorney for your case and maximize your compensation.",
};

export default function HiringLawyerBlog() {
  return (
    <main>
      <SchemaOrg
        title="Top 5 Mistakes When Hiring a Personal Injury Lawyer | KR Law, APC"
        description="Avoid these common mistakes when hiring a personal injury lawyer. Learn how to find the right attorney for your case and maximize your compensation."
        url="https://krlaw.com/blog/hiring-lawyer"
        imageUrl="https://krlaw.com/images/top-5-mistakes-when-hiring-a-personal-injury-lawyer.webp"
      />
      <HiringLawyerHero />
      <HiringLawyerContent />
    </main>
  );
}
