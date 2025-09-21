"use client";

import { useTina } from "tinacms/dist/react";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostContent from "@/components/blog/BlogPostContent";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function BlogPostClient({ data, query, variables }: any) {
  const { data: tinaData } = useTina({
    query,
    variables,
    data,
  });

  const post = tinaData?.post;

  if (!post) {
    return <div>Loading...</div>;
  }

  // Convert TinaMarkdown content to HTML string if needed
  const contentHtml = typeof post.body === 'string' 
    ? post.body 
    : post.body ? <TinaMarkdown content={post.body} /> : '';

  return (
    <>
      <BlogPostHero 
        title={post.title}
        date={post.date}
        author={post.author}
        category={post.category}
        image={post.image}
      />
      {typeof contentHtml === 'string' ? (
        <BlogPostContent 
          content={contentHtml}
          tags={post.tags}
        />
      ) : (
        <div className="blog-content">
          {contentHtml}
        </div>
      )}
    </>
  );
}