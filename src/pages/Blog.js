import React from "react";
import { blogPosts } from "../components/blog/blogPosts";
import BlogCard from "../components/snippets/BlogCard";

const Blog = () => {
  return (
    <>
      <h1 className=" text-2xl sm:text-5xl font-bold text-red-500 mt-12 text-center">
        Blogs
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:mx-16">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            image={post.image}
            title={post.title}
            description={post.content}
          />
        ))}
      </div>
    </>
  );
};

export default Blog;
