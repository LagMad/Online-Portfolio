import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ThreeBackground from "../components/shared/ThreeBackground";
import { blogPosts, formatDate } from "../utils/blogPosts";

const Blog = () => {
  return (
    <MainLayout>
      <div className="flex flex-col w-full">
        <div className="relative flex w-full min-h-[60vh] bg-cust-darker-blue justify-center items-center text-white">
          <ThreeBackground />
          <div className="relative text-3xl sm:text-5xl md:text-9xl font-black border-[5px] border-white px-4 py-1 sm:px-8 sm:py-2 bg-cust-darker-blue/60">
            BLOG
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 md:px-20 lg:px-36 py-16">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="flex flex-col gap-4 p-6 rounded-2xl bg-white drop-shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-cust-orange">{post.category}</span>
                <span className="opacity-60">{post.readTime} min read</span>
              </div>
              <div className="text-2xl font-bold leading-snug">{post.title}</div>
              <div className="font-medium opacity-80">{post.excerpt}</div>
              <div className="mt-auto text-sm opacity-60">
                {formatDate(post.date)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Blog;
