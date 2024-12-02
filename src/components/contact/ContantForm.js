import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-white rounded-lg p-6 w-full lg:h-[300px] lg:w-1/2">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in touch</h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-2">
        Send us a note, and our staff will be pleased to help.
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Name and Email Fields */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Message Text Area */}
        <textarea
          placeholder="Message"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-md"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
