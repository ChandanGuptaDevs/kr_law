import PersonalInjuryTimelineHero from "@/components/blog/posts/personal-injury-timeline/PersonalInjuryTimelineHero";
import PersonalInjuryTimelineContent from "@/components/blog/posts/personal-injury-timeline/PersonalInjuryTimelineContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "What Is The Timeline For A Personal Injury Case? | KR Law Group",
  description:
    "Learn about the timeline for personal injury cases, from initial accident to settlement or trial, and when to consult with an experienced personal injury lawyer.",
};

export default function PersonalInjuryTimelineBlogPost() {
  return (
    <main>
      <SchemaOrg
        title="What Is The Timeline For A Personal Injury Case? | KR Law Group"
        description="Learn about the timeline for personal injury cases, from initial accident to settlement or trial, and when to consult with an experienced personal injury lawyer."
        url="https://krlaw.com/blog/personal-injury-timeline"
        imageUrl="https://krlaw.com/images/what-is-the-limeline-for-a-personal-injury-case.jpg"
      />
      <PersonalInjuryTimelineHero />
      <PersonalInjuryTimelineContent />
    </main>
  );
}
