import GoodPersonalInjuryCaseHero from "@/components/blog/posts/good-personal-injury-case/GoodPersonalInjuryCaseHero";
import GoodPersonalInjuryCaseContent from "@/components/blog/posts/good-personal-injury-case/GoodPersonalInjuryCaseContent";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "What Makes A Good Personal Injury Case? | KR Law Group",
  description:
    "Learn about the key elements that make a strong personal injury case, from proving negligence to documenting damages and working with an experienced lawyer.",
};

export default function GoodPersonalInjuryCaseBlogPost() {
  return (
    <main>
      <SchemaOrg
        title="What Makes A Good Personal Injury Case? | KR Law Group"
        description="Learn about the key elements that make a strong personal injury case, from proving negligence to documenting damages and working with an experienced lawyer."
        url="https://krlaw.com/blog/good-personal-injury-case"
        imageUrl="https://krlaw.com/images/what-makes-a-good-personal-injury-case.jpg"
      />
      <GoodPersonalInjuryCaseHero />
      <GoodPersonalInjuryCaseContent />
    </main>
  );
}
