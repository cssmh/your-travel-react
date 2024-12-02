import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogPosts";

const BlogDetail = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(id, 10));

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className=" mx-4 p-6 mt-6 md:mx-12 md:mt-12">
      <h2 className=" text-sm sm:text-3xl font-bold mb-6 text-center">
        {blogPost.title}
      </h2>
      <h2 className=" text-sm  font-bold mb-6 text-center text-red-500"> 
        {blogPost.publihed} 
        </h2>
      <img
        src={blogPost.image}
        alt={blogPost.title}
        className="w-[100%] h-auto object-cover rounded-md mb-4"
      />
      <div class="max-w-[1000px] m-auto my-10">
        <p className="text-gray-700 text-lg text-center">{blogPost.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
