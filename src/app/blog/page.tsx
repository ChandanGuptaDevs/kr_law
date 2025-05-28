import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";

export const metadata = {
  title: "Blog | KR Law Group | Personal Injury Law Insights",
  description:
    "Explore expert insights on personal injury law, accident claims, and legal advice from the attorneys at KR Law Group.",
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "Top 5 Mistakes When Hiring a Personal Injury Lawyer",
      slug: "hiring-lawyer",

      excerpt:
        "Finding the right legal help or personal injury lawyer can be a daunting prospect. You often have to find a lawyer at a time when you are already experiencing a significant amount of stress and anxiety.",
      imagePath:
        "/images/top-5-mistakes-when-hiring-a-personal-injury-lawyer.jpg",
    },
    {
      title: "Who Pays Your Medical Bills in a Personal Injury Lawsuit?",
      slug: "medical-bills",

      excerpt:
        "When you're involved in an accident resulting in personal injury, the confusion of the situation can make it difficult to think through who is responsible for your medical expenses.",
      imagePath:
        "/images/who-pays-your-medical-bills-in-a-personal-injury-lawsuit.jpg",
    },
    {
      title: "What Makes A Personal Injury Case Go To Trial?",
      slug: "personal-injury-trial",

      excerpt:
        "Personal injury cases can be complicated, but the law doesn't have to be. Learn what factors lead to a case going to trial instead of settling out of court.",
      imagePath:
        "/images/what-makes-a-personal-injury-lawsuit-go-to-trial.jpeg",
    },
    {
      title: "How to Get the Accident Report for Your Personal Injury Case",
      slug: "accident-report",

      excerpt:
        "Car accident reports are a critical part of the process when it comes to getting insurance, filing a claim, or dealing with personal injury cases. Learn how to obtain one.",
      imagePath:
        "/images/how-to-get-the-accident-report-for-your-personal-injury-case.jpg",
    },
    {
      title: "What Makes A Good Personal Injury Case?",
      slug: "good-personal-injury-case",

      excerpt:
        "Personal injury law is a highly specialized field, and cases can vary depending on the circumstances. Learn what elements create a strong case for compensation.",
      imagePath: "/images/what-makes-a-good-personal-injury-case.jpg",
    },
    {
      title: "What Is The Timeline For A Personal Injury Case?",
      slug: "personal-injury-timeline",

      excerpt:
        "The timeline for personal injury cases depends on many factors including the nature of injuries and case complexity. Learn what to expect at each stage.",
      imagePath: "/images/what-is-the-limeline-for-a-personal-injury-case.jpg",
    },
    // Add more blog posts here as you create them
  ];

  return (
    <main>
      <BlogHero />

      <BlogListing posts={blogPosts} />
    </main>
  );
}
