"use client";

import { useTina } from "tinacms/dist/react";
import BlogPostHero from "@/components/blog/BlogPostHero";
import BlogPostContent from "@/components/blog/BlogPostContent";

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

  return (
    <>
      <BlogPostHero 
        title={post.title}
        date={post.date}
        author={post.author}
        category={post.category}
        image={post.image}
      />
      <BlogPostContent 
        content={post.body}
        tags={post.tags}
      />
    </>
  );
}