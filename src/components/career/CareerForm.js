import React from "react";

const CareerForm = () => {
  return (
    <div className="container mx-auto my-12 px-6 md:px-12 lg:px-32">
      <div className="flex flex-col rounded-[30px] bg-red-600 text-white md:flex-row items-center overflow-hidden">
        {/* Left Section: Image */}
        <div className="md:w-1/3 flex justify-center items-center p-10">
          <img src="/career4.png" alt="Career" className="w-full h-auto" />
        </div>

        {/* Right Section: Form */}
        <div className="md:w-2/3 py-12 px-6 flex flex-col max-w-[720px]">
          {/* Heading */}
          <h2 className="text-5xl font-semibold mb-4">Leave us a message</h2>

          {/* Form Fields */}
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border rounded-2xl bg-red-600 focus:outline-none"
                placeholder="name"
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border rounded-2xl bg-red-600 focus:outline-none"
                placeholder="email"
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 border rounded-2xl bg-red-600 focus:outline-none"
                placeholder="Phone number"
              />
            </div>

            {/* Textarea */}
            <div>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-2xl focus:outline-none bg-red-600"
                placeholder="Write your message here..."
              ></textarea>
            </div>
          </form>

          {/* Paragraph */}
          <p className="text-sm text-white pt-4">
            By clicking the Submit button you agree to our Privacy Policy
          </p>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <button className="py-2 px-6 bg-white text-red-600 rounded-lg shadow-md hover:bg-gray-200 transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
