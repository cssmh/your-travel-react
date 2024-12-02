import React from "react";
import { Link } from "react-router-dom";

// Function to truncate content to a certain number of characters
const truncateContent = (content, maxLength) => {
  if (content?.length > maxLength) {
    return content?.slice(0, maxLength) + "...";
  }
  return content;
};

const BlogCard = ({ id, image, title, description }) => {
  const truncatedContent = truncateContent(description, 230); // Limit content to 150 characters

  return (
    <div className="bg-white rounded-[20px] overflow-hidden flex flex-col border border-gray-300">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 flex-1 text-sm">{truncatedContent}</p>
        <Link to={`/blog/${id}`} className="text-red-500 font-semibold hover:underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
