import React from "react";
import BlogCard from "./Blogcard";
import { LuCalendarPlus } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiPhonePlusThin } from "react-icons/pi";
import { HiArrowsPointingIn } from "react-icons/hi2";

const Blog = () => {
  const blogData = [
    {
      imageSrc: "/blog1.png",
      title: "Beautiful Switzerland. Let’s travel!",
      description:
        "A land where every sunrise paints the mountains with a golden hue and every meal feels like a taste of heaven.",
    },
    {
      imageSrc: "/blog2.png",
      title: "Beautiful Switzerland. Let’s travel!",
      description:
        "A land where every sunrise paints the mountains with a golden hue and every meal feels like a taste of heaven.",
    },
    {
      imageSrc: "/blog3.png",
      title: "Beautiful Switzerland. Let’s travel!",
      description:
        "A land where every sunrise paints the mountains with a golden hue and every meal feels like a taste of heaven.",
    },
    {
      imageSrc: "/blog4.png",
      title: "Beautiful Switzerland. Let’s travel!",
      description:
        "A land where every sunrise paints the mountains with a golden hue and every meal feels like a taste of heaven.",
    },
  ];

  const handleReadMore = () => {
    console.log("Read more clicked!");
  };

  return (
    <>
      <div className="mx-8 md:mx-20 mt-8">
        <h2 className="text-2xl md:text-5xl font-bold text-black text-center">
          Our <span className="underlined underline-mask">best</span> blogs ?
        </h2>
       
        <p className="text-sm text-gray-600 text-center mt-8">
          An epic adventure of breathtaking views and vibrant cultures
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  mx-8 md:mx-20 ">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            imageSrc={blog.imageSrc}
            title={blog.title}
            description={blog.description}
            onReadMore={handleReadMore}
          />
        ))}
      </div>

      {/* Icons Row with Titles */}
      <div className="flex flex-wrap justify-around gap-8 xs:gap-16 lg:gap-32 xl:gap-44 my-12 mx-8 md:mx-20 md:justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-[#ffeeda] flex items-center justify-center rounded-full text-[#5e3300] m-auto mb-2">
            <LuCalendarPlus size={24} />
          </div>
          <p className="text-sm ">Seamless Booking</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#e1ecfe] flex items-center justify-center rounded-full text-[#00235e] m-auto  mb-2">
            <RiSecurePaymentLine size={24} />
          </div>
          <p className="text-sm ">Secure Payment</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#E3F4F6] flex items-center justify-center rounded-full text-[#003f46] m-auto mb-2">
            <PiPhonePlusThin size={24} />
          </div>
          <p className="text-sm ">24/7 Customer care</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#E9E3F6] flex items-center justify-center rounded-full text-[#13003a] m-auto mb-2">
            <HiArrowsPointingIn size={24} />
          </div>
          <p className="text-sm ">Management</p>
        </div>
      </div>
    </>
  );
};

export default Blog;
