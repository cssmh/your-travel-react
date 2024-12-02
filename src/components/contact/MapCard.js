import React from "react";

const MapCard = () => {
  return (
    <div className="w-full lg:w-1/2 lg:h-[320px] mt-[10px] bg-gray-100 shadow-md rounded-lg overflow-hidden">
      {/* Embedded Google Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.8709792065086!2d-122.0842496846805!3d37.42199997982552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24c7d4b2a2b%3A0xada3e02e69d6d09b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1600213140958!5m2!1sen!2sus"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapCard;
