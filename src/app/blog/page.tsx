import BlogHero from "@/components/blog/BlogHero";
import SchemaOrg from "@/components/common/SchemaOrg";

export const metadata = {
  title: "Blog & Resources | KR Law Group | Legal Insights",
  description:
    "Explore legal insights, news, and resources from KR Law Group. Learn about personal injury law, accident claims, and your rights.",
  keywords:
    "law blog, legal resources, personal injury insights, KR Law Group, legal news, accident claim tips",
};

export default function BlogPage() {
  return (
    <main>
      <SchemaOrg
        title="Blog & Resources | KR Law Group | Legal Insights"
        description="Explore legal insights, news, and resources from KR Law Group. Learn about personal injury law, accident claims, and your rights."
        url="https://krlaw.com/blog"
        imageUrl="https://krlaw.com/images/blog-banner.jpg"
      />
      <BlogHero />
      {/* Add other blog-related components here */}
    </main>
  );
}
