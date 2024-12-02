import React from "react";

const ContactCard = ({ icon: Icon, title, paragraph1, paragraph2 }) => {
  return (
    <div className="bg-red-600  rounded-lg p-5 w-full md:w-auto m-auto md:!m-[unset]">
      <div className="text-center mb-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white m-auto">
          <Icon className="text-red-500 text-2xl" />
        </div>
      </div>
      <h3 className="text-xl text-white font-semibold  mb-4">
        {title}
      </h3>
      <p className="text-white text-sm mb-2">{paragraph1}</p>
      <p className="text-white text-sm">{paragraph2}</p>
    </div>
  );
};
export default ContactCard;
