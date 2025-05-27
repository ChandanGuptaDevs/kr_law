import PersonalInjuryTrialHero from "@/components/blog/posts/personal-injury-trial/PersonalInjuryTrialHero";
import PersonalInjuryTrialContent from "@/components/blog/posts/personal-injury-trial/PersonalInjuryTrialContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "What Makes A Personal Injury Case Go To Trial? | KR Law Group",
  description:
    "Learn what factors lead to a personal injury lawsuit going to trial instead of settling out of court, and how an experienced lawyer can help your case.",
};

export default function PersonalInjuryTrialBlogPost() {
  return (
    <main>
      <SchemaOrg
        title="What Makes A Personal Injury Case Go To Trial? | KR Law Group"
        description="Learn what factors lead to a personal injury lawsuit going to trial instead of settling out of court, and how an experienced lawyer can help your case."
        url="https://krlaw.com/blog/personal-injury-trial"
        imageUrl="https://krlaw.com/images/what-makes-a-personal-injury-lawsuit-go-to-trial.jpg"
      />
      <PersonalInjuryTrialHero />
      <PersonalInjuryTrialContent />
    </main>
  );
}
