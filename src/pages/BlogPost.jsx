import React from "react";
import { Link, useParams } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import { blogPosts, formatDate } from "../utils/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  return (
    <MainLayout>
      <div className="flex flex-col w-full min-h-screen px-6 sm:px-10 md:px-20 lg:px-56 pt-32 pb-16 gap-6">
        {post ? (
          <>
            <div className="text-sm font-semibold text-cust-orange">
              {post.category}
            </div>
            <h1 className="text-3xl sm:text-5xl font-black leading-snug">
              {post.title}
            </h1>
            <div className="text-sm opacity-60">
              {formatDate(post.date)} · {post.readTime} min read
            </div>
            <hr className="bg-black opacity-50 w-1/2 h-1 rounded-full" />
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-lg font-medium text-justify">
                {paragraph}
              </p>
            ))}
          </>
        ) : (
          <h1 className="text-3xl font-black">Post not found</h1>
        )}
        <Link to="/blog" className="font-bold text-cust-orange">
          &larr; Back to Blog
        </Link>
      </div>
    </MainLayout>
  );
};

export default BlogPost;
